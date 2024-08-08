import { View, Text, FlatList, Pressable, ImageBackground } from "react-native";
import React from "react";
import AppGradient from "@/components/AppGradient";
import { StatusBar } from "expo-status-bar";
import { MEDITATION_DATA } from "@/constants/meditationData";
import MEDITATION_IMAGES from "@/constants/meditation-images";

const NatureMeditate = () => {
  return (
    <View className="flex-1">
      <AppGradient colors={["#161b2e", "#0a4d4a", "#766e67"]}>
        <View className="pt-8">
          <Text className="text-gray-200 mb-3 font-bold text-4xl text-left">
            Welcome fans
          </Text>
          <Text className="text-gray-100 mb-3 font-medium text-xl text-left">
            Fell the good vide of music
          </Text>
        </View>
        <View>
          {/* The <FlatList> component in React Native is used for rendering a scrollable list of data. It is highly optimized for performance, especially for long lists, as it only renders items that are currently visible on the screen and a few items around the edges */}
          <FlatList
            data={MEDITATION_DATA}
            className="mb-36"
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              // The <Pressable> component in React Native is a wrapper component that provides touch handling for its child components. It is often used to create interactive UI elements that respond to user interactions such as taps, long presses, and so on. The <Pressable> component is more flexible and has more features compared to other touchable components like <TouchableOpacity>, <TouchableHighlight>, etc.
              <Pressable
                onPress={() => console.log("Press")}
                className="h-48 my-3 rounded-md overflow-hidden"
              >
                <ImageBackground
                  source={MEDITATION_IMAGES[item.id - 1]}
                  resizeMode="cover"
                  className="rounded-lg justify-center flex-1"
                >
                  <Text className="text-gray-100 text-3xl font-bold text-center">
                    {item.title}
                  </Text>
                </ImageBackground>
              </Pressable>
            )}
          />
        </View>
      </AppGradient>
      <StatusBar style="light" />
    </View>
  );
};

export default NatureMeditate;
