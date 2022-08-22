import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartIconContext } from '../../context/cartIcon'
import styles from './CartDropDown.module.scss'

import CustomButton from '../CustomButton/CustomButton'
import CartItem from '../CartItem/CartItem'

function CartDropDown() {
  const { cartItems } = useContext(CartIconContext)
  const navigate = useNavigate()

  return (
    <div className={styles.container}>
      <div className={styles.cartItems}>
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </div>
      <CustomButton type="button" className="btn" onClick={() => navigate('/checkout')}>
        GO TO CHECKOUT
      </CustomButton>
    </div>
  )
}

export default CartDropDown
