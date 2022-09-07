import { createSelector } from 'reselect';

import { CatergoriesState } from './categoriesReducer';
import { CategoryMap } from './categoriesActionTypes';
import { RootState } from '../store'

const selectCategoryReducer = (state : RootState) : CatergoriesState => state.categories

export const selectCategories = createSelector(
    [selectCategoryReducer],
    (categorySlice) => categorySlice.categories
)

export const selectCategoriesIsLoading = createSelector(
    [selectCategoryReducer],
    (categorySlice) => categorySlice.isLoading
)

export const selectCategoriesMap = createSelector(
    [selectCategories],
    (categories) : CategoryMap => categories.reduce((acc,category) => {
        const { title, items } = category;
        acc[title.toLowerCase()] = items;
        return acc
      }, {} as CategoryMap)
)
// export const categoriesMap = (state) => state.categories.categories
//     .reduce((acc,category) => {
//     const { title, items } = category;
//     acc[title.toLowerCase()] = items;
//     return acc
//   }, {})