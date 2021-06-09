import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Camera from './index';
import CameraPicker from './CameraPicker';

const Stack = createStackNavigator();

export default CameraStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Camera"
        component={Camera}
        options={{
          headerShown: false,
        }}></Stack.Screen>
      <Stack.Screen
        name="CameraPicker"
        component={CameraPicker}
        options={{
          headerShown: false,
          headerBackTitleVisible: false,
        }}></Stack.Screen>
    </Stack.Navigator>
  );
};
