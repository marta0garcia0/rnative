import { StyleSheet, TouchableOpacity } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { User } from "@/app/api/models";

export function Card({ user, onSelect }: { user: User; onSelect: () => void }) {
  return (
    <ThemedView>
      <TouchableOpacity
        onPress={onSelect}
        style={styles.container}
        activeOpacity={0.8}
        testID={"cardId"}
      >
        <ThemedText type="defaultSemiBold">{user.name}</ThemedText>
        <ThemedText>{user.username}</ThemedText>
      </TouchableOpacity>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    padding: 14,
    alignItems: "flex-start",
    gap: 6,
    borderWidth: 1,
    borderColor: "grey",
  },
});
