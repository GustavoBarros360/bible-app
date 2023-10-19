import { AbbrevModel } from "./abbrev.model";

export type ChapterStorage = {
  abbrev: AbbrevModel;
  chapter: number;
};

const BASE_ITEM = "@gubas-bible:";

export const CHAPTER_ITEM = BASE_ITEM + "chapter";
export const VERSION_ITEM = BASE_ITEM + "version";
