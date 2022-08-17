import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import styles from './Navigation.module.scss'

function Navigation() {
  return (
    <>
       <div className={styles.navigation}>
         <Link to='/'>
           <div className={styles.logo}>Logo</div>
         </Link>
         <div className={styles.navLinks}>
             <Link to='/'>SHOP</Link>
             <Link to='/sign-in'>SignIn</Link>
         </div>
       </div>
       <Outlet />
    </>    
  )
}

export default Navigation
