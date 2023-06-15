import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { uiSliceActions } from "./uiSlice";
import { handleRequest } from "@/helpers/handleAsync";
import productService, { GetProductParams } from "@/services/productService";
import { Toast } from "@chakra-ui/react";
import { Product } from "@/types/product";

export type CartState = {
  items: string[];
};

export type AddProductPayload = {
  productId: number;
};

export type RootState = {
  cart: CartState;
  products: Product[];
};

const initialState: CartState = {
  items: [],
};

export const addToCart = createAsyncThunk<unknown, AddProductPayload>(
  "cart/addToCart",
  async (arg, thunk) => {
    thunk.dispatch(uiSliceActions.startLoading());
    const getProductParams: GetProductParams = { id: arg.productId.toString() };
    const [getProductRes, getProductError] = await handleRequest(
      productService.getProduct(getProductParams)
    );
    console.log(productService);

    if (getProductError) {
      thunk.dispatch(uiSliceActions.endLoading());

      Toast({
        position: "top-right",
        status: "error",
        title: "Thêm không thành công",
        isClosable: true,
      });
      return;
    }
    thunk.dispatch(cartSlice.actions.addToCart(getProductRes!!));
    thunk.dispatch(uiSliceActions.endLoading());
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state: CartState, action: PayloadAction<AddProductPayload>) => {
      const { productId } = action.payload;
      state.items.push(productId.toString());
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addToCart.fulfilled, (state, action) => {
      // state.totalItems = state.items.length;
      // state.totalPrice = calculateTotalPrice(state.items);
    });
  },
});

export const cartSliceActions = {
  ...cartSlice.actions,
  addToCart,
};

export default cartSlice.reducer;
