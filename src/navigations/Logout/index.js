import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export default class index extends Component {
  componentDidMount = () => {
    setTimeout(() => {
      this.props.navigation.navigate('AuthStack');
    }, 0);
  };
  render() {
    return (
      <SafeAreaView>
        <Text> Logout </Text>
      </SafeAreaView>
    );
  }
}
