export enum CATEGORIES_ACTION_TYPES {
    FETCH_CATEGORIES_DATA_START = 'FETCH_CATEGORIES_DATA_START',
    FETCH_CATEGORIES_DATA_SUCCESS ='FETCH_CATEGORIES_DATA_SUCCESS',
    FETCH_CATEGORIES_DATA_FAILED = 'FETCH_CATEGORIES_DATA_FAILED'
}

export type CategoryItem = {
    id: string,
    imageUrl: string,
    name: string,
    price: number
}

export type Category = {
    title: string,
    imageUrl: string,
    items: CategoryItem []
}

export type CategoryMap = {
    [key: string] : CategoryItem[]
}