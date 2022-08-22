

import styles from './CartDropDown.module.scss'

import CustomButton from '../CustomButton/CustomButton'

function CartDropDown() {
  return (
    <div className={styles.container}>
      <div className={styles.cartItems} />
      <CustomButton type="button" className="btn">GO TO CHECKOUT</CustomButton>
    </div>
  )
}

export default CartDropDown
