import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Card from './index';

const Stack = createStackNavigator();

export default CardStack = () => {
  return (
    <Stack.Navigator initialRouteName="CardScreen">
      <Stack.Screen
        name="CardScreen"
        component={Card}
        options={{headerShown: false}}></Stack.Screen>
    </Stack.Navigator>
  );
};
