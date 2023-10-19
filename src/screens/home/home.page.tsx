import { useQuery } from "@tanstack/react-query";
import { SafeAreaView, View, Text } from "react-native";
import { api } from "../../providers/api";
import { useGetChapter } from "../../providers/queries/get-chapter.use-case";
import { useGetBooks } from "../../providers/queries/get-books.use-case";

export const HomePage = () => {
  const { data, isLoading } = useQuery({
    queryFn: () => useGetChapter({ version: "nvi", abbrev: "gn", chapter: 1 }),
    queryKey: ["getVerses"],
  });

  const { data: booksData } = useQuery({
    queryFn: useGetBooks,
    queryKey: ["useGetBooks"],
  });

  console.log(booksData?.data?.map((book: any) => book.abbrev.pt));

  return (
    <SafeAreaView>
      <View>
        <Text>Teste</Text>
      </View>
    </SafeAreaView>
  );
};
