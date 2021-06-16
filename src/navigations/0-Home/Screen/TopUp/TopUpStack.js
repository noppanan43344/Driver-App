import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TopUp from './TopUpScreen';
import TransferMoney from './TransferMoney/TransferMoneyScreen';

const Stack = createStackNavigator();

export default StackTopUp = ({ navigation }) => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="TopUpScreen"
                component={TopUp}
                options={{ headerShown: false }}></Stack.Screen>
            <Stack.Screen
                name="TransferMoneyScreen"
                component={TransferMoney}
                options={{ headerShown: false }}></Stack.Screen>
        </Stack.Navigator>
    );
};
