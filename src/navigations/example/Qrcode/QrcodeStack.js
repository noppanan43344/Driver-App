import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import QRShow from './index';

const Stack = createStackNavigator();

export default QrcodeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="QRShow"
        component={QRShow}
        options={{
          headerShown: false,
        }}></Stack.Screen>
    </Stack.Navigator>
  );
};
