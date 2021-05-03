import React from "react";
import {
  INIT_PRODUCTS,
  ADD_PRODUCT,
  INIT_FEATURED_PRODUCTS,
  UPDATE_PRODUCT_FILTERS,
  UPDATE_PRODUCTS,
  Action,
  InitFeatureProductsAction,
  UpdateProductsAction,
  UpdateProductFilterAction,
} from "../types/action";

interface AppState {
  products: ProductModel[];
  featuredProducts: ProductModel[];
  productFilters: ProductsFilterOptions;

}
interface AppContextModel {
  state: AppState;
  dispatch: any;
}

export const initialState: AppState = {
  products: [],
  featuredProducts: [],
  productFilters: { categories: [], page: 1, size: 3, numPages: 1 },
};
export const AppContext: React.Context<AppContextModel> = React.createContext({
  state: initialState,
  dispatch: null,
});

export const loadProducts = (state: AppState, action: Action): AppState => {
  //console.log("Loading product list - ", action.payload);
  return {
    ...state,
    products: action.payload,
  };
};

export const loadBestSellers = (state: AppState, action: InitFeatureProductsAction): AppState => {
  //console.log("Loading featured products list - ", action.payload);
  return {
    ...state,
    featuredProducts: action.payload.featureProducts,
  };
};

export const updateProductFilters = (state: AppState, action: UpdateProductFilterAction): AppState => {
  console.log("Updating products Filters - ", action.payload);
  const newFilterOptions:ProductsFilterOptions = { 
    categories: action.payload.filterOptions.categories, 
    page: action.payload.filterOptions.page ? action.payload.filterOptions.page: state.productFilters.page,
    numPages: action.payload.filterOptions.numPages ? action.payload.filterOptions.numPages: state.productFilters.numPages,
    size: action.payload.filterOptions.size ? action.payload.filterOptions.size: state.productFilters.size,
  }
  return {
    ...state,
    productFilters: newFilterOptions,
  };
};

export const updateProducts = (state: AppState,action: UpdateProductsAction): AppState => {
  //console.log("Updating products list - ", action.payload);

  return {
    ...state,
    products: action.payload.productList,
  };
};

export function ProductReducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case INIT_PRODUCTS:
      return loadProducts(state, action);
    case INIT_FEATURED_PRODUCTS:
      return loadBestSellers(state, action);
    case UPDATE_PRODUCT_FILTERS:
        return updateProductFilters(state, action);
    case UPDATE_PRODUCTS:
      return updateProducts(state, action);

    case ADD_PRODUCT:
      return state;
    default:
      return state;
  }
}
