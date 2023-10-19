import { api } from "../api";

export const useGetBooks = () => {
  return api.get("/books");
};
