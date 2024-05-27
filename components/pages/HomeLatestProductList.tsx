import { MasonryFlashList } from "@shopify/flash-list";
import React from "react";
import { Dimensions, View } from "react-native";
import ProductItem from "../ProductItem";

type Props = {};

const DATA = [
  {
    id: 1,
    brand: "Samsung",
    model: "Galaxy S24",
    price: "87990",
  },
  {
    id: 2,
    brand: "Samsung",
    model: "Galaxy S24",
    price: "87990",
  },
  {
    id: 8,
    brand: "Samsung",
    model: "Galaxy S24",
    price: "87990",
  },
  {
    id: 4,
    brand: "Samsung",
    model: "Galaxy S24",
    price: "87990",
  },
  {
    id: 5,
    brand: "Samsung",
    model: "Galaxy S24",
    price: "87990",
  },
  {
    id: 6,
    brand: "Samsung",
    model: "Galaxy S24",
    price: "87990",
  },

  {
    id: 7,
    brand: "Samsung",
    model: "Galaxy S24",
    price: "87990",
  },
  {
    id: 8,
    brand: "Samsung",
    model: "Galaxy S24",
    price: "87990",
  },
];

const NEW_ITEM = {
  id: 0,
  brand: "test",
  model: "yeah",
  price: "9999",
};

const THIRD_ITEM = {
  id: 3,
  brand: "test",
  model: "yeah",
  price: "9999",
};

const HomeLatestProductList = (props: Props) => {
  const updatedData = [NEW_ITEM, ...DATA];

  updatedData.splice(3, 0, THIRD_ITEM);

  return (
    <View
      style={{
        height: Dimensions.get("screen").height,
        width: Dimensions.get("screen").width - 50,
      }}
    >
      <MasonryFlashList
        data={updatedData}
        numColumns={2}
        renderItem={({ item, index }) => (
          <ProductItem item={item} index={index} />
        )}
        keyExtractor={(item, index) => index}
        estimatedItemSize={200}
        ItemSeparatorComponent={() => <View className="h-5" />}
        showsVerticalScrollIndicator={false}
        ListFooterComponentStyle={{ marginBottom: 320 }}
      />
    </View>
  );
};

export default HomeLatestProductList;
