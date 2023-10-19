import { VERSION_ITEM } from "@models/storage.model";
import { VersionModel } from "@models/version.model";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const getVersion = async (): Promise<VersionModel | undefined> => {
  try {
    const storedVersion: VersionModel = (await AsyncStorage.getItem(
      VERSION_ITEM
    )) as VersionModel;

    return storedVersion ?? "nvi";
  } catch (e) {
    console.error(e);
  }
};
