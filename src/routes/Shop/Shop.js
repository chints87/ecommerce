import { useContext } from 'react';
import { ProductContext } from '../../context/product';
import ProductCard from '../../components/ProductCard/ProductCard';
import styles from './Shop.module.scss';

function Shop() {
  const { products } = useContext(ProductContext);  
  return (
    <div className={styles.container}>
      {products.map((product) =>
          <ProductCard key={product.id} product={product} />
      )}      
    </div>
  )
};


export default Shop
