import React from "react";
import { Product, ProductVariant } from "@/types/product";

export default function calculateProductPrice(variants: ProductVariant[]) {
  let priceArr: number[] = [];
  let minPrice: number = 0;
  let maxPrice: number = 0;

  if (variants) {
    variants.map((variant) => {
      let displayPrice: number = 0;
      if (variant.discountPercent) {
        displayPrice =
          variant.originalPrice -
          (variant.originalPrice * variant.discountPercent) / 100;
      } else {
        displayPrice = variant.originalPrice;
      }
      priceArr.push(displayPrice);
    });
    priceArr.sort((a, b) => a - b);
    minPrice = priceArr[0];
    maxPrice = priceArr[priceArr.length - 1];
  }
  return { minPrice, maxPrice };
}
