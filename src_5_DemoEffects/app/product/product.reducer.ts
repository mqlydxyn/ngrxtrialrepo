import {
  FETCHING_PRODUCTS_SUCCESSFULLY,
  FETCHING_PRODUCTS_ERROR,
  FETCHING_PRODUCTS,

  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESSFULLY,
  ADD_PRODUCT_ERROR
} from "./product.constants";
import { Product } from "./product.model";
import { ActionReducerMap } from "@ngrx/store/src/models";

const initialState = {
  loading: false, //indicates whether our AJAX request is still pending
  list: [], //data property that will contain our list of products once they are are returned
  error: void 0 //a property that contains the error if any comes back from the AJAX request
};//initial state is different

export interface ProductState {
  loading: boolean;
  list: Array<Product>;
  error: string;
}

function addProduct(list, product) {
  return [ ...list, product];
}

export interface FeatureProducts {
  products: ProductState;
}

export const ProductReducers: ActionReducerMap<FeatureProducts> = {
  products: productReducer
};

export function productReducer(state = initialState, action) {
  switch (action.type) {
    case FETCHING_PRODUCTS_SUCCESSFULLY:
      return { ...state, list: action.payload, loading: false };


    case FETCHING_PRODUCTS_ERROR:
    case ADD_PRODUCT_ERROR://
      return { ...state, error: action.payload, loading: false };

    case FETCHING_PRODUCTS:
    case ADD_PRODUCT://
      return { ...state, loading: true };

    case ADD_PRODUCT_SUCCESSFULLY://
    return { ...state, list: addProduct(state.list, action.payload) };//

    default:
      return state;
  }
}
