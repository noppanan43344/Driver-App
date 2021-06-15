import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from './Profile';
import { FONT_BOLD, FONT_SIZES, COLORS, FONT_MED } from '@components/styles';
const Stack = createStackNavigator();

export default ProfileStack = (props) => {
    return (
        <Stack.Navigator>
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
        </Stack.Navigator>
    );
};
