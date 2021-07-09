import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Job from './JobScreen';
import SingUp from './Tracking/ScanQR/SingUp/SingUpScreen';
import ScanQR from './Tracking/ScanQR/ScanQRScreen';
import Tracking from './Tracking/TrackingScreen';

const Stack = createStackNavigator();

export default JobStack = () => {
    return (
        <Stack.Navigator>
            {/* <Stack.Screen
                name="JobScreen"
                component={Job}
                options={{
                    headerShown: false,
                }}></Stack.Screen> */}
            <Stack.Screen
                name="TrackingScreen"
                component={Tracking}
                options={{ headerShown: false }}></Stack.Screen>
            <Stack.Screen
                name="ScanQRScreen"
                component={ScanQR}
                options={{
                    headerShown: false,
                }}></Stack.Screen>
            <Stack.Screen
                name="SingUpScreen"
                component={SingUp}
                options={{
                    headerShown: false,
                }}></Stack.Screen>
        </Stack.Navigator>
    );
};
