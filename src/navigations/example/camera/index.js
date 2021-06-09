import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Header from '@components/Header';
import {DangerButton, SuccessButton} from '@components/Button';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

export default function index() {
  const [response, setResponse] = React.useState(null);

  return (
    <>
      <View style={{padding: 20}}>
        <DangerButton
          title="Take image"
          style={{marginBottom: 10}}
          onPress={() =>
            launchCamera(
              {
                mediaType: 'photo',
                includeBase64: false,
                maxHeight: 200,
                maxWidth: 200,
              },
              (response) => {
                setResponse(response);
              },
            )
          }
        />

        <SuccessButton
          title="Select image"
          onPress={() =>
            launchImageLibrary(
              {
                mediaType: 'photo',
                includeBase64: false,
                maxHeight: 200,
                maxWidth: 200,
              },
              (response) => {
                setResponse(response);
              },
            )
          }
        />
        <View style={styles.response}>
          <Text>Res: {JSON.stringify(response)}</Text>
        </View>
        {response && (
          <View style={styles.image}>
            <Image
              style={{width: 200, height: 200}}
              source={{uri: response.uri}}
            />
          </View>
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    marginVertical: 24,
    alignItems: 'center',
  },
  response: {
    marginVertical: 16,
    marginHorizontal: 8,
  },
});
