import { useQuery } from "@tanstack/react-query";
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { useGetChapter, useGetBooks } from "@providers/queries";
import { useEffect, useState } from "react";
import { useRoutesContext } from "@providers/context/routes.context";
import { storeChapter } from "@providers/storage/store-chapter";
import { AbbrevModel } from "@models/abbrev.model";
import { getChapter } from "@providers/storage/get-chapter";

export const HomePage = () => {
  const [currentChapter, setCurrentChapter] = useState(1);
  const { setRoute } = useRoutesContext() ?? {};
  const { data, isLoading, refetch, isRefetching, error } = useQuery({
    queryFn: useGetChapter,
    queryKey: ["getVerses"],
  });

  const chapter = data?.data;
  const { verses, book } = chapter ?? {};

  const handleNext = async () => {
    await storeChapter({
      abbrev: book?.abbrev.pt as AbbrevModel,
      chapter: currentChapter + 1,
    });
    refetch();
  };

  const handlePrevious = async () => {
    await storeChapter({
      abbrev: book?.abbrev.pt as AbbrevModel,
      chapter: currentChapter - 1,
    });
    refetch();
  };

  const getCurrentChapter = async () => {
    const storageChapter = await getChapter();
    setCurrentChapter(storageChapter?.chapter as number);
  };

  useEffect(() => {
    getCurrentChapter();
  }, [getCurrentChapter]);

  console.log(currentChapter, book?.chapters);

  return (
    <SafeAreaView className="m-4 mb-18 flex">
      <View className="h-full">
        {isLoading || isRefetching ? (
          <View className="flex flex-col items-center flex-grow justify-center">
            <ActivityIndicator />
          </View>
        ) : (
          <>
            <View className="flex flex-row gap-2 items-center">
              <Pressable onPress={() => setRoute?.("books")}>
                <View className="p-2 border border-gray-600 rounded flex justify-center align-center">
                  <Text>
                    {book?.name} {currentChapter}
                  </Text>
                </View>
              </Pressable>
              <View className="p-2 border border-gray-800 rounded flex justify-center align-center">
                <Text>NVI</Text>
              </View>
              <Pressable
                onPress={handlePrevious}
                disabled={currentChapter === 1}
              >
                <Text>Anterior</Text>
              </Pressable>
              <Pressable
                onPress={handleNext}
                disabled={currentChapter === (book?.chapters as number) - 1}
              >
                <Text>Próximo</Text>
              </Pressable>
            </View>

            <FlatList
              data={verses}
              keyExtractor={(item) => item.text}
              renderItem={({ item }) => (
                <View className="flex flex-row gap-1 w-full mb-2">
                  <View>
                    <Text className="font-semibold">{item.number}</Text>
                  </View>
                  <View className="flex flex-1">
                    <Text>{item.text}</Text>
                  </View>
                </View>
              )}
              showsVerticalScrollIndicator={false}
              className="mt-4"
            />
          </>
        )}
      </View>
    </SafeAreaView>
  );
};
