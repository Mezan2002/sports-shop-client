import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TCategory = {
  id: string;
  name: string;
};

const initialState: TCategory[] = [];

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<TCategory[]>) => {
      return action.payload;
    },
  },
});

export const { setCategories } = categorySlice.actions;

export default categorySlice.reducer;
