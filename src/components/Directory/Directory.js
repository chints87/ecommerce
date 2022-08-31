import React from 'react'
import CATEGORIES from '../../data'
import CategoryItem from '../CategoryItem/CategoryItem'
import styles from './Directory.module.scss'

function Directory() {
  return (
    <div className={styles.container}>
      {CATEGORIES.map((category) => 
      <CategoryItem key={category.id} category={category} />)}
    </div>
  )
}

export default Directory
