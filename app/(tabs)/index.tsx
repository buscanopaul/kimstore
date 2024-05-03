import { ActivityIndicator, Dimensions, StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { useQuery } from '@tanstack/react-query';
import useFetchProducts from '@/hooks/useFetchProducts';
import { FlashList } from '@shopify/flash-list';

export default function TabOneScreen() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['products'],
    queryFn: useFetchProducts
  })

  if (isLoading) return <Text>Loading...</Text>;
  if (error) return <Text>Error loading products</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={{ height: 200, width: Dimensions.get("screen").width }}>
      <FlashList 
        data={data}
        renderItem={({ item }) => <Text>{item.title}</Text>}
        estimatedItemSize={20}
      />
      </View>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
