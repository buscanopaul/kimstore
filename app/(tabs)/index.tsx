import Spacer from "@/components/Spacer";
import { Text } from "@/components/Themed";
import HomeHeader from "@/components/pages/HomeHeader";
import HomeLatestProductList from "@/components/pages/HomeLatestProductList";
import HomeSearch from "@/components/pages/HomeSearch";
import useFetchProducts from "@/hooks/useFetchProducts";
import { useQuery } from "@tanstack/react-query";
import { SafeAreaView, View } from "react-native";

export default function TabOneScreen() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: useFetchProducts,
  });

  if (isLoading) return <Text>Loading...</Text>;
  if (error) return <Text>Error loading products</Text>;

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="px-6">
        <HomeHeader />
        <Spacer height="h-7" />
        <HomeSearch />
        <Spacer height="h-7" />
        <HomeLatestProductList />
      </View>
    </SafeAreaView>
  );
}
