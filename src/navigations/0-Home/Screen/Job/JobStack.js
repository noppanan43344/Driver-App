import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Job from './JobScreen';
import SingUp from './Traking/SingUp/SingUpScreen';
import Traking from './Traking/TrakingScreen';
import { FONT_BOLD, FONT_SIZES, COLORS, FONT_MED } from '@components/styles';
const Stack = createStackNavigator();

export default StackJob = (props) => {
    return (
        <Stack.Navigator>
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
