import { VERSION_ITEM } from "@models/storage.model";
import { VersionModel } from "@models/version.model";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeVersion = async (version: VersionModel) => {
  try {
    await AsyncStorage.setItem(VERSION_ITEM, version as string);
  } catch (e) {
    console.error(e);
  }
};
