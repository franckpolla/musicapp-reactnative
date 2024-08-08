import { View, Text } from "react-native";
import React from "react";
import AppGradient from "@/components/AppGradient";
import { ScrollView } from "react-native";
import GuideAffirmationGallery from "@/components/GuideAffirmationGallery";
import AFFIRMATION_GALLERY from "@/constants/affirmation-gallery";
const Affirmations = () => {
  return (
    <View className=" flex-1">
      <AppGradient colors={["#2e1f58", "#54426b", "#a790af"]}>
        <ScrollView showsVerticalScrollIndicator={false} className="pt-12">
          <Text className="text-zinc-50 text-3xl font-bold">
            Surround yourself with good vibes
          </Text>
          <View>
            {AFFIRMATION_GALLERY.map((elemen) => (
              <GuideAffirmationGallery
                key={elemen.title}
                title={elemen.title}
                previews={elemen.data}
              />
            ))}
          </View>
        </ScrollView>
      </AppGradient>
    </View>
  );
};

export default Affirmations;
