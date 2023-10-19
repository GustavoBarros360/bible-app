import { AbbrevModel } from "@models/abbrev.model";
import { BookModel } from "@models/book.model";
import { useRoutesContext } from "@providers/context/routes.context";
import { useGetBooks } from "@providers/queries";
import { getChapter } from "@providers/storage/get-chapter";
import { storeChapter } from "@providers/storage/store-chapter";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  SafeAreaView,
  View,
  SectionList,
  Text,
  Pressable,
} from "react-native";

export const BooksPage = () => {
  const { setRoute } = useRoutesContext() ?? {};
  const [selectedBook, setSelectedBook] = useState<AbbrevModel>("gn");
  const { data, isLoading } = useQuery({
    queryFn: useGetBooks,
    queryKey: ["useGetBooks"],
  });

  const books = data?.data;

  const vtBooks = {
    title: "Velho Testamento",
    data: books?.filter((book) => book.testament === "VT") as BookModel[],
  };
  const ntBooks = {
    title: "Novo Testamento",
    data: books?.filter((book) => book.testament === "NT") as BookModel[],
  };

  const handleSelectBook = async (name: AbbrevModel) => {
    setSelectedBook(name);
  };

  const handleSelectChapter = async (number: number) => {
    await storeChapter({ abbrev: selectedBook, chapter: number });
    setRoute?.("home");
  };

  return (
    <SafeAreaView className="flex mb-18 m-4">
      <View className="h-full">
        {isLoading ? (
          <View className="flex flex-grow items-center justify-center">
            <ActivityIndicator />
          </View>
        ) : (
          <SectionList
            sections={[vtBooks, ntBooks]}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => (
              <Pressable onPress={() => handleSelectBook(item.abbrev.pt)}>
                <View className="border border-gray-300 p-2 mb-2 rounded">
                  <Text
                    className={`${
                      item.abbrev.pt === selectedBook && "font-semibold"
                    }`}
                  >
                    {item.name}
                  </Text>

                  {item.abbrev.pt === selectedBook && (
                    <View className="flex flex-wrap flex-row gap-3 mt-2 justify-start">
                      {[...Array(item.chapters).keys()].map((i) => (
                        <Pressable
                          key={i}
                          onPress={() => handleSelectChapter(i + 1)}
                        >
                          <View className="border border-blue-100 rounded h-12 w-12 flex items-center justify-center">
                            <Text className="font-medium">{i + 1}</Text>
                          </View>
                        </Pressable>
                      ))}
                    </View>
                  )}
                </View>
              </Pressable>
            )}
            renderSectionHeader={({ section: { title } }) => (
              <Text className="font-bold text-lg mt-2">{title}</Text>
            )}
          />
        )}
      </View>
    </SafeAreaView>
  );
};
