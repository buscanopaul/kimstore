import React from "react";
import { Pressable, Text } from "react-native";

type Props = {
  children: React.ReactNode;
  onPress: () => void;
};

const TextLink = ({ children, onPress }: Props) => {
  return (
    <Pressable onPress={onPress} className={`active:opacity-70`}>
      <Text className="text-red-600 font-primary">{children}</Text>
    </Pressable>
  );
};

export default TextLink;
