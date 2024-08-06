import React from "react";

import { Slot } from "expo-router";

export default function Rootlayout() {
  // In an Expo React Native project, expo-router is used to manage routing and navigation in a more declarative and file-based manner, similar to routing in web development frameworks like Next.js. The Slot component is a key part of expo-router, allowing you to define where the nested routes will be rendered within a parent route.
  return <Slot />;
}
