import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import Home from './HomeScreen';
import Job from './Screen/Job/JobScreen';
import TopUp from './Screen/TopUp/TopUpScreen';
import TopUpHistory from './Screen/TopUpHistory/TopUpHistory';
import TransferMoney from './Screen/TopUp/TransferMoney/TransferMoney';
import Traking from './Screen/Job/Traking/TrakingScreen';
import Profile from './Screen/Profile/Profile';
import { FONT_BOLD, FONT_SIZES, COLORS, FONT_MED } from '@components/styles';
const Stack = createStackNavigator();

export default AuthTabs = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="HomeScreen"
                component={Home}
                options={{ headerShown: false }}></Stack.Screen>
            <Stack.Screen
                name="JobScreen"
                component={Job}
                options={{
                    title: 'รายการสินค้าที่ต้องส่ง',
                    headerStyle: { backgroundColor: COLORS.APP_COLORS },
                    headerTintColor: 'white',
                    headerTitleStyle: {
                        fontFamily: FONT_BOLD,
                    },
                }}></Stack.Screen>
            <Stack.Screen
                name="TopUpScreen"
                component={TopUp}
                options={{
                    title: 'ช่องทางการโอนเงิน',
                    headerStyle: { backgroundColor: COLORS.APP_COLORS },
                    headerTintColor: 'white',
                    headerTitleStyle: {
                        fontFamily: FONT_BOLD,
                    },
                }}></Stack.Screen>
            <Stack.Screen
                name="TopUpHistoryScreen"
                component={TopUpHistory}
                options={{
                    title: 'ประวัติการโอน',
                    headerStyle: { backgroundColor: COLORS.APP_COLORS },
                    headerTintColor: 'white',
                    headerTitleStyle: {
                        fontFamily: FONT_BOLD,
                    },
                }}></Stack.Screen>
                <Stack.Screen
                name="ProfileScreen"
                component={Profile}
                options={{
                    title: 'ข้อมูลส่วนตัว',
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
                    title: 'แจ้งโอนเงิน',
                    headerStyle: { backgroundColor: COLORS.APP_COLORS },
                    headerTintColor: 'white',
                    headerTitleStyle: {
                        fontFamily: FONT_BOLD,
                    },
                }}></Stack.Screen>
            <Stack.Screen
                name="TrakingScreen"
                component={Traking}
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
// const styles = StyleSheet.create({
//     appbar: {
//         headerStyle: { backgroundColor: COLORS.APP_COLORS },
//         headerTintColor: 'white',
//         headerTitleStyle: {
//             fontFamily: FONT_BOLD,
//         },
//     },
// });
