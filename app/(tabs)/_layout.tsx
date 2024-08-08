import React from "react";
import { Tabs } from "expo-router";
import Colors from "@/constants/Colors";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Entypo from "@expo/vector-icons/Entypo";
const Tablayout = () => {
  return (
    // The Tabs element is a component provided by expo-router that facilitates the creation of a tab-based navigation system in your React Native app. Tabs are a common navigation pattern in mobile apps, where users can switch between different sections of the app by tapping on tab buttons typically located at the bottom of the screen.
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.primary,
      }}
    >
      <Tabs.Screen
        name="nature-meditate"
        options={{
          tabBarLabel: "Meditate",
          tabBarIcon: ({ color }) => {
            return (
              <MaterialCommunityIcons name="flower" size={24} color="black" />
            );
          },
        }}
      />
      <Tabs.Screen
        name="affirmations"
        options={{
          tabBarLabel: "Affirmations",
          tabBarIcon: ({ color }) => {
            return <Entypo name="open-book" size={24} color="black" />;
          },
        }}
      />
    </Tabs>
  );
};

export default Tablayout;
