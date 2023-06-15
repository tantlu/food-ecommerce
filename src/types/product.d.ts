export type ProductVariant = {
  variantID: number;
  imgURL: string;
  status: number;
  quantity?: string;
  sizeBox?: string;
  dimension?: string;
  discountPercent?: number;

  originalPrice: number;
};

export type Product = {
  productId: number;
  itemName: string;
  category: string;
  imageUrl: string[] | string;
  slug: string;
  vendor?: string;
  displayPrice?: number;
  variants: ProductVariant[];
  description: string;
};

export type ProductByCategory = {
  id: number;
  categoryName: string;
  categoryIconUrl: string;
  categoryChildren?: {
    categoryChildrenId: number;
    label: string;
    url: string;
    products: Product[];
  }[];
};
