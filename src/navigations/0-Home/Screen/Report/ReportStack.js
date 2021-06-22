import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Report from './ReportScreen';
const Stack = createStackNavigator();

export default ReportStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="ReportScreen"
                component={Report}
                options={{
                    headerShown: false,
                }}></Stack.Screen>
        </Stack.Navigator>
    );
};
