import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { CategoryContext } from '../../context/category'
import { selectCategoriesMap } from '../../store/categories/categorySelector'
import  ProductCard  from '../ProductCard/ProductCard'

import { selectCategoriesIsLoading } from '../../store/categories/categorySelector'

import styles from './Category.module.scss'

function Category() {
  const { category } = useParams() 
  const isLoading = useSelector(selectCategoriesIsLoading)
  const categories = useSelector(selectCategoriesMap)
  const[ products, setProducts] = useState(categories[category])
 

  useEffect(() => {
   
    setProducts(categories[category])
  }, [categories, category])
  return (
    <>
      {isLoading 
      ? <h1>Loading</h1>
      :
      <>  
        <h2>{category.toUpperCase()}</h2> 
        <div className={styles.container}>
        
        {products && products.map((product) => (
          <ProductCard key={product.id} product={product} />
          ))} 
        </div>
      </>
      }
    </>  
    
  )
}

export default Category
