import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TProductQuantityInitState = {
  id: string;
  name: string;
  quantity: number;
  price: number;
};

const initialState: TProductQuantityInitState[] = [
  { id: "1", name: "Laptop", quantity: 1, price: 1000 },
  { id: "2", name: "Monitor", quantity: 1, price: 300 },
];

export const productQuantitySlice = createSlice({
  name: "productQuantity",
  initialState,
  reducers: {
    increamentQuantity: (state, action: PayloadAction<string>) => {
      const product = state.find((item) => item.id === action.payload);
      if (product) {
        product.quantity++;
      }
    },
    decrementQuantity: (state, action: PayloadAction<string>) => {
      const product = state.find((item) => item.id === action.payload);
      if (product && product.quantity) {
        product.quantity--;
      }
    },
  },
});

export const { increamentQuantity, decrementQuantity } =
  productQuantitySlice.actions;

export default productQuantitySlice.reducer;
