import { CHAPTER_ITEM, ChapterStorage } from "@models/storage.model";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const getChapter = async (): Promise<ChapterStorage | undefined> => {
  try {
    const storedChapter = await AsyncStorage.getItem(CHAPTER_ITEM);

    return storedChapter
      ? JSON.parse(storedChapter)
      : { abbrev: "gn", chapter: 1 };
  } catch (e) {
    console.error(e);
  }
};
