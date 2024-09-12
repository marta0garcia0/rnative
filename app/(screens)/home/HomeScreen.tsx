import { Image, StyleSheet, useColorScheme } from "react-native";
import { ThemedView } from "@/components/ThemedView";

export default function HomeScreen() {
  const colorScheme = useColorScheme() ?? "light";
  const headerBackgroundColor = { light: "#A1CEDC", dark: "#1D3D47" };
  return (
    <ThemedView
      style={[
        styles.container,
        { backgroundColor: headerBackgroundColor[colorScheme] },
      ]}
    >
      <Image source={require("@/assets/images/logo.png")} style={styles.logo} />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  logo: {
    width: "100%",
  },
  container: {
    flex: 1,
  },
  header: {},
  content: {
    flex: 1,
    padding: 32,
    gap: 16,
    overflow: "hidden",
  },
});
