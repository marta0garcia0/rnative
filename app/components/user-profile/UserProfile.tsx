import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, View, Image } from "react-native";

import { Collapsible } from "@/components/Collapsible";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { User } from "@/app/api/models";

export function UserProfile({ user }: { user: User }) {
  return (
    <ThemedView style={styles.content}>
      <ThemedText type="title">
        {user.name} - {user.username}
      </ThemedText>
      <ThemedView style={styles.contentGroup}>
        <ThemedText type="defaultSemiBold">Company: </ThemedText>
        <ThemedText>{user.company.name}, </ThemedText>
        <ThemedText>{user.company.catchPhrase}, </ThemedText>
        <ThemedText>{user.company.bs} </ThemedText>
      </ThemedView>
      <ThemedView style={styles.contentGroup}>
        <ThemedText type="defaultSemiBold">Address: </ThemedText>
        <ThemedText>{user.address.street} </ThemedText>
        <ThemedText>{user.address.suite} </ThemedText>
        <ThemedText>{user.address.city} </ThemedText>
        <ThemedText>{user.address.zipcode} </ThemedText>
      </ThemedView>
      <ThemedView style={styles.contentGroup}>
        <ThemedText type="defaultSemiBold">Email: </ThemedText>
        <ThemedText>{user.email}</ThemedText>
      </ThemedView>
      <ThemedView style={styles.contentGroup}>
        <ThemedText type="defaultSemiBold">Phone: </ThemedText>
        <ThemedText>{user.phone}</ThemedText>
      </ThemedView>
      <ThemedView style={styles.contentGroup}>
        <ThemedText type="defaultSemiBold">Website: </ThemedText>
        <ThemedText>{user.website}</ThemedText>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  content: {
    gap: 16,
    overflow: "hidden",
  },
  contentGroup: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
