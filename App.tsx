import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { HomePage } from "@screens/home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function App() {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <View style={styles.container}>
        <HomePage />
        <StatusBar style="auto" />
      </View>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
