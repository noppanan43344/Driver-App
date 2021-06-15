import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TopUp from './TopUpScreen';
import TransferMoney from './TransferMoney/TransferMoney';
import { FONT_BOLD, FONT_SIZES, COLORS, FONT_MED } from '@components/styles';
const Stack = createStackNavigator();

export default StackTopUp = (props) => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="TopUpScreen"
                component={TopUp}
                options={{ headerShown: false }}
                options={{
                    title: 'ช่องทางการโอนเงิน',
                    headerStyle: { backgroundColor: COLORS.APP_COLORS },
                    headerTintColor: 'white',
                    headerTitleStyle: {
                        fontFamily: FONT_BOLD,
                    },
                }}></Stack.Screen>
            <Stack.Screen
                name="TransferMoneyScreen"
                component={TransferMoney}
                options={{
                    title: 'เส้นทาง',
                    headerStyle: { backgroundColor: COLORS.APP_COLORS },
                    headerTintColor: 'white',
                    headerTitleStyle: {
                        fontFamily: FONT_BOLD,
                    },
                }}></Stack.Screen>
        </Stack.Navigator>
    );
};
