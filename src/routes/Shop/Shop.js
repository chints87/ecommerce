import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {Routes , Route} from 'react-router-dom'

// import { getCategoriesAndDocuments } from '../../utilities/firebase/firebase'
// import { setCategories } from '../../store/categories/categoriesActions'
import CategoriesPreview from '../CategoriesPreview/CategoriesPreview'
import Category from '../../components/Category/Category'

import { fetchCategoriesAsync } from '../../store/categories/categoriesActions'

function Shop() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchCategoriesAsync())
  },[])
  return (
  <Routes>
    <Route index element={<CategoriesPreview />} />
    <Route path=':category' element={<Category />} />
  </Routes>
  )
};


export default Shop
