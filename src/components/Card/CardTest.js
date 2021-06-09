import React from 'react';
import {View, Text} from 'react-native';

export default function CardTest(props) {
  return (
    <View>
      <Text>{props.title}</Text>
      <Text>body</Text>
    </View>
  );
}
