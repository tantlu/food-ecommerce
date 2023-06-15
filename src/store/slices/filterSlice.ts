import calculateProductPrice from "@/components/utilites/calculateProductPrice";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filteredProduct: null,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    FILTER_PRODUCT_BY_OPTIONS(state, action) {
      console.log(action.payload);
      const { products, option } = action.payload;
      let displayProducts = [];
      switch (option) {
        case "":
          displayProducts = products;
          break;
        case "Sắp xếp":
          displayProducts = products;
          break;
        case "Giá thấp nhất":
          displayProducts = products.slice().sort((a: any, b: any) => {
            const priceA = calculateProductPrice(a.variants).minPrice;
            const priceB = calculateProductPrice(b.variants).minPrice;

            return priceA - priceB;
          });
          break;
        case "Giá cao nhất":
          displayProducts = products.slice().sort((a: any, b: any) => {
            const priceA = calculateProductPrice(a.variants).minPrice;
            const priceB = calculateProductPrice(b.variants).minPrice;

            return priceB - priceA;
          });
          break;
        case "Tên: A - Z":

        case "a-z":
          displayProducts = products.slice().sort((a: string, b: string) => {
            const nameA = a.itemName.toLowerCase();
            const nameB = b.itemName.toLowerCase();

            if (nameA < nameB) {
              return -1;
            } else if (nameA > nameB) {
              return 1;
            } else {
              return 0;
            }
          });
          break;
        case "Tên: Z - A":
          displayProducts = products.slice().sort((a: string, b: string) => {
            const nameA = a.itemName.toLowerCase();
            const nameB = b.itemName.toLowerCase();

            if (nameA > nameB) {
              return -1;
            } else if (nameA < nameB) {
              return 1;
            } else {
              return 0;
            }
          });
          break;

        default:
          break;
      }
      state.filteredProduct = displayProducts;
    },

    FILTER_BY_CATEGORY(state, action) {
      const { products, category } = action.payload;
      const displayProducts = products.filter(
        (product: any) => product.category === category
      );
      state.filteredProduct = displayProducts;
    },

    FILTER_BY_SEARCH(state, action) {
      const { search, products } = action.payload;
      const searchFilterProducts = products.filter(
        (product: any) =>
          product.itemName.toLowerCase() === search.toLowerCase()
      );

      state.filteredProduct = searchFilterProducts;
    },
  },
});

export const {
  FILTER_PRODUCT_BY_OPTIONS,
  FILTER_BY_SEARCH,
  FILTER_BY_CATEGORY,
} = filterSlice.actions;
export const selectedFilter = (state: any) => state.filter.filteredProduct;
export default filterSlice.reducer;
