import { getProductOptions } from "../data/api";

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
    searchResults: ProductModel[];
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
): searchProductAction => {
  getProductOptions({ ...filterOptions }).then(({ data }) => {});

  return {
    type: TOGGLE_ITEM,
    payload: {
      searchResults: [],
    },
  };
};
