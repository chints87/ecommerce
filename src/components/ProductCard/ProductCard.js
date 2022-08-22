import { useContext } from 'react';
import { CartIconContext } from '../../context/cartIcon';

import styles from './ProductCard.module.scss'
import CustomButton from '../../components/CustomButton/CustomButton';

function ProductCard({product}) {
  const { addItemToCart } = useContext(CartIconContext);
  const {name, price, imageUrl} = product;
  return (
    <div className={styles.container}>        
      <img className={styles.image} src={imageUrl} alt={name} />
        <div className={styles.info}>
            <span className={styles.name}>{name}</span>
            <span className={styles.price}>{price}</span>
        </div>
        <CustomButton type="button" className="btn" onClick={() => addItemToCart(product)}>Add to cart</CustomButton>  
    </div>
  )
}

export default ProductCard
