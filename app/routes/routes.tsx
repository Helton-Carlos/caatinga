import { createNativeStackNavigator } from "@react-navigation/native-stack"

import Home from '../pages/Home/Home';
import Products from '../pages/Products/Products';

export type StackParamList = {
  home: undefined;
  products: undefined;
}

const Stack = createNativeStackNavigator<StackParamList>();

export function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={Home}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="products"
        component={Products}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  )
}