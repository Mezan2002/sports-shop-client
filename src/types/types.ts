export type TProduct = {
  _id: string;
  id: string;
  name: string;
  brand: string;
  price: {
    regular_price: number;
    discounted_price: number;
    percentage_of_discount: number;
    currency: string;
  };
  description: string;
  stock: {
    current_stock_amount: number;
    low_stock_amount: number;
  };
  category: {
    category_id: string;
    category_name: string;
  };
  productAttributes: {
    size?: string[];
    color: [
      {
        color_name: string;
        color_code: string;
      }
    ];
  };
  rating: number;
  images: string[];
};

export type TCategory = {
  id: string;
  name: string;
};

export type TProductCardProps = {
  isTopSell?: boolean;
  isOffSell?: boolean;
  isNewArrival?: boolean;
  isGridCard: boolean;
  product: TProduct;
};

export type TFilter = {
  brand: string[];
  priceRange: number[];
  rating: number[];
  category: string[];
  searchParams: string;
  sortOrder: string;
};

export type TCartItem = {
  productId: string;
  name: string;
  image: string;
  price: string | number;
  availability: string;
  allColors?: [
    {
      color_name: string;
      color_code: string;
    }
  ];
  allSizes?: string[];
  selectedColor?: {
    color_name: string;
    color_code: string;
  };
  selectedSize?: string;
  quantity: number;
};

export type TPriceSliderProps = {
  updateFilter: (
    filterKey: keyof TFilter,
    value: string | number,
    checked: boolean,
    priceRange: number[]
  ) => void;
};
