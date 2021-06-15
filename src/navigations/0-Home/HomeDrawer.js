import React from 'react';
import Home from './HomeScreen';
import JobStack from './Screen/Job/JobStack';
import TopUpStack from './Screen/TopUp/TopUpStack';
import TopUpHistoryStack from './Screen/TopUpHistory/TopUpHistoryStack';
import ProfileStack from './Screen/Profile/ProfileStack';
import { FONT_BOLD, FONT_SIZES, COLORS, FONT_MED } from '@components/styles';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent } from './Screen/DrawerContent';
import Icon from 'react-native-vector-icons/FontAwesome';
const Drawer = createDrawerNavigator();
export default HomeStacks = () => {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <DrawerContent {...props} />}>
            <Drawer.Screen name="HomeScreen" component={Home} />
            <Drawer.Screen name="JobScreen" component={JobStack} />
            <Drawer.Screen name="TopUpScreen" component={TopUpStack} />
            <Drawer.Screen
                name="TopUpHistoryScreen"
                component={TopUpHistoryStack}
            />
            <Drawer.Screen
                name="ProfileScreen"
                component={ProfileStack}
                onPress={() => navigation.popToTop()}
            />
        </Drawer.Navigator>
    );
};

{
    /* <Drawer.Navigator initialRouteName="Home">
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
        </Drawer.Navigator> */
}
