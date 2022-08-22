import { useContext } from 'react';
import { ProductContext } from '../../context/product';

function Shop() {
  const { products } = useContext(ProductContext);  
  return (
    <div>
      {products.map(({id, name}) =>
          <div key={id}>{name}</div>
      )}      
    </div>
  )
};


export default Shop
