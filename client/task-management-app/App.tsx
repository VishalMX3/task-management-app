import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Button from "./src/components/button";
import { ThemeProvider } from "@shopify/restyle";
import theme, { Text } from "@/utils/theme";
import Navigation from "@/navigation";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navigation />
    </ThemeProvider>
  );
}
