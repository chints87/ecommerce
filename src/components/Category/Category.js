import { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { CategoryContext } from '../../context/category'
import  ProductCard  from '../ProductCard/ProductCard'

import styles from './Category.module.scss'

function Category() {
  const { category } = useParams() 
  const { categories } = useContext(CategoryContext)
  const[ products, setProducts] = useState(categories[category])

  useEffect(() => {
    setProducts(categories[category])
  }, [categories, category])
  return (
    <>
        <h2>{category.toUpperCase()}</h2> 
        <div className={styles.container}>
       
        {products && products.map((product) => (
          <ProductCard key={product.id} product={product} />
          ))} 
    </div>
    </>
    
  )
}

export default Category
