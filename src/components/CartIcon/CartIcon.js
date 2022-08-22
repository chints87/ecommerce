import { useContext } from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { CartIconContext } from '../../context/cartIcon';
import styles from './CartIcon.module.scss';

export default function CartIcon() {
  const { cartIcon, cartCountItem, setCartIcon } = useContext(CartIconContext);
  return (
    <div className={styles.container} onClick={() => setCartIcon(!cartIcon)}>
      <ShoppingIcon className={styles.shoppingIcon}/>
      <span className={styles.itemCount}>{cartCountItem}</span>
    </div>
  )
}
