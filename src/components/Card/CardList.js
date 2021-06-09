import React from 'react';
import {View, Text, Image} from 'react-native';
import {FONT_MED, FONT_BOLD} from '@components/styles';

export default function CardList(props) {
  const {title, excerpt, price, image} = props;
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        paddingTop: 20,
        paddingRight: 30,
        paddingBottom: 5,
      }}>
      <View style={{flex: 1}}>
        <Image
          style={{width: '100%', height: '100%', flex: 1}}
          resizeMode="contain"
          source={image}
        />
      </View>
      <View style={{flex: 2.5, marginLeft: 10}}>
        <Text style={{fontWeight: '600', fontSize: 16, fontFamily: FONT_BOLD}}>
          {title}
        </Text>
        <Text
          style={{
            marginTop: 10,
            fontSize: 12,
            lineHeight: 20,
            fontFamily: FONT_MED,
          }}>
          {excerpt}
        </Text>
        <Text
          style={{
            marginTop: 5,
            fontSize: 16,
            fontFamily: FONT_MED,
          }}>
          {price}
        </Text>
      </View>
    </View>
  );
}
