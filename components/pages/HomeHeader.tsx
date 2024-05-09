import React from "react";
import { Image, View } from "react-native";
import Heading from "../Heading";
import Paragraph from "../Paragraph";

type Props = {};

const HomeHeader = (props: Props) => {
  return (
    <View className="flex flex-row items-center justify-between">
      <View>
        <Paragraph textColor="black text-xl">Best Smart</Paragraph>
        <Heading textSize="text-xl">Electric Gadgets</Heading>
      </View>
      <Image
        source={{
          uri: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
        }}
        resizeMode="cover"
        className="w-11 h-11 rounded-full"
      />
    </View>
  );
};

export default HomeHeader;
