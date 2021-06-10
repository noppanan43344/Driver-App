import 'react-native-gesture-handler';
import React from 'react';
import analytics from '@react-native-firebase/analytics';
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './src/navigations/Navigator';
import { ThemeProvider } from 'react-native-elements';
import { COLORS } from '@components/styles';

const App = () => {
    const theme = {
        colors: {
            primary: COLORS.APP_COLORS,
        },
    };
    const routeNameRef = React.useRef();
    const navigationRef = React.useRef();
    return (
        <NavigationContainer
            ref={navigationRef}
            onStateChange={async () => {
                const previousRouteName = routeNameRef.current;
                const currentRouteName = navigationRef.current.getCurrentRoute()
                    .name;

                if (previousRouteName !== currentRouteName) {
                    await analytics().logScreenView({
                        screen_name: currentRouteName,
                        screen_class: currentRouteName,
                    });
                }
            }}>
            <ThemeProvider theme={theme}>
                <Navigator />
            </ThemeProvider>
        </NavigationContainer>
    );
};

export default App;
