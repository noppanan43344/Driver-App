import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AuthScreen from './AuthScreen';

const Stack = createStackNavigator();

export default AuthTabs = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AuthScreen"
        component={AuthScreen}
        options={{headerShown: false}}></Stack.Screen>
    </Stack.Navigator>
  );
};
