import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Job from './JobScreen';
import SingUp from './Traking/SingUp/SingUpScreen';
import Traking from './Traking/TrakingScreen';
const Stack = createStackNavigator();

export default JobStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="JobScreen"
                component={Job}
                options={{
                    headerShown: false,
                }}></Stack.Screen>
            <Stack.Screen
                name="TrakingScreen"
                component={Traking}
                options={{ headerShown: false }}></Stack.Screen>
            <Stack.Screen
                name="SingUpScreen"
                component={SingUp}
                options={{
                    headerShown: false,
                }}></Stack.Screen>
        </Stack.Navigator>
    );
};
