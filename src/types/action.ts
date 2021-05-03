export const INIT_PRODUCTS = "INIT_PRODUCTS";
export const ADD_PRODUCT = "ADD_PRODUCT";
export const INIT_FEATURED_PRODUCTS = "INIT_FEATURED_PRODUCTS";
export const UPDATE_PRODUCT_FILTERS = "UPDATE_PRODUCTS_FILTERS";
export const UPDATE_PRODUCTS = "FILTER_PRODUCT_OPTIONS";

export interface Action {
  readonly type: string;
  readonly payload: any;
}

export interface AddProductAction extends Action {
  payload: {
    newProduct: ProductModel;
  };
}
export interface InitFeatureProductsAction extends Action {
  payload: {
    featureProducts: ProductModel[];
  };
}
export interface UpdateProductFilterAction extends Action {
  payload: {
    filterOptions: ProductsFilterOptions;
  };
}
export interface UpdateProductsAction extends Action {
  payload: {
    productList: ProductModel[];
  };
}

export const AddProduct = (newProduct: ProductModel): AddProductAction => ({
  type: ADD_PRODUCT,
  payload: {
    newProduct: newProduct,
  },
});
export const InitFeatures = (featuredProducts: ProductModel[]): InitFeatureProductsAction => {
  return {
    type: INIT_FEATURED_PRODUCTS,
    payload: {
      featureProducts: featuredProducts,
    },
  };
};
export const UpdateProductFilters = (options: ProductsFilterOptions): UpdateProductFilterAction => {
  return {
    type: UPDATE_PRODUCT_FILTERS,
    payload: {
      filterOptions: options,
    },
  };
};
export const UpdateProducts = (filteredList: ProductModel[]): UpdateProductsAction => {
  return {
    type: UPDATE_PRODUCTS,
    payload: {
      productList: filteredList,
    },
  };
};
