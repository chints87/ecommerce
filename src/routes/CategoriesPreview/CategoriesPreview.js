// import { useContext } from 'react';
// import { CategoryContext } from '../../context/category';
import { useSelector } from 'react-redux/es/exports';
import CategoryPreview from '../../components/CategoryPreview/CategoryPreview';


function CategoriesPreview() {
  // const { categories } = useContext(CategoryContext);  
  const categories = useSelector((state) => state.categories.categoriesMap)
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
