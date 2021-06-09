import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Notification from './index';

const Stack = createStackNavigator();

export default AuthTabs = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="NotificationScreen"
        component={Notification}
        options={{ headerShown: false }}>
      </Stack.Screen>
    </Stack.Navigator>
  );
};
