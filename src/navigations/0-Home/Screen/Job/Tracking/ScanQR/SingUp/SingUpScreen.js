import React, { useState, useRef } from 'react';
import {
    View,
    StyleSheet,
    TouchableHighlight,
    ScrollView,
    Image,
    Text,
} from 'react-native';
import { FONT_BOLD, FONT_SIZES, COLORS, FONT_MED } from '@components/styles';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';
import Header from '@components/Header';
import BackButton from '@components/Button/BackButton';
import { PrimaryButton } from '@components/Button';

export default function SingUpScreen(props) {
    const [response, setResponse] = useState(null);

    return (
        <>
            <Header
                title="ลงชื่อรับสินค้า"
                leftComponent={
                    <BackButton onPress={() => props.navigation.goBack()} />
                }
            />
            <View style={styles.container}>
                <TouchableHighlight
                    // style={{ borderColor: 'red', borderWidth: 2 }}
                    underlayColor="null"
                    onPress={() =>
                        launchCamera(
                            {
                                mediaType: 'photo',
                                includeBase64: false,
                                maxHeight: 1980,
                                maxWidth: 1020,
                            },
                            (response) => {
                                if (response.didCancel) {
                                    console.log('User cancelled image picker');
                                } else if (response.error) {
                                    console.log(
                                        'ImagePicker Error: ',
                                        response.error,
                                    );
                                } else if (response.customButton) {
                                    console.log(
                                        'User tapped custom button: ',
                                        response.customButton,
                                    );
                                    Alert.alert(response.customButton);
                                } else {
                                    console.log(response);
                                    setResponse(response);
                                }
                            },
                        )
                    }>
                    {response != null ? (
                        <Image
                            style={styles.image}
                            source={{ uri: response.assets[0].uri }}
                        />
                    ) : (
                        <Image
                            style={styles.image}
                            source={require('@assets/images/photo.png')}
                        />
                    )}
                </TouchableHighlight>
                <View style={styles.buttons}>
                    <PrimaryButton
                        titleStyle={{
                            fontFamily: FONT_BOLD,
                            fontSize: FONT_SIZES['500'],
                        }}
                        buttonStyle={{
                            borderRadius: 60,
                            height: 60,
                            width: '100%',
                        }}
                        title={'บันทึกข้อมูล'}
                        onPress={
                            () => {}
                            // props.navigation.navigate('SingUpScreen')
                        }
                    />
                </View>
            </View>
        </>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    buttons: {
        width: '100%',
        marginTop: 30,
        paddingHorizontal: 20,
    },

    image: {
        width: 330,
        height: 330,
        borderRadius: 20,
    },
});
