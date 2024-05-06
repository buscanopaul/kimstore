import React from "react";
import { TextInput } from "react-native";

type Props = {
  text: string;
  setText: (value: string) => void;
  placeholder: string;
  secureTextEntry?: boolean;
};

const InputField = ({ text, setText, placeholder, secureTextEntry }: Props) => {
  return (
    <TextInput
      onChangeText={setText}
      value={text}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      className="border rounded-full border-gray-400 h-12 px-4 font-secondary"
    />
  );
};

export default InputField;
