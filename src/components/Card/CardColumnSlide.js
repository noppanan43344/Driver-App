import React from 'react';
import {View, Text, Image, Dimensions} from 'react-native';
import {FONT_MED, FONT_BOLD} from '@components/styles';
import getExcerpt from '@utils/excerpt';

export default function CardColumn(props) {
  const {title, excerpt, image} = props;
  return (
    <View
      style={{
        elevation: 2,
        backgroundColor: '#FFF',
        marginLeft: 10,
        marginTop: 20,
        borderRadius: 15,
        marginBottom: 10,
        width: 250,
        paddingBottom: 15,
        height: 300,
      }}>
      <View style={{padding: 15}}>
        <Image
          style={{
            width: '100%',
            height: Dimensions.get('screen').height / 5,
          }}
          resizeMode="contain"
          source={image}></Image>
      </View>
      <View style={{paddingLeft: 10, paddingRight: 10}}>
        <Text style={{fontFamily: FONT_BOLD}}>{title}</Text>
        <Text
          style={{
            fontFamily: FONT_MED,
            fontWeight: '400',
            fontSize: 12,
            lineHeight: 20,
            marginTop: 5,
          }}>
          {getExcerpt(excerpt, 60)}
        </Text>
      </View>
    </View>
  );
}
