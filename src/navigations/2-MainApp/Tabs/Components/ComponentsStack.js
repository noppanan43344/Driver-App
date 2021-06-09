import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Components from './index';
import Topbar from '@navigations/example/topbar';
import Card from '@navigations/example/card/CardStack';
import Calendar from '@navigations/example/calendar/CalendarStack';

const Stack = createStackNavigator();

export default ExampleStack = () => {
  return (
    <Stack.Navigator initialRouteName="ComponentsScreen">
      <Stack.Screen
        name="ComponentsScreen"
        component={Components}
        options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen
        name="TopbarScreen"
        component={Topbar}
        options={{
          title: 'Top Bar',
          headerBackTitleVisible: false,
        }}></Stack.Screen>
      <Stack.Screen
        name="CardScreen"
        component={Card}
        options={{
          title: 'Card',
          headerBackTitleVisible: false,
        }}></Stack.Screen>
      <Stack.Screen
        name="CalendarScreen"
        component={Calendar}
        options={{
          title: 'Calendar',
          headerBackTitleVisible: false,
        }}></Stack.Screen>
    </Stack.Navigator>
  );
};
