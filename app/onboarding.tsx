import ButtonTemplate from "@/components/ButtonTemplate";
import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import Spacer from "@/components/Spacer";
import { useNavigation } from "expo-router";
import React, { useCallback } from "react";
import { Image, View } from "react-native";

type Props = {};

const onboarding = (props: Props) => {
  const navigation = useNavigation();

  const handleGetStarted = useCallback(() => {
    navigation.navigate("(auth)/login");
  }, []);

  return (
    <View className="flex-1 bg-white">
      <Image
        source={require("../assets/images/bg_onboarding.jpg")}
        resizeMode="contain"
        className="w-full h-[390] mt-16"
      />
      <View className="bg-[#12278A] items-center px-6 justify-between flex-1 pt-5">
        <View>
          <Heading textSize="text-4xl text-white text-center">
            Your trusted
          </Heading>
          <Heading textSize="text-4xl text-white text-center">
            online store
          </Heading>
          <Spacer height="h-3" />
          <Paragraph textColor="text-white max-w-[300] text-center">
            Great Deals on Best Brands of gaming smartphones, high-quality
            laptops and tablets
          </Paragraph>
        </View>
        <ButtonTemplate
          text="Get Started"
          onPress={handleGetStarted}
          bgClassName="bg-white w-full bottom-10"
          textClassName="text-black"
          fontFamily="font-primary"
        />
      </View>
    </View>
  );
};

export default onboarding;
