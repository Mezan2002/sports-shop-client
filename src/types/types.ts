export type TProduct = {
  id: string;
  name: string;
  brand: string;
  price: number;
  discountPrice?: number;
  inStock: boolean;
  rating: number;
};

export type TProductCardProps = {
  isTopSell?: boolean;
  isOffSell?: boolean;
  isNewArrival?: boolean;
  isGridCard: boolean;
  product: TProduct;
};
