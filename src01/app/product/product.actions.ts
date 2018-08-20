import {
  FETCHING_PRODUCTS_SUCCESSFULLY,
  FETCHING_PRODUCTS_ERROR,
  FETCHING_PRODUCTS,

  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESSFULLY,
  ADD_PRODUCT_ERROR
} from "./product.constants";

export const fetchSuccessfully = products => ({
  type: FETCHING_PRODUCTS_SUCCESSFULLY,
  payload: products
});
//objects containing a type and a payload property
export const fetchError = (error) => ({
  type: FETCHING_PRODUCTS_ERROR,
  payload: error
});
export const fetchProductsSuccessfully = (products) => ({
  type: FETCHING_PRODUCTS_SUCCESSFULLY,
  payload: products
});


export const fetchProductsLoading = () => ({ type: FETCHING_PRODUCTS });
export const fetchProducts = () => ({ type: FETCHING_PRODUCTS });
//create an object where only the type is set


export const addProductSuccessfully = (product) => ({
  type: ADD_PRODUCT_SUCCESSFULLY,
  payload: product
});
export const addProduct = (product) => ({ 
  type: ADD_PRODUCT,
  payload: product
});
export const addProductError = (error) => ({ 
  type: ADD_PRODUCT_ERROR, 
  payload: error 
});