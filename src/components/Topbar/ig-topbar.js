import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {withTheme} from 'react-native-elements';

function igtopbar(props) {
  const {theme} = props;
  const {
    success,
    primary,
    black,
    white,
    warning,
    error,
    divider,
    secondary,
  } = theme.colors;
  const themeBar = {
    success,
    primary,
    black,
    white,
    warning,
    error,
    divider,
    secondary,
  };
  return (
    <View
      style={{
        backgroundColor: props.color ? themeBar[props.color] : themeBar.white,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        height: 50,
        elevation: 5,
      }}>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Text
            style={{
              marginLeft: 10,
              fontSize: 20,
              fontWeight: '600',
              color:
                props.color == 'white'
                  ? theme.colors.black
                  : theme.colors.white,
            }}>
            Facebook
          </Text>
        </View>
        <View
          style={{
            flex: 0.6,
            flexDirection: 'row-reverse',
            justifyContent: 'space-around',
          }}>
          <View style={{justifyContent: 'center'}}>
            <Icon
              name="hearto"
              size={30}
              color={
                props.color == 'white' ? theme.colors.black : theme.colors.white
              }
            />
          </View>
          <View style={{justifyContent: 'center'}}>
            <FeatherIcon
              name="send"
              size={30}
              color={
                props.color == 'white' ? theme.colors.black : theme.colors.white
              }
            />
          </View>
          <View style={{justifyContent: 'center'}}>
            <Icon
              name="home"
              size={30}
              color={
                props.color == 'white' ? theme.colors.black : theme.colors.white
              }
            />
          </View>
        </View>
      </View>
    </View>
  );
}

export default withTheme(igtopbar);
