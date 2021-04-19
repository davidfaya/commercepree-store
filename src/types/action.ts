export interface Action {
  readonly type: string;
  readonly payload: any;
}

export const ADD_TODO_ITEM = "ADD_TODO_ITEM";
export const TOGGLE_ITEM = "TOGGLE_ITEM";

export interface AddProductAction extends Action {
  payload: {
    newProduct: ProductModel;
  };
}

export interface searchProductAction extends Action {
  payload: {
    filterOptions: ProductsFilterOptions;
  };
}

export const AddProduct = (newProduct: ProductModel): AddProductAction => ({
  type: ADD_TODO_ITEM,
  payload: {
    newProduct: newProduct,
  },
});

export const SearchProduct = (
  filterOptions: ProductsFilterOptions
): searchProductAction => ({
  type: TOGGLE_ITEM,
  payload: {
    filterOptions: filterOptions,
  },
});
