import { useFonts } from "expo-font";
import { Slot, SplashScreen, Stack } from "expo-router";
import React, { useEffect } from "react";

import TimerProvider from "@/context/TimerContext";

// The SplashScreen.preventAutoHideAsync() function is used in Expo (a framework for React Native) to control the visibility of the splash screen when the app is launching. By default, the splash screen will automatically hide once the app is ready
SplashScreen.preventAutoHideAsync();

export default function Rootlayout() {
  const [fontsLoaded, error] = useFonts({
    "Roboto-Mono": require("../assets/fonts/RobotoMono-Regular.ttf"),
  });
  useEffect(() => {
    if (error) throw error;
    // A splash screen is an introductory screen that appears when a mobile app is launched. It typically displays for a few seconds before the main content of the app is loaded and displayed to the user.
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);
  if (!fontsLoaded) return null;
  if (!fontsLoaded && !error) return null;

  return (
    // The <Stack> element in Expo React Native, specifically when using the expo-router library, is used to manage and define a stack-based navigation system within your app. This pattern is similar to how traditional navigation stacks work, where you can push and pop screens on top of each other, and it maintains a history of screens that have been visited.
    <TimerProvider>
      <Stack>
        {/* The <Stack.Screen> component is used to define individual screens within the stack. Each screen corresponds to a specific route or page in your app. */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="meditate" options={{ headerShown: false }} />
        <Stack.Screen name="index" options={{ headerShown: false }} />

        {/* presentation: "modal":

This option specifies the way this screen is presented. When set to "modal", it means that this screen will be presented as a modal.
A modal is a type of presentation where the new screen slides up from the bottom and partially covers the previous screen. It gives the appearance of a dialog or pop-up. */}
        <Stack.Screen
          name="(modal)/adjust-meditation"
          options={{ headerShown: false, presentation: "modal" }}
        />
      </Stack>
    </TimerProvider>
  );
}
