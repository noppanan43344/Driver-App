import React from 'react';
import Home from './HomeScreen';
import StackJob from './Screen/Job/JobStack';
import StackTopUp from './Screen/TopUp/TopUpStack';
import TopUpHistory from './Screen/TopUpHistory/TopUpHistory';
import Profile from './Screen/Profile/Profile';
import { FONT_BOLD, FONT_SIZES, COLORS, FONT_MED } from '@components/styles';
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();
export default AuthTabs = () => {
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="หน้าหลัก" component={Home} />
            <Drawer.Screen
                name="JobScreen"
                component={StackJob}
                options={{
                    title: 'รายการสินค้าที่ต้องส่ง',
                    headerStyle: { backgroundColor: COLORS.APP_COLORS },
                    headerTintColor: 'white',
                    headerTitleStyle: {
                        fontFamily: FONT_BOLD,
                    },
                    headerShown: false,
                }}
            />
            <Drawer.Screen
                name="TopUpScreen"
                component={StackTopUp}
                options={{
                    title: 'ช่องทางการโอนเงิน',
                    headerStyle: { backgroundColor: COLORS.APP_COLORS },
                    headerTintColor: 'white',
                    headerTitleStyle: {
                        fontFamily: FONT_BOLD,
                    },
                    headerShown: false,
                }}
            />
            <Drawer.Screen
                name="TopUpHistoryScreen"
                component={TopUpHistory}
                options={{
                    title: 'ประวัติการโอน',
                    headerStyle: { backgroundColor: COLORS.APP_COLORS },
                    headerTintColor: 'white',
                    headerTitleStyle: {
                        fontFamily: FONT_BOLD,
                    },
                }}
            />
            <Drawer.Screen
                name="ProfileScreen"
                component={Profile}
                options={{
                    title: 'ข้อมูลส่วนตัว',
                    headerStyle: { backgroundColor: COLORS.APP_COLORS },
                    headerTintColor: 'white',
                    headerTitleStyle: {
                        fontFamily: FONT_BOLD,
                    },
                }}
            />
        </Drawer.Navigator>
    );
};
