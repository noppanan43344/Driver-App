import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TopUpHistory from './TopUpHistory';
import { FONT_BOLD, FONT_SIZES, COLORS, FONT_MED } from '@components/styles';
const Stack = createStackNavigator();

export default TopUpHistoryStack = (props) => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="ProfileScreen"
                component={TopUpHistory}
                options={{
                    title: 'ประวัติการโอน',
                    headerStyle: { backgroundColor: COLORS.APP_COLORS },
                    headerTintColor: 'white',
                    headerTitleStyle: {
                        fontFamily: FONT_BOLD,
                    },
                }}></Stack.Screen>
        </Stack.Navigator>
    );
};
