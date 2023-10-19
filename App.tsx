import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { HomePage } from "@screens/home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BooksPage } from "@screens/books/books.page";
import { NavigationContainer } from "@react-navigation/native";
import { RoutesContextProvider } from "@providers/context/routes.context";
import { Routes } from "@routes/routes";

export default function App() {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <View>
        {/* <NavigationContainer>
          <Routes />
        </NavigationContainer> */}
        {/* <HomePage /> */}
        <RoutesContextProvider>
          <Routes />
        </RoutesContextProvider>
        <StatusBar style="auto" />
      </View>
    </QueryClientProvider>
  );
}
