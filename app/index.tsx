import React from "react";
// import beachImage from "/musicapp/assets/meditation-images/beach.webp";
import beachImage from "../assets/meditation-images/beach.webp";
import { View, Text, ImageBackground, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import CustomButton from "@/components/CustomButton";
import { useRouter } from "expo-router";
import AppGradient from "@/components/AppGradient";

const index = () => {
  const route = useRouter();
  return (
    <View className="flex-1 ">
      <ImageBackground
        resizeMode="cover"
        className="flex-1"
        source={beachImage}
      >
        <AppGradient colors={["rgba(0,0,0,0.4)", "rgba(0,0,0,0.8)"]}>
          {/* //In an Expo React Native application, the <SafeAreaView> component is used to ensure that content is rendered within the safe area boundaries of a device. */}
          <SafeAreaView className="flex-1 px-1 justify-between pt-8">
            <View>
              <Text className="text-center text-white font-bold text-4xl">
                Simple meditation
              </Text>
              <Text className="text-center text-white text-regular text-xl mt-3">
                Simplyfing Meditation for everyone
              </Text>
            </View>
            {/* The <StatusBar style="light" /> component in a React Native application, specifically when using Expo, is used to control the appearance of the status bar on both iOS and Android devices.  */}

            <View>
              <CustomButton
                onPress={() => route.push("/nature-meditate")}
                title="Get Started"
              />
            </View>
            <StatusBar style="light" />
          </SafeAreaView>
        </AppGradient>
      </ImageBackground>
    </View>
  );
};

export default index;
