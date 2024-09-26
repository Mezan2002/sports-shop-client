import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TCartItem } from "../../../types/types";

type TInitialState = {
  cart: TCartItem[];
};

type TUpdateQuantity = {
  productId: string;
  quantity: number;
};

type UpdateAttributePayload = {
  productId: string;
  selectedSize?: string;
  selectedColor?: string;
};

const savedCart = localStorage.getItem("cart");

const initialState: TInitialState = {
  cart: savedCart ? JSON.parse(savedCart) : [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<TCartItem>) => {
      const product = action.payload;
      const existingProduct = state.cart.find(
        (item) => item.productId === product.productId
      );
      if (existingProduct) {
        existingProduct.quantity += product.quantity;
      } else {
        state.cart.push(product);
      }

      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const productId = action.payload;
      state.cart = state.cart.filter((item) => item.productId !== productId);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    updateQuantity: (state, action: PayloadAction<TUpdateQuantity>) => {
      const { productId, quantity } = action.payload;
      const product = state.cart.find((item) => item.productId === productId);
      if (product) {
        product.quantity = quantity;
        localStorage.setItem("cart", JSON.stringify(state.cart));
      }
    },
    updateAttribute: (state, action: PayloadAction<UpdateAttributePayload>) => {
      const { productId, selectedSize, selectedColor } = action.payload;
      const product = state.cart.find((item) => item.productId === productId);

      if (product) {
        if (selectedSize) {
          product.selectedSize = selectedSize;
        }

        if (selectedColor) {
          product.selectedColor = selectedColor;
        }
      }
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, updateAttribute } =
  cartSlice.actions;
export default cartSlice.reducer;
