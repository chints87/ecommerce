import { useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import styles from './Navigation.module.scss'
import { UserContext } from '../../context/user';
import { CartIconContext } from '../../context/cartIcon';
import { signOutUser } from '../../utilities/firebase/firebase';
import CartIcon from '../../components/CartIcon/CartIcon';
import CartDropDown from '../../components/CartDropDown/CartDropDown';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { cartIcon } = useContext(CartIconContext);
    return (
    <>
      <div className={styles.navigation}>
        <Link className='logo-container' to='/'>
          Logo
        </Link>
        <div className={styles.links}>
          <Link className={styles.navLink}  to='/shop'>
            SHOP
          </Link>
          { currentUser ? (
            <div className={styles.navLink} onClick={() => signOutUser()}>SIGN OUT</div>)
            : <Link className='nav-link' to='/sign-in'>
            SIGN IN
          </Link>
            }
          <CartIcon />
        </div>
        {cartIcon ? <CartDropDown /> : null}
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;