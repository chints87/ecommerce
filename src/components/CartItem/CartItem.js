import React from 'react'

import styles from './CartItem.module.scss'

function CartItem({ cartItem }) {
  console.log(cartItem)
  const { name, quantity } = cartItem;
  return (
    <div className={styles.container}>
      <h2>{name}</h2>
      <span>{quantity}</span>
    </div>
  )
}

export default CartItem
