import { createSlice } from "@reduxjs/toolkit";
import { Product } from "@/types/product";

const initialState = {
  products: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    STORE_PRODUCTS(state, action) {
      const { products } = action.payload;
      state.products = products;
    },
  },
});

export const selectedProducts = (state: any) => state.product.products;

export const { STORE_PRODUCTS } = productSlice.actions;

export default productSlice.reducer;
