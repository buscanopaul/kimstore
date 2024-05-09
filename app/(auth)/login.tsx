import ButtonTemplate from "@/components/ButtonTemplate";
import Heading from "@/components/Heading";
import InputField from "@/components/InputField";
import Paragraph from "@/components/Paragraph";
import Spacer from "@/components/Spacer";
import TextLink from "@/components/TextLink";
import { useNavigation } from "expo-router";
import React, { useCallback, useEffect, useState } from "react";
import { Image, SafeAreaView, View } from "react-native";

type Props = {};

const login = (props: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true);
  const navigation = useNavigation();

  const handleHidePassword = useCallback(() => {
    setHidePassword(!hidePassword);
  }, [hidePassword]);

  const handleLogin = useCallback(() => {
    navigation.navigate("(tabs)");
  }, []);

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  return (
    <View className="flex-1 px-6 bg-white">
      <SafeAreaView>
        <Heading textSize="text-xl">Welcome Back</Heading>
        <Paragraph textColor="text-gray-500">Login to continue</Paragraph>
        <Spacer height="h-20" />
        <Image
          source={require("../../assets/images/logo_kimstore.png")}
          resizeMode="contain"
          className="w-60 self-center"
        />
        <Spacer height="h-20" />
        <InputField
          text={email}
          setText={setEmail}
          placeholder="Email address"
        />
        <Spacer height="h-3" />
        <View className="relative">
          <InputField
            text={password}
            setText={setPassword}
            placeholder="Password"
            secureTextEntry={hidePassword}
          />
          <View className="absolute right-5 top-4">
            <TextLink onPress={handleHidePassword}>
              {hidePassword ? "Show" : "Hide"}
            </TextLink>
          </View>
        </View>
        <Spacer height="h-5" />
        <TextLink onPress={() => {}}>Forgot Password?</TextLink>
        <Spacer height="h-5" />
        <ButtonTemplate
          text="Login"
          bgClassName="bg-red-600"
          textClassName="text-white"
          fontFamily="font-primary"
          onPress={handleLogin}
        />
        <Spacer height="h-3" />
        <ButtonTemplate
          text="Create Account"
          bgClassName="bg-red-200"
          textClassName="text-red-600"
          fontFamily="font-secondary"
          onPress={() => {}}
        />
      </SafeAreaView>
    </View>
  );
};

export default login;
