import { createNativeStackNavigator } from "@react-navigation/native-stack"

import Home from '../pages/Home/Home';
import Products from '../pages/Products/Products';
import Notification from '../pages/Notification/Notification';

export type StackParamList = {
  home: undefined;
  products: undefined;
  notification: undefined
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
      <Stack.Screen
        name="notification"
        component={Notification}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  )
}