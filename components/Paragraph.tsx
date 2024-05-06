import React from "react";
import { Text } from "react-native";

type Props = {
  children: React.ReactNode;
  textColor: string;
};

const Paragraph = ({ children, textColor }: Props) => {
  return <Text className={`font-secondary ${textColor}`}>{children}</Text>;
};

export default Paragraph;
