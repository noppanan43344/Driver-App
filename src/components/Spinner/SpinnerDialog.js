import React from 'react';
import {
  View,
  StyleSheet,
  ActivityIndicator,
  Text,
  Dimensions,
} from 'react-native';
import {COLORS} from '../styles';
const styles = StyleSheet.create({
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 999,
    opacity: 0.4,
    backgroundColor: '#222',
  },
  layoutloading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999,
  },
});

export default function Spinner(props) {
  return (
    <>
      <View style={styles.layoutloading}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            backgroundColor: '#ffffff',
            height: 100,
            width: Dimensions.get('window').width / 1.5,
            zIndex: 9999,
            borderRadius: 10,
          }}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <View style={{flex: 1}}>
              <ActivityIndicator size="large" color={COLORS.PRIMARY} />
            </View>
            <View style={{flex: 3}}>
              <Text
                style={{
                  marginLeft: 15,
                  color: '#222',
                  fontSize: 18,
                  fontWeight: '600',
                  fontFamily: 'IBMPlexSansThai-Bold',
                }}>
                {props.title ? props.title : 'กำลังโหลด .....'}
              </Text>
              {props.excerpt ? (
                <Text
                  style={{
                    fontSize: 12,
                    marginLeft: 15,
                    fontFamily: 'IBMPlexSansThai-Medium',
                  }}>
                  {props.excerpt}
                </Text>
              ) : (
                <View></View>
              )}
            </View>
          </View>
        </View>
      </View>
      <View style={styles.loading}></View>
    </>
  );
}
