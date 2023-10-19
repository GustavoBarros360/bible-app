import { BookModel } from "@models/book.model";
import { api } from "../api";

export const useGetBooks = () => {
  return api.get<BookModel[]>("/books");
};
