import { StyleSheet, View } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";
import { useEffect } from "react";
import { getUsers } from "@/app/api/api";
import Animated, { useAnimatedRef } from "react-native-reanimated";
import { Card } from "@/app/components/card/Card";
import { useUser } from "@/app/context/userContext";

export default function UserListScreen() {
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const navigation = useNavigation<
    NativeStackNavigationProp<{
      UserDetail: { id: number };
    }>
  >();
  const { users, updateUsers } = useUser();

  useEffect(() => {
    getUsers().then((res) => {
      updateUsers({ users: res });
    });
  }, []);

  return (
    <ThemedView style={styles.container}>
      <Animated.ScrollView ref={scrollRef} scrollEventThrottle={16}>
        <ThemedView style={styles.content}>
          <ThemedText type="title">Users</ThemedText>
          <ThemedText>Click on any user to see the details.</ThemedText>
          <View style={styles.cardContainer}>
            {users?.map((user) => {
              return (
                <View key={user.id}>
                  <Card
                    user={user}
                    onSelect={() => {
                      navigation.navigate("UserDetail", { id: user.id });
                    }}
                  />
                </View>
              );
            })}
          </View>
        </ThemedView>
      </Animated.ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    flex: 1,
    padding: 32,
    gap: 16,
    overflow: "hidden",
  },
  cardContainer: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    flexGrow: 1,
    gap: 10,
  },
});
