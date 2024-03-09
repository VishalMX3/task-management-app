import Navigation from "@/navigation";
import theme from "@/utils/theme";
import { ThemeProvider } from "@shopify/restyle";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import { SafeAreaProvider } from "react-native-safe-area-context";

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
