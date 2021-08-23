import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './HomeScreen';
import JobStack from './Screen/Job/JobStack';
import TopUpStack from './Screen/TopUp/TopUpStack';
import TopUpHistoryStack from './Screen/TopUpHistory/TopUpHistoryStack';
import ProfileStack from './Screen/Profile/ProfileStack';
import ReportStack from './Screen/Report/ReportStack';
const Stack = createStackNavigator();

export default HomeStack = (props) => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="HomeScreen"
                component={Home}
                options={{
                    headerShown: false,
                }}></Stack.Screen>
            <Stack.Screen
                name="JobScreen"
                component={JobStack}
                options={{
                    headerShown: false,
                }}></Stack.Screen>
            <Stack.Screen
                name="TopUpScreen"
                component={TopUpStack}
                options={{
                    headerShown: false,
                }}></Stack.Screen>
            <Stack.Screen
                name="TopUpHistoryScreen"
                component={TopUpHistoryStack}
                options={{
                    headerShown: false,
                }}></Stack.Screen>
            <Stack.Screen
                name="ProfileScreen"
                component={ProfileStack}
                options={{
                    headerShown: false,
                }}></Stack.Screen>
            <Stack.Screen
                name="ReportScreen"
                component={ReportStack}
                options={{
                    headerShown: false,
                }}></Stack.Screen>
        </Stack.Navigator>
    );
};
