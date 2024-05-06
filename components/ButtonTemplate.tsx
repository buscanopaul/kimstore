import React from "react";
import { Pressable, Text } from "react-native";

type Props = {
  text: string;
  onPress: () => void;
  bgClassName: string;
  textClassName: string;
  fontFamily: string;
};

const ButtonTemplate = ({
  text,
  onPress,
  bgClassName,
  textClassName,
  fontFamily,
}: Props) => {
  return (
    <Pressable
      onPress={onPress}
      className={`h-12 rounded-full flex items-center justify-center active:opacity-70 ${bgClassName}`}
    >
      <Text className={`${textClassName} ${fontFamily}`}>{text}</Text>
    </Pressable>
  );
};

export default ButtonTemplate;
