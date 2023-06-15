import { Product } from "@/types/product";
import axiosService, { AxiosService } from "./axiosService";
import { EP } from "@/services/config";

export type GetProductParams = {
  name?: string;
  id?: string;
};

export type GetProductByIdParams = {
  id: string;
};

class ProductService {
  readonly service: AxiosService;
  readonly baseURL: string = `/products`;

  constructor() {
    this.service = axiosService;
  }

  getProduct = (query: GetProductParams) => {
    return this.service.get<Product>(`${this.baseURL}`, {
      params: query,
    });
  };
  getProductById = (query: GetProductByIdParams) => {
    return this.service.get<Product>(`${this.baseURL}/product`, {
      params: query,
    });
  };
}

export default new ProductService();
