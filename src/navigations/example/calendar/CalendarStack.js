import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Calendar from './index';

const Stack = createStackNavigator();

export default CardStack = () => {
  return (
    <Stack.Navigator initialRouteName="CalendarScreen">
      <Stack.Screen
        name="CalendarScreen"
        component={Calendar}
        options={{headerShown: false}}></Stack.Screen>
    </Stack.Navigator>
  );
};
