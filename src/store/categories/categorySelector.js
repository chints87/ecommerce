import { createSelector } from 'reselect';

const selectCategoryReducer = (state) => state.categories

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
    (categories) => categories.reduce((acc,category) => {
        const { title, items } = category;
        acc[title.toLowerCase()] = items;
        return acc
      }, {})
)
// export const categoriesMap = (state) => state.categories.categories
//     .reduce((acc,category) => {
//     const { title, items } = category;
//     acc[title.toLowerCase()] = items;
//     return acc
//   }, {})