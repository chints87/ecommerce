import React from 'react'

import styles from './CartItem.module.scss'

function CartItem({ cartItem }) {
  console.log(cartItem)
  const { name, imageUrl, price,quantity } = cartItem;
  return (
    <div className={styles.container}>
      <img src={imageUrl} alt={name} />
      <div className={styles.itemDetails}>
        <span className={styles.name}>{name}</span>
        <span className={styles.price}>{quantity} X {price}</span>
      </div>
      
    </div>
  )
}

export default CartItem
