import React from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './styles';

export const Slide = (props) => {
  const {image} = props;

  return (
    <View style={styles.slide}>
      <Image style={{width: '100%', height: 300}} source={image} />
    </View>
  );
};

export default Slide;
