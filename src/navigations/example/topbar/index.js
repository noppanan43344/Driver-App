import React from 'react';
import {View, Text} from 'react-native';
import IgTopbar from '@components/Topbar/ig-topbar';
import {withTheme} from 'react-native-elements';

function index(props) {
  const {theme} = props;

  return (
    <>
      <View
        style={{
          backgroundColor: theme.colors.white,
          flex: 1,
        }}>
        <IgTopbar color="white" />
        <IgTopbar color="black" />
        <IgTopbar color="primary" />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 10,
          }}>
          <Text>success</Text>
          <Text>error</Text>
          <Text>secondary</Text>
          <Text>warning</Text>
          <Text>divider</Text>
        </View>
      </View>
    </>
  );
}

export default withTheme(index);
