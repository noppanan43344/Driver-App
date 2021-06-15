import React, { useState, useRef } from 'react';
import {
    View,
    StyleSheet,
    TouchableHighlight,
    ScrollView,
    Image,
} from 'react-native';
import { FONT_BOLD, FONT_SIZES, COLORS, FONT_MED } from '@components/styles';
import { launchImageLibrary } from 'react-native-image-picker';
import Signature from 'react-native-signature-canvas';
export default function SingUpScreen({ onOK }) {
    const [response, setResponse] = useState(null);
    const [signature, setSign] = useState(null);
    const handleSignature = (signature) => {
        console.log(signature);
        console.log(response.assets[0].uri);
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
        <ScrollView>
            <View style={styles.container}>
                <TouchableHighlight
                    underlayColor="null"
                    onPress={() =>
                        launchImageLibrary(
                            {
                                mediaType: 'photo',
                                includeBase64: false,
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
                                    setResponse(response);
                                }
                            },
                        )
                    }>
                    {response ? (
                        <Image
                            style={styles.image}
                            source={{ uri: response.assets[0].uri }}
                        />
                    ) : (
                        <Image
                            style={styles.image}
                            source={require('../../../../../../assets/images/photo.png')}
                        />
                    )}
                </TouchableHighlight>
                <View style={{ height: 360, width: '100%', marginTop: 20 }}>
                    <Signature
                        onOK={handleSignature}
                        onEmpty={handleEmpty}
                        descriptionText=""
                        clearText="Clear"
                        confirmText="Save"
                    />
                </View>
                {/* <TouchableHighlight
                underlayColor="null"
                onPress={() => {
                    console.log('X');
                    console.log(signature);
                    // console.log(response.assets[0].uri);
                    // console.log(selectedValue);
                    // console.log(time);
                    // console.log(money);
                }}>
               
            </TouchableHighlight> */}
            </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
    },
    button: {
        backgroundColor: COLORS.APP_COLORS,
        borderRadius: 50,
        width: '100%',
        alignItems: 'center',
        paddingHorizontal: '30%',
        marginTop: 20,
    },
    font: {
        fontFamily: FONT_BOLD,
        fontSize: FONT_SIZES['500'],
        color: 'white',
        paddingVertical: 10,
    },
    image: {
        width: 220,
        height: 220,
        borderRadius: 20,
    },
    singUp: {
        width: 220,
        height: 220,
        borderWidth: 2,
        // borderRadius: 20,
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
