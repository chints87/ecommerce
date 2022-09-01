import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import CustomButton from '../CustomButton/CustomButton'

import styles from './PaymentForm.module.scss'


function PaymentForm() {
  const stripe = useStripe()
  const elements = useElements()
  
  const paymentHandler = async(e) => {
    e.preventDefault();

    if(!stripe || !elements){
      return 
    }    

    const response = await fetch('/netlify/functions/create-payment-intent',{
      method: 'post',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ amount: 10000})
    }).then((res) => res.json());

    console.log(response)

  }
  return (
    <form onSubmit={() => paymentHandler()} className={styles.container}>
      <CardElement className={styles.card} />
      <CustomButton 
        className="btn"        
        >Pay Now</CustomButton>
    </form>
  )
}

export default PaymentForm
