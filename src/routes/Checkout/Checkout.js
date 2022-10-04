// import { useContext } from 'react'
// import { CartIconContext } from '../../context/cartIcon'
import { useSelector, useDispatch } from 'react-redux'
import PaymentForm from '../../components/PaymentForm/PaymentForm';

import { addItemToCart, removeItemFromCart, deleteItemFromCart} from '../../store/cart/cartActions';
import { selectCartItems, selectTotalCostItems} from '../../store/cart/cartSelector';

import styles from './Checkout.module.scss'

function Checkout() {
  // const { cartItems, addItemToCart, removeItemFromCart, deleteItemFromCart, totalItemsCost } = useContext(CartIconContext)
  
  // Use selectCartItems value from selector
  const cartItems = useSelector(selectCartItems)

  // Use selectTotalCostItems value from selector
  const totalItemsCost = useSelector(selectTotalCostItems)
  const dispatch = useDispatch()
  return (
    <div className={styles.container}>
     {/* Map cartItems to display item details and for each item the added functionailty to add, remove or delele from cart */}
     {cartItems.map((cartItem) => {
       const { name, quantity, price, id } = cartItem
       return (
        <div key={id}>
            <h2>{name}</h2>
            <p>{quantity}</p>
            <p onClick={() => dispatch(addItemToCart(cartItems,cartItem))}>Add</p>
            <p onClick={() => dispatch(removeItemFromCart(cartItems,cartItem))}>Remove</p>
            <p>{price}</p>
            <p onClick={() => dispatch(deleteItemFromCart(cartItems,cartItem))}>Delete item</p>
        </div>
       )
     })}
     <span>Total : {totalItemsCost}</span>
     {/* Stripe payment checkout */}
     <PaymentForm />
    </div>
  )
}

export default Checkout
