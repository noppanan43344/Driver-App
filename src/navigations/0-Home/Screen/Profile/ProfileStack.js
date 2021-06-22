import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from './ProfileScreen';
const Stack = createStackNavigator();

export default ProfileStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="ProfileScreen"
                component={Profile}
                options={{
                    headerShown: false,
                }}></Stack.Screen>
        </Stack.Navigator>
    );
};
