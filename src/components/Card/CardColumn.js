import React from 'react';
import {View, Text, Image, Dimensions} from 'react-native';
import {FONT_MED, FONT_BOLD} from '@components/styles';
import {Avatar, Badge, Icon, withBadge} from 'react-native-elements';

export default function CardColumn(props) {
  const {title, excerpt, image} = props;
  return (
    <View
      style={{
        width: '49%',
        marginTop: 10,
        borderRadius: 10,
        backgroundColor: '#ffffff',
        paddingBottom: 10,
        height: 350,
      }}>
      <View style={{marginTop: 10}}>
        <Badge
          textStyle={{fontFamily: FONT_BOLD}}
          value="ลด 10%"
          status="error"
        />
      </View>
      <View style={{padding: 20}}>
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
            lineHeight: 18,
            marginTop: 5,
          }}>
          {excerpt}
        </Text>
      </View>
    </View>
  );
}
