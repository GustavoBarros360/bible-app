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
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlRodSBPY3QgMTkgMjAyMyAyMzowODoxMCBHTVQrMDAwMC5ndXN0YXZvYmFycm9zMjAwMUBnbWFpbC5jb20iLCJpYXQiOjE2OTc3NTY4OTB9.hKcKjFdkLKzmb3ljH25013bX0rst7NuAg5sgfInl2yk",
  },
  baseURL: API_BASE_URL,
  timeout: 10000,
});
