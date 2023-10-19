import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

const API_BASE_URL = "https://www.abibliadigital.com.br/api";

interface ApiClient extends AxiosInstance {
  // Define your custom API methods here (if any)
}

interface ApiClient extends AxiosInstance {
  // GET request
  get<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R>;

  // POST request
  post<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<R>;

  // PUT request
  put<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<R>;

  // DELETE request
  delete<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R>;
}

export const api: ApiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});
