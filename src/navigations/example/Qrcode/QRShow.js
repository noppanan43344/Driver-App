import React from 'react';
import {View, Text} from 'react-native';
import QRCode from 'react-native-qrcode-svg';

export default function QRShow(props) {
  const {code} = props;
  return <QRCode value={code} color="green" size={300} />;
}
