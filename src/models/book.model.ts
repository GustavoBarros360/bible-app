import { AbbrevModel } from "./abbrev.model";
import { VersionModel } from "./version.model";

export type BookModel = {
  abbrev: {
    pt: AbbrevModel;
  };
  name: string;
  author: string;
  group: string;
  version: VersionModel;
  testament: string;
  chapters: number;
};
