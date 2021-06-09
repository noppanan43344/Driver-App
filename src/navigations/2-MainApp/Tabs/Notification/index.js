import React from 'react';
import {View, Text} from 'react-native';
import Header from '@components/Header';
import Notification from '@components/Card/Notification';

export default function index() {
  return (
    <>
      <Header title="การแจ้งเตือน" />
      <Notification read={false} />
    </>
  );
}
