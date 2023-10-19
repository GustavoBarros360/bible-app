import { CHAPTER_ITEM, ChapterStorage } from "@models/storage.model";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeChapter = async (data: ChapterStorage) => {
  try {
    await AsyncStorage.setItem(CHAPTER_ITEM, JSON.stringify(data));
  } catch (e) {
    console.error(e);
  }
};
