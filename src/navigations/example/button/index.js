import React from 'react';
import {View} from 'react-native';
import {
  SuccessButton,
  InfoButton,
  BlackButton,
  DangerButton,
  PerpleButton,
} from '@components/Button';
import Header from '@components/Header';

export default function index() {
  return (
    <>
      <View style={{padding: 20}}>
        <SuccessButton title="ฉันคือ React" />
        <InfoButton title="Info" />
        <DangerButton title="Danger" />
        <BlackButton title="Black" />
        <PerpleButton title="Perple" />
      </View>
    </>
  );
}
