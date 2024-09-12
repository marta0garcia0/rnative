import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "./home/HomeScreen";
import UserLayout from "./user-list/_layout";

export default function TabLayout() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Users"
        component={UserLayout}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "people" : "people-outline"}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
