import React from "react";
import { Text } from "react-native";

type Props = {
  children: React.ReactNode;
  textSize: any;
};

const Heading = ({ children, textSize }: Props) => {
  return <Text className={`font-primary ${textSize}`}>{children}</Text>;
};

export default Heading;
