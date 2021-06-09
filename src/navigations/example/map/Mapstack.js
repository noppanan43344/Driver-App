import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MapScreen from './index';
import MapMarker from './MapMark';
import MapPolygon from './MapPolygon';
import Tracking from './Tracking';

const Stack = createStackNavigator();

export default MapStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MapScreen"
        component={MapScreen}
        options={{title: 'การใช้งานแผนที่'}}></Stack.Screen>
      <Stack.Screen
        name="MapMarker"
        component={MapMarker}
        options={{
          headerShown: false,
          headerBackTitleVisible: false,
        }}></Stack.Screen>
      <Stack.Screen name="MapPolygon" component={MapPolygon}></Stack.Screen>
      <Stack.Screen
        name="Tracking"
        component={Tracking}
        options={{headerBackTitleVisible: false}}></Stack.Screen>
    </Stack.Navigator>
  );
};
