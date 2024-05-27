import { Feather } from "@expo/vector-icons";
import React from "react";
import { Image, Pressable, View } from "react-native";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import Spacer from "./Spacer";

type Props = {
  item: any;
  index: number;
};

const ProductItem = ({ item, index }: Props) => {
  return (
    <>
      {item.id === 0 ? (
        <View className="mr-2 py-5">
          <Heading textSize="text-2xl">Buy now</Heading>
          <Heading textSize="text-2xl">Pay Later</Heading>
          <Spacer height="h-2" />
          <Paragraph textColor="text-black">
            Pay our gadgets in Easy Monthly installments with billease
          </Paragraph>
        </View>
      ) : item.id === 3 ? (
        <View className="h-[100px] bg-red-600 ml-2 rounded-2xl p-3">
          <Image
            source={require("../assets/images/bg-label.png")}
            className="w-20 h-20 absolute self-center top-3 opacity-20"
          />
          <Heading textSize="text-lg text-white">New Arrivals</Heading>
          <Paragraph textColor="text-white text-[11px]">
            Mobile Phones, Home Appliances
          </Paragraph>
          <Paragraph textColor="text-white text-[11px]">
            Electronics Accessories{" "}
          </Paragraph>
        </View>
      ) : (
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
      )}
    </>
  );
};

export default ProductItem;
