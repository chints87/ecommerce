import { useContext } from 'react';
import { CategoryContext } from '../../context/category';
import CategoryPreview from '../../components/CategoryPreview/CategoryPreview';
import styles from './Shop.module.scss';

function Shop() {
  const { categories } = useContext(CategoryContext);  
  return (
    <div className={styles.container}>
     {Object.keys(categories).map((title) => {
      const products = categories[title]
      return <CategoryPreview key={title} title={title} products={products} />
     })}
      
    </div>   
  )
};


export default Shop
