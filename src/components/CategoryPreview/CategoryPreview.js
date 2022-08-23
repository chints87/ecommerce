import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import styles from './CategoryPreview.module.scss'
function CategoryPreview({title, products}) {

  return (
    <div>
      <h2>
        <span>{title}</span>
      </h2>
      <div className={styles.container}>
         {products.filter((_,idx) => idx < 4 ).map((product) => (
          <ProductCard key={product.id} product={product} />
          ))}      
       </div>   
    </div>
  )
}

export default CategoryPreview
