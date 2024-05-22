import { MasonryFlashList } from "@shopify/flash-list";
import React from "react";
import { Dimensions, View } from "react-native";
import ProductItem from "../ProductItem";

type Props = {};

const DATA = [
  {
    brand: "Samsung",
    model: "Galaxy S24",
    price: "87990",
  },
  {
    brand: "Samsung",
    model: "Galaxy S24",
    price: "87990",
  },
  {
    brand: "Samsung",
    model: "Galaxy S24",
    price: "87990",
  },
  {
    brand: "Samsung",
    model: "Galaxy S24",
    price: "87990",
  },
  {
    brand: "Samsung",
    model: "Galaxy S24",
    price: "87990",
  },
  {
    brand: "Samsung",
    model: "Galaxy S24",
    price: "87990",
  },

  {
    brand: "Samsung",
    model: "Galaxy S24",
    price: "87990",
  },
  {
    brand: "Samsung",
    model: "Galaxy S24",
    price: "87990",
  },
];

const HomeLatestProductList = (props: Props) => {
  return (
    <View
      style={{
        height: Dimensions.get("screen").height,
        width: Dimensions.get("screen").width - 50,
      }}
    >
      <MasonryFlashList
        data={DATA}
        numColumns={2}
        renderItem={({ item, index }) => (
          <ProductItem item={item} index={index} />
        )}
        estimatedItemSize={200}
        ItemSeparatorComponent={() => <View className="h-5" />}
        showsVerticalScrollIndicator={false}
        ListFooterComponentStyle={{ marginBottom: 320 }}
      />
    </View>
  );
};

export default HomeLatestProductList;
