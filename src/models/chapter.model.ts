import { BookModel } from "./book.model";

export type ChapterModel = {
  book: BookModel;
  chapter: {
    number: number;
    verses: number;
  };
  verses: {
    number: number;
    text: string;
  }[];
};
