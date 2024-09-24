import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TCartItem } from "../../../types/types";

type TInitialState = {
  cart: TCartItem[];
};

const initialState: TInitialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<TCartItem>) => {
      const product = action.payload;
      const exsistingProduct = state.cart.find(
        (item) => item.productId === product.productId
      );
      if (exsistingProduct) {
        exsistingProduct.quantity++;
      } else {
        state.cart.push(product);
      }
    },
    removeFromCart: (state, action: PayloadAction<TCartItem>) => {
      const product = action.payload;
      state.cart.filter((item) => item.productId !== product.productId);
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
