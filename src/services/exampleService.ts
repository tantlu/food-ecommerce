import { Product } from '@/types/product';
import axiosService, { AxiosService } from './axiosService';
import { EP } from '@/services/config';
import { AxiosResponse } from 'axios';

export type GetProductParams = {
  name?: string;
  id?: string;
};
class ExampleService {
  readonly service: AxiosService;
  readonly baseURL: string = `product/`;

  constructor() {
    this.service = axiosService;
  }

  getProduct = (query: GetProductParams) => {
    return this.service.get<Product>(`${this.baseURL}`, {
      params: query,
    });
  };
}

export default new ExampleService();
