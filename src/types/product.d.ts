const INIT_PRODUCTS = "INIT_PRODUCTS";
const ADD_PRODUCT = "ADD_PRODUCT";

interface ProductModel {
  id: string;
  category: string[];
  title: string;
  isBestSeller: boolean;
  variants: ProductVariantModel[];
}
interface ProductVariantModel {
  id: string;
  color: string;
  image: string;
  price: number;
  stock: number;
  size: number;
}
interface ProductCardProps {
  url: string;
  name: string;
}
interface AppState {
  products: ProductModel[];
}

interface AppContextModel {
  state: AppState;
  dispatch: any;
}
