import { Product } from "@/types/product";
import axiosService, { AxiosService } from "./axiosService";
import { EP } from "@/services/config";
import { AxiosResponse } from "axios";
import { User } from "@/types/user";

export type LoginPayload = {
  phoneNumber: string;
  password: string;
};
export type LoginRespone = {
  access_token: string;
};

export type RegisterPayload = {
  phoneNumber: string;
  password: string;
};
export type RegisterRespone = {
  access_token: string;
  useData: User;
};
class AccountService {
  readonly service: AxiosService;
  readonly baseURL: string = `account/`;

  constructor() {
    this.service = axiosService;
  }

  login = (payload: LoginPayload) => {
    return this.service.post<LoginRespone>(`${this.baseURL}login`, payload);
  };
  getAccount = () => {
    return this.service.getAuth<User>(`${this.baseURL}`);
  };
  register = (payload: RegisterPayload) => {
    return this.service.post<RegisterRespone>(
      `${this.baseURL}register`,
      payload
    );
  };
}

export default new AccountService();
