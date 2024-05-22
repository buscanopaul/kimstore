import { Feather } from "@expo/vector-icons";
import React from "react";
import { Image, Pressable, View } from "react-native";
import Heading from "./Heading";
import Paragraph from "./Paragraph";

type Props = {
  item: any;
  index: number;
};

const ProductItem = ({ item, index }: Props) => {
  return (
    <View
      className={`bg-gray-100 rounded-2xl p-5 justify-between ${
        index % 2 == 0 ? "mr-2 h-[300px]" : "ml-2 h-[350px]"
      }`}
    >
      <Pressable onPress={() => {}} className="active:opacity-70">
        <Paragraph textColor="text-black">{item.brand}</Paragraph>
        <Paragraph textColor="text-black">{item.model}</Paragraph>
      </Pressable>
      <Pressable onPress={() => {}} className="active:opacity-70">
        <Image
          source={require("../assets/images/s24.png")}
          className="h-40 w-full"
        />
      </Pressable>
      <View className="flex-row items-center justify-between">
        <Pressable onPress={() => {}} className="active:opacity-70">
          <Heading textSize="text-lg">
            {"\u20B1"}
            {item.price}
          </Heading>
        </Pressable>
        <Pressable
          onPress={() => {}}
          className="active:opacity-70 bg-red-600 rounded-full p-2"
        >
          <Feather name="shopping-cart" size={20} color="white" />
        </Pressable>
      </View>
    </View>
  );
};

export default ProductItem;
