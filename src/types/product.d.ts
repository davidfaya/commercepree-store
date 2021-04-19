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
  featuredProducts: ProductModel[];
  productFilters: ProductFilters;
}
interface ProductsFilterOptions {
  page?: number;
  size?: number;
  categories?: string[];
}

interface ProductFilters {
  gender: string[];
  category: string[];
  trends: string[];
}

interface AppContextModel {
  state: AppState;
  dispatch: any;
}
