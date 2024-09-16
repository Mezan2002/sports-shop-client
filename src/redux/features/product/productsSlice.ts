import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TProductQuantityInitState = {
  id: string;
  name: string;
  quantity: number;
  price: number;
};

const initialState: TProductQuantityInitState[] = [];

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (
      state,
      action: PayloadAction<TProductQuantityInitState[]>
    ) => {
      return action.payload;
    },
  },
});

export default productsSlice.reducer;
