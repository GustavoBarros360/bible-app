import { useRoutesContext } from "@providers/context/routes.context";
import { BooksPage } from "@screens/books/books.page";
import { HomePage } from "@screens/home";
import { View } from "react-native";

export const Routes = () => {
  const { route } = useRoutesContext() ?? {};
  return (
    <View>
      {route === "home" && <HomePage />}
      {route === "books" && <BooksPage />}
    </View>
  );
};
