import { configureStore } from "@reduxjs/toolkit";
import productQuantityReducer from "./features/product/productQuantitySlice";

export const store = configureStore({
  reducer: {
    productQuantity: productQuantityReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
