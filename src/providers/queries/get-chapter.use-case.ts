import { ChapterModel } from "@models/chapter.model";
import { api } from "../api";
import { getChapter } from "@providers/storage/get-chapter";
import { getVersion } from "@providers/storage/get-version";

export const useGetChapter = async () => {
  const chapterStorage = await getChapter();
  const versionStorage = await getVersion();
  return api.get<ChapterModel>(
    `/verses/${versionStorage}/${chapterStorage?.abbrev}/${chapterStorage?.chapter}`
  );
};
