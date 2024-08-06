import { Text, TouchableOpacity } from "react-native";
import React from "react";
// import { TouchableOpacity } from 'react-native-gesture-handler'

interface CustomButtonProps {
  onPress: () => void;
  title: string;
  textStyle?: string;
  containerStyle?: string;
}

const CustomButton = ({
  onPress,
  title,
  textStyle = "",
  containerStyle = "",
}: CustomButtonProps) => {
  return (
    // The <TouchableOpacity> component in React Native is a wrapper for making views respond properly to touches. When the user presses the wrapped view, the opacity of the view is decreased, which provides a visual feedback to the user.
    <TouchableOpacity
      activeOpacity={0.7}
      className={`bg-white rounded-xl min-h-[62px] justify-center items-center ${containerStyle}`}
      onPress={onPress}
    >
      <Text className={`font-semibold text-lg ${textStyle}`}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
