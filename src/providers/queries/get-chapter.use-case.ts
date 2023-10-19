import { AbbrevModel } from "../../models/abbrev.model";
import { VersionModel } from "../../models/version.model";
import { api } from "../api";

type UseGetChapterParams = {
  version: VersionModel;
  abbrev: AbbrevModel;
  chapter: number;
};

export const useGetChapter = ({
  version,
  abbrev,
  chapter,
}: UseGetChapterParams) => {
  return api.get(`/verses/${version}/${abbrev}/${chapter}`);
};
