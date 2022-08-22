import { useContext } from 'react'
import { CartIconContext } from '../../context/cartIcon'

import styles from './Checkout.module.scss'

function Checkout() {
  const { cartItems, addItemToCart, removeItemFromCart, deleteItemFromCart, totalItemsCost } = useContext(CartIconContext)
  return (
    <div className={styles.container}>
     {cartItems.map((cartItem) => {
       const { name, quantity, price, id } = cartItem
       return (
        <div key={id}>
            <h2>{name}</h2>
            <p>{quantity}</p>
            <p onClick={() => addItemToCart(cartItem)}>Add</p>
            <p onClick={() => removeItemFromCart(cartItem)}>Remove</p>
            <p>{price}</p>
            <p onClick={() => deleteItemFromCart(cartItem)}>Delete item</p>
        </div>
       )
     })}
     <span>Total : {totalItemsCost}</span>
    </div>
  )
}

export default Checkout
