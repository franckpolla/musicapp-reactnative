import { Slot, Stack } from "expo-router";
import React from "react";

export default function Rootlayout() {
  return (
    // The <Stack> element in Expo React Native, specifically when using the expo-router library, is used to manage and define a stack-based navigation system within your app. This pattern is similar to how traditional navigation stacks work, where you can push and pop screens on top of each other, and it maintains a history of screens that have been visited.

    <Stack>
      {/* The <Stack.Screen> component is used to define individual screens within the stack. Each screen corresponds to a specific route or page in your app. */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}
