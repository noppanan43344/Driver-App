import styles from './style';
import React, {Component} from 'react';
import {Text, View, ActivityIndicator, Image} from 'react-native';
import {firebaseMessengingPermission} from '@utils/Permission';
import registerAppWithFCM from '@services/firebase/registerAppWithFCM';

class LoadingScreen extends Component {
  componentDidMount = async () => {
    await firebaseMessengingPermission();
    setTimeout(() => {
      this.props.navigation.navigate('AuthStack');
    }, 2000);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 22}}>Welcome To Driver App</Text>
      </View>
    );
  }
}

export default LoadingScreen;
