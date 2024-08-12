import { View, Text, Pressable } from "react-native";
import React, { useContext } from "react";
import AppGradient from "@/components/AppGradient";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";
import CustomButton from "@/components/CustomButton";
import { TimerContexte } from "@/context/TimerContext";
const AdjustMeditation = () => {
  const { setDuration } = useContext(TimerContexte);
  const handlePress = (duration: number) => {
    setDuration(duration);
    router.back();
  };

  return (
    <View className="flex-1 relative">
      <AppGradient colors={["#161b2e", "#0a4d4a", "#766e67"]}>
        <Text>adjust-meditation</Text>

        <Pressable className="mt-10" onPress={() => router.back()}>
          <AntDesign name="leftcircleo" size={32} color="white" />
        </Pressable>
        <View className="justify-center h-4/5">
          <Text className="text-white text-center font-bold text-2xl">
            {" "}
            Adjust Your meditation duration
          </Text>
          <View>
            <CustomButton
              title="10 Seconde"
              onPress={() => handlePress(10)}
              containerStyle="mb-5"
            />
            <CustomButton
              title="5 Minutes"
              onPress={() => handlePress(5 * 60)}
              containerStyle="mb-5"
            />
            <CustomButton
              title="10 Minutes"
              onPress={() => handlePress(10 * 60)}
              containerStyle="mb-5"
            />
            <CustomButton
              title="15 Minutes"
              onPress={() => handlePress(15 * 60)}
              containerStyle="mb-5"
            />
          </View>
        </View>
      </AppGradient>
    </View>
  );
};

export default AdjustMeditation;
