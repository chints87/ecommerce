import React from 'react'
import styles from './categoryItem.module.scss'

function CategoryItem({ category }) {
  const { title, imageUrl } = category  
  return (
    <div className={styles.container}>
       <div className={styles.backgroundImage} style={{ 
        backgroundImage: `url(${imageUrl})`
       }}>
          <div className={styles.bodyContainer} >
            <h2>{title}</h2>
            <div>SHOP NOW</div>
         </div>  

       </div>
      
    </div>         
  )
}

export default CategoryItem
