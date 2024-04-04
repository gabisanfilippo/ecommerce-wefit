import { ProductsList } from "@/types/products";
import axios, { AxiosInstance, AxiosResponse } from "axios";

interface IApiClass {
  listProducts: (
    titleFilter: string
  ) => Promise<AxiosResponse<ProductsList, any>>;
}

class API implements IApiClass {
  private api: AxiosInstance;

  constructor() {
    this.api = axios.create({ baseURL: "/api" });
  }

  public async listProducts(
    titleFilter: string
  ): Promise<AxiosResponse<ProductsList, any>> {
    const productList = await this.api.get<ProductsList>(
      `/products?title=${titleFilter || ""}`
    );
    return productList;
  }
}

export const api = new API();
