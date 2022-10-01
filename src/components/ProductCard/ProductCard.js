// import { useContext } from 'react';
// import { CartIconContext } from '../../context/cartIcon';
import { useSelector, useDispatch } from 'react-redux';

import styles from './ProductCard.module.scss'
import CustomButton from '../../components/CustomButton/CustomButton';

import { addItemToCart } from '../../store/cart/cartActions'
import { selectCartItems } from '../../store/cart/cartSelector';

function ProductCard({product}) {
  // const { addItemToCart } = useContext(CartIconContext);
  
  // Get cartItems from the selector
  const cartItems = useSelector(selectCartItems)
  const dispatch = useDispatch()
  const {name, price, imageUrl} = product;
  return (
    <div className={styles.container}>        
      <img className={styles.image} src={imageUrl} alt={name} />
        <div className={styles.info}>
            <span className={styles.name}>{name}</span>
            <span className={styles.price}>{price}</span>
        </div>
        <CustomButton type="button" className="btn" onClick={() => dispatch(addItemToCart(cartItems,product))}>Add to cart</CustomButton>  
    </div>
  )
}

export default ProductCard
