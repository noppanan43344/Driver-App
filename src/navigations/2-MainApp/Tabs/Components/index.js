import React from 'react';
import {View, Text} from 'react-native';
import Header from '@components/Header';
import {ListItem, Avatar} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
export default function index() {
  const navigation = useNavigation();

  const list = [
    {
      name: 'Top Bar',
      avatar_url:
        'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      route: 'TopbarScreen',
    },
    {
      name: 'Card',
      avatar_url:
        'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      route: 'CardScreen',
    },
    {
      name: 'Calendar',
      avatar_url:
        'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      route: 'CalendarScreen',
    },
  ];

  return (
    <>
      <Header title="ตัวอย่าง Components" />
      <View>
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
