import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Button from "./src/components/button";
import { ThemeProvider } from "@shopify/restyle";
import theme, { Text } from "@/utils/theme";
import Navigation from "@/navigation";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <Navigation />
        <ExpoStatusBar translucent />
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
