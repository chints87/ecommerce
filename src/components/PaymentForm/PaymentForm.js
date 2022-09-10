import { useState } from 'react';
import { useSelector } from 'react-redux';

import { selectTotalCostItems } from '../../store/cart/cartSelector';
import { selectCurrentUser } from '../../store/user/userSelector';

import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import CustomButton from '../CustomButton/CustomButton'

import styles from './PaymentForm.module.scss'


function PaymentForm() {
  const stripe = useStripe()
  const elements = useElements()

  const amount = useSelector(selectTotalCostItems);
  const currentUser = useSelector(selectCurrentUser);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false)

  const paymentHandler = async(e) => {
    e.preventDefault();

    if(!stripe || !elements){
      return 
    }    
    
    setIsProcessingPayment(true)
    const response = await fetch('/.netlify/functions/create-payment-intent',{
      method: 'post',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ amount: amount * 100 , name: currentUser ? currentUser : 'Guest' })
    }).then((res) => res.json());

    

    console.log(response)
    const { client_secret} = response.paymentIntent

    const paymentResult = await stripe.confirmCardPayment(client_secret,{
      payment_method: {
        card: elements.getElement(CardElement)               
      }
    })  

    setIsProcessingPayment(false)

    if(paymentResult.error){
      alert('Unsucessful Payment')
    }else{
      if(paymentResult.paymentIntent.status === 'succeeded'){
        alert('Payment success')
      }
    }

  }
  return (
    <form onSubmit={paymentHandler} className={styles.container}>
      <CardElement className={styles.card} />
      <CustomButton 
        className="btn" 
        disabled={isProcessingPayment}   
        >{!isProcessingPayment ? 'Pay Now' : 'Processing'}</CustomButton>
    </form>
  )
}

export default PaymentForm
