import { EvilIcons } from "@expo/vector-icons";
import React, { useCallback, useState } from "react";
import { Pressable, TextInput, View } from "react-native";

type Props = {};

const HomeSearch = (props: Props) => {
  const [search, setSearch] = useState("");
  const [showClose, setShowClose] = useState(false);

  const handleSearch = (text: string) => {
    setSearch(text);
    setShowClose(text.length > 0);
  };

  const handleClose = useCallback(() => {
    setSearch("");
    setShowClose(false);
  }, [showClose]);

  return (
    <View className="bg-gray-100 rounded-2xl relative">
      <TextInput
        value={search}
        onChangeText={handleSearch}
        placeholder="Search product"
        className="h-11 px-3 font-secondary"
      />
      <View className="absolute right-2 top-2">
        {showClose ? (
          <Pressable onPress={handleClose} className="active:opacity-70">
            <EvilIcons name="close-o" size={30} color="black" />
          </Pressable>
        ) : (
          <EvilIcons name="search" size={30} color="black" />
        )}
      </View>
    </View>
  );
};

export default HomeSearch;
