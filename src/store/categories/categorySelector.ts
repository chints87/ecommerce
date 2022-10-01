import { createSelector } from 'reselect';

import { CategoriesState } from './categoriesReducer';

import { CategoryMap } from './categoriesActionTypes';
import { RootState } from '../store';

const selectCategoryReducer = (state : RootState) : CategoriesState => state.categories

// Create cached selector for categories
export const selectCategories = createSelector(
    [selectCategoryReducer],
    (categorySlice) => categorySlice.categories
)

// Create cached selector for loading
export const selectCategoriesIsLoading = createSelector(
    [selectCategoryReducer],
    (categorySlice) => categorySlice.isLoading
)

// Create cached selector that transforms categories data to categories map data
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