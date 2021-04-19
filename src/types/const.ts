export const INIT_PRODUCTS = "INIT_PRODUCTS";
export const ADD_PRODUCT = "ADD_PRODUCT";
export const INIT_FEATURED_PRODUCTS = "INIT_FEATURED_PRODUCTS";

export const initialState: AppState = {
  products: [],
  featuredProducts: [],
  productFilters: { gender: [], category: [], trends: [] },
};
