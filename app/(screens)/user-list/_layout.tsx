import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import UserDetailScreen from "../user-detail/UserDetailScreen";
import UserListScreen from "./UserListScreen";

export default function UserLayout() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          title: "User list",
        }}
        name="UserList"
        component={UserListScreen}
      />
      <Stack.Screen
        name="UserDetail"
        component={UserDetailScreen}
        options={{
          title: "User detail",
        }}
      />
    </Stack.Navigator>
  );
}
