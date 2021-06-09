import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import HomeScreen from './index';
import NotificationStack from './Tabs/Notification';
import ExampleStack from './Tabs/Example/ExampleStack';
import Icon from 'react-native-vector-icons/AntDesign';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { withTheme } from 'react-native-elements';
import Components from './Tabs/Components/ComponentsStack';

const Tab = createBottomTabNavigator();
const MaterialTab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

const getTabBarVisibility = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route);
  switch (routeName) {
    case 'ExampleScreen':
      return true;
      break;
    case undefined:
      return true;
      break;
    default:
      return false;
      break;
  }
};

const HomeStackIOS = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen 
        name="Home"
        component={HomeScreen}
        options={({ route }) => ({
          title: () => null,
          tabBarVisible: getTabBarVisibility(route),
          tabBarIcon: ({ tintColor }) => (
            <Icon name="home" size={25} color={tintColor} />
          ),
        })}
      />
      <Tab.Screen
        name="notification"
        component={NotificationStack}
        options={({ route }) => ({
          title: () => null,
          tabBarVisible: getTabBarVisibility(route),
          tabBarIcon: ({ tintColor }) => (
            <FeatherIcon name="bell" size={25} color={tintColor} />
          ),
        })}
      />
      <Tab.Screen
        name="ExampleStack"
        options={({ route }) => ({
          title: () => null,
          tabBarVisible: getTabBarVisibility(route),
          tabBarIcon: ({ tintColor }) => (
            <FeatherIcon name="file-text" size={25} color={tintColor} />
          ),
        })}
        component={ExampleStack}
      />
      <Tab.Screen
        name="components"
        component={Components}
        options={({ route }) => ({
          title: () => null,
          tabBarIcon: ({ tintColor }) => (
            <FeatherIcon name="hexagon" size={25} color={tintColor} />
          ),
        })}
      />
    </Tab.Navigator>
  );
};

const HomeStackAndroid = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={({ route }) => ({
          title: () => null,
          tabBarVisible: getTabBarVisibility(route),
          tabBarIcon: ({ tintColor }) => (
            <Icon name="home" size={25} color={tintColor} />
          ),
        })}
      />
      <Tab.Screen
        name="notification"
        component={NotificationStack}
        options={({ route }) => ({
          title: () => null,
          tabBarVisible: getTabBarVisibility(route),
          tabBarIcon: ({ tintColor }) => (
            <FeatherIcon name="bell" size={25} color={tintColor} />
          ),
        })}
      />
      <Tab.Screen
        name="ExampleStack"
        options={({ route }) => ({
          title: () => null,
          tabBarVisible: getTabBarVisibility(route),
          tabBarIcon: ({ tintColor }) => (
            <FeatherIcon name="file-text" size={25} color={tintColor} />
          ),
        })}
        component={ExampleStack}
      />
      <Tab.Screen
        name="components"
        component={Components}
        options={({ route }) => ({
          title: () => null,
          tabBarIcon: ({ tintColor }) => (
            <FeatherIcon name="hexagon" size={25} color={tintColor} />
          ),
        })}
      />
    </Tab.Navigator>
  );
};

const HomeStack = Platform.select({
  ios: withTheme(HomeStackIOS),
  android: HomeStackAndroid,
});

export default HomeStack;
