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


interface ProductsFilterOptions {
  page?: number;
  numPages?: number;
  size?: number;
  categories: string[];
}

interface ProductFilters {
  gender: string[];
  category: string[];
  trends: string[];
}
