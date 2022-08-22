import { useContext } from 'react'
import { CartIconContext } from '../../context/cartIcon'
import styles from './CartDropDown.module.scss'

import CustomButton from '../CustomButton/CustomButton'
import CartItem from '../CartItem/CartItem'

function CartDropDown() {
  const { cartItems } = useContext(CartIconContext)
  console.log(cartItems)
  return (
    <div className={styles.container}>
      <div className={styles.cartItems}>
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </div>
      <CustomButton type="button" className="btn">GO TO CHECKOUT</CustomButton>
    </div>
  )
}

export default CartDropDown
