import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TopUpHistory from './TopUpHistoryScreen';

const Stack = createStackNavigator();

export default TopUpHistoryStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="ProfileScreen"
                component={TopUpHistory}
                options={{
                    headerShown: false,
                }}></Stack.Screen>
        </Stack.Navigator>
    );
};
