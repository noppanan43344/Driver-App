import React from 'react';
import {View, StyleSheet, ActivityIndicator, Platform} from 'react-native';

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
        <View>
          <ActivityIndicator
            color="#00CFDE"
            size={Platform.OS === 'ios' ? 'large' : 50}
          />
        </View>
      </View>
      <View style={styles.loading}></View>
    </>
  );
}
