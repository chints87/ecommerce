// import { useContext } from 'react';
// import { CategoryContext } from '../../context/category';
import { useSelector } from 'react-redux/es/exports';
import { categoriesMap } from '../../store/categories/categorySelector';
import CategoryPreview from '../../components/CategoryPreview/CategoryPreview';


function CategoriesPreview() {
  // const { categories } = useContext(CategoryContext);  
  const categories = useSelector(categoriesMap)
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
