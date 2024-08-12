import {
  View,
  Text,
  ImageBackground,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { router, useLocalSearchParams } from "expo-router";
import { GallerypreviewData } from "@/constants/models/affirmationGallery";
import AFFIRMATION_GALLERY from "@/constants/affirmation-gallery";
import AppGradient from "@/components/AppGradient";
import AntDesign from "@expo/vector-icons/AntDesign";
const AffirmationPractice = () => {
  // useLocalSearchParams(), is used to retrieve query parameters or dynamic route parameters from the current route. Here's a breakdown of its usage:
  const { itemId } = useLocalSearchParams();
  const [affirmation, setAffirmation] = useState<GallerypreviewData>();

  useEffect(() => {
    for (let idx = 0; idx < AFFIRMATION_GALLERY.length; idx++) {
      const affirmationsData = AFFIRMATION_GALLERY[idx].data;
      const affirmationToStart = affirmationsData.find(
        (a) => a.id === Number(itemId)
      );
      if (affirmationToStart) {
        setAffirmation(affirmationToStart);
        return;
      }
    }
  }, []);

  return (
    <View className="flex-1">
      <ImageBackground
        className="flex-1 "
        resizeMode="cover"
        source={affirmation?.image}
      >
        <AppGradient colors={["rgba(0,0,0,0.3)", "rgba(0,0,0,0.9)"]}>
          <Pressable className=" pt-14" onPress={() => router.back()}>
            <AntDesign name="leftcircleo" size={28} color="white" />
          </Pressable>

          <ScrollView className="mt-20" showsVerticalScrollIndicator={false}>
            <View className="h-full justify-center">
              <View className="h-4/5 justify-center">
                <ScrollView showsVerticalScrollIndicator={true}>
                  <Text className="text-white font-bold text-center  text-2xl mb-4">
                    {affirmation?.text}
                  </Text>
                </ScrollView>
              </View>
            </View>
          </ScrollView>
        </AppGradient>
      </ImageBackground>
    </View>
  );
};

export default AffirmationPractice;
