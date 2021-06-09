import React from 'react';
import {View} from 'react-native';
import Header from '../../../components/Header';
import {ListItem, Avatar} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {withTheme} from 'react-native-elements';

const list = [
  {
    name: 'Marker',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    route: 'MapMarker',
  },
  {
    name: 'Polygon',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    route: 'MapPolygon',
  },
  {
    name: 'PolyLine',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    route: 'MapMarker',
  },
  {
    name: 'Tracking',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    route: 'Tracking',
  },
];

function index(props) {
  const navigation = useNavigation();
  const {theme} = props;
  return (
    <>
      <View
        style={{
          backgroundColor: theme.colors.white,
          flex: 1,
        }}>
        {list.map((l, i) => (
          <ListItem
            key={i}
            bottomDivider
            onPress={() => navigation.navigate(l.route)}>
            <Avatar source={{uri: l.avatar_url}} />
            <ListItem.Content>
              <ListItem.Title>{l.name}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        ))}
      </View>
    </>
  );
}
export default withTheme(index);
