import { useContext } from 'react';
import { CategoryContext } from '../../context/category';
import CategoryPreview from '../../components/CategoryPreview/CategoryPreview';


function CategoriesPreview() {
  const { categories } = useContext(CategoryContext);  
  return (
    <>
     {Object.keys(categories).map((title) => {
      const products = categories[title]
      return <CategoryPreview key={title} title={title} products={products} />
     })}
      
    </>   
  )
};


export default CategoriesPreview
