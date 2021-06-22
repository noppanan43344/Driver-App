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
import Signature from 'react-native-signature-canvas';
export default function SingUpScreen(props) {
    const [response, setResponse] = useState(null);
    const [signature, setSign] = useState(null);
    const handleSignature = (signature) => {
        console.log(signature);
        // console.log(response.assets[0].uri);
        setSign(signature);
    };

    const handleEmpty = () => {
        console.log('Empty');
    };

    const style = `.m-signature-pad--footer
      .button {
        color: #FFF;
      }`;
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
                {/* <View style={{ height: 355, width: '100%', marginTop: 20 }}>
                    <Signature
                        onOK={handleSignature}
                        onEmpty={handleEmpty}
                        descriptionText=""
                        clearText="Clear"
                        confirmText="Save"
                    />
                </View> */}

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
                        onPress={() =>{}
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
    font: {
        fontFamily: FONT_BOLD,
        fontSize: FONT_SIZES['500'],
        color: 'white',
        paddingVertical: 10,
    },
    image: {
        width: 330,
        height: 330,
        borderRadius: 20,
    },
    singUp: {
        width: 230,
        height: 230,
        borderWidth: 2,
        marginBottom: 30,
    },
    preview: {
        width: 335,
        height: 114,
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
    },
    previewText: {
        color: '#FFF',
        fontSize: 14,
        height: 40,
        lineHeight: 40,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: '#69B2FF',
        width: 120,
        textAlign: 'center',
        marginTop: 10,
    },
});
