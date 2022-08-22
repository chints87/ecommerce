import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import styles from './CartIcon.module.scss';

export default function Carticon() {
  return (
    <div className={styles.container}>
      <ShoppingIcon className={styles.shoppingIcon}/>
      <span className={styles.itemCount}>0</span>
    </div>
  )
}
