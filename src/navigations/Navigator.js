import {createSwitchNavigator} from '@react-navigation/compat';
import LoadingScreen from '@components/Loading';
import AuthStack from './1-Auth/AuthStack';
import HomeStack from './0-Home/HomeStack';
const RootSwitch = createSwitchNavigator({
  LoadingScreen,
  AuthStack,
  HomeStack
});

export default RootSwitch;
