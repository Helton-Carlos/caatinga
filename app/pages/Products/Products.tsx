import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackParamList } from '../../routes/routes';

type RouteProductParams = {
  products: {
    id: string
  }
}

type ProductRouterProps = RouteProp<RouteProductParams, 'products'>

export default function Products() {
  const router = useRoute<ProductRouterProps>();

  return (
    <View style={styles.container}>
      <Text>products {router.params.id}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
