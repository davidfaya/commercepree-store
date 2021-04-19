import React from "react";
import {
  INIT_PRODUCTS,
  ADD_PRODUCT,
  INIT_FEATURED_PRODUCTS,
} from "../types/const";

export const initialState: AppState = {
  products: [],
  featuredProducts: [],
  productFilters: { gender: [], category: [], trends: [] },
};
export const AppContext: React.Context<AppContextModel> = React.createContext({
  state: initialState,
  dispatch: null,
});

export const loadProducts = (state: AppState, action: any): AppState => {
  console.log("Loading product list - ", action.payload);
  return {
    ...state,
    products: action.payload,
  };
};

export const loadBestSellers = (state: AppState, action: any): AppState => {
  console.log("Loading featured products list - ", action.payload);
  return {
    ...state,
    featuredProducts: action.payload,
  };
};

export function ProductReducer(state: AppState, action: any): AppState {
  switch (action.type) {
    case INIT_PRODUCTS:
      return loadProducts(state, action);
    case INIT_FEATURED_PRODUCTS:
      return loadBestSellers(state, action);
    case ADD_PRODUCT:
      return state;
    default:
      return state;
  }
}
