import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TransferMoney from './TopUp/TransferMoney/TransferMoney'
import Traking from './Job/Traking/TrakingScreen';
import SingUp from './Job/Traking/SingUp/SingUpScreen';
import { FONT_BOLD, FONT_SIZES, COLORS, FONT_MED } from '@components/styles';

const Stack = createStackNavigator();
export default MainStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="TransferMoneyScreen"
                component={TransferMoney}
                options={{
                    title: 'แจ้งโอนเงิน',
                    headerStyle: { backgroundColor: COLORS.APP_COLORS },
                    headerTintColor: 'white',
                    headerTitleStyle: {
                        fontFamily: FONT_BOLD,
                    },
                }}></Stack.Screen>
            
            <Stack.Screen
                name="SingUpScreen"
                component={SingUp}
                options={{
                    title: 'ลงชื่อรับสินค้า',
                    headerStyle: { backgroundColor: COLORS.APP_COLORS },
                    headerTintColor: 'white',
                    headerTitleStyle: {
                        fontFamily: FONT_BOLD,
                    },
                }}></Stack.Screen>
        </Stack.Navigator>
    );
};