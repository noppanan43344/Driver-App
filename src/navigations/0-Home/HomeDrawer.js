import React from 'react';
import Home from './HomeScreen';
import JobStack from './Screen/Job/JobStack';
import TopUpStack from './Screen/TopUp/TopUpStack';
import TopUpHistoryStack from './Screen/TopUpHistory/TopUpHistoryStack';
import ProfileStack from './Screen/Profile/ProfileStack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent } from './Screen/DrawerContent';
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
            <Drawer.Screen name="ProfileScreen" component={ProfileStack} />
        </Drawer.Navigator>
    );
};
