import React from "react";
import { View } from "react-native";

type Props = {
  height: string;
};

const Spacer = ({ height }: Props) => {
  return <View className={height} />;
};

export default Spacer;
