import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {PrimaryButton} from '@components/Button';
import QRCODE from './QRShow';

export default function index() {
  const [QRcode, setQRcode] = useState();
  useEffect(() => {
    () => {
      setQRcode('amFtZXNpcmljaGFpLmNodWxlZUBnbWFpbC5jb20=');
    };
  }, []);
  return (
    <View style={{alignItems: 'center', marginTop: 20}}>
      <QRCODE code={QRcode} />
      <Text>amFtZXNpcmljaGFpLmNodWxlZUBnbWFpbC5jb20=</Text>
      <View style={{marginTop: 20}}>
        <PrimaryButton title="Reader QR CODE" />
      </View>
    </View>
  );
}
