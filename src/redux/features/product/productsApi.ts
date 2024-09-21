import { baseApi } from "../../api/baseApi";

export const productsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => ({
        url: "product/get-all-product",
        method: "GET",
      }),
    }),
    getSingleProductById: builder.query({
      query: (productId) => ({
        url: `product/get-product/${productId}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllProductsQuery, useGetSingleProductByIdQuery } =
  productsApi;
