import { useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import styles from './Navigation.module.scss'
import { UserContext } from '../../context/user';
import { signOutUser } from '../../utilities/firebase/firebase';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

    return (
    <>
      <div className={styles.navigation}>
        <Link className='logo-container' to='/'>
          Logo
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
          { currentUser ? (
            <div className='nav-link' onClick={() => signOutUser()}>SIGN OUT</div>)
            : <Link className='nav-link' to='/sign-in'>
            SIGN IN
          </Link>
            }
          
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;