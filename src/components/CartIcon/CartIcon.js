// import { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';


import { selectIsCartOpen, selectCountCartItems } from '../../store/cart/cartSelector';
import { setCartIcon } from '../../store/cart/cartActions';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
// import { CartIconContext } from '../../context/cartIcon';
import styles from './CartIcon.module.scss';

export default function CartIcon() {
  // const { cartIcon, cartCountItem, setCartIcon } = useContext(CartIconContext);
  const dispatch = useDispatch()
  
  const cartIcon = useSelector(selectIsCartOpen);
  const cartCountItem = useSelector(selectCountCartItems)
  

  return (
    <div className={styles.container} onClick={() => dispatch(setCartIcon(!cartIcon))}>
      <ShoppingIcon className={styles.shoppingIcon}/>
      <span className={styles.itemCount}>{cartCountItem}</span>
    </div>
  )
}
