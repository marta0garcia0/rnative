import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import { createStackNavigator } from "@react-navigation/stack";
import TabLayout from "./(screens)/_layout";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { UserProvider } from "./context/userContext";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <UserProvider>
        <Stack.Navigator>
          {/* <Stack.Screen name="+not-found" component={NotFoundScreen} /> */}
          <Stack.Screen
            name="(screens)"
            component={TabLayout}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </UserProvider>
    </ThemeProvider>
  );
}
