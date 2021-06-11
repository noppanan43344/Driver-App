import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    ScrollView,
    Image,
} from 'react-native';
import { FONT_BOLD, FONT_SIZES, COLORS, FONT_MED } from '@components/styles';
import { launchImageLibrary } from 'react-native-image-picker';
export default function SingUpScreen(props) {
    const [response, setResponse] = useState(null);
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

                <View style={styles.singUp}></View>
                <TouchableHighlight
                    underlayColor="null"
                    onPress={() => {
                        console.log(response.assets[0].uri);
                        console.log(selectedValue);
                        console.log(time);
                        console.log(money);
                    }}>
                    <View style={styles.button}>
                        <Text style={styles.font}>ยืนยันการโอน</Text>
                    </View>
                </TouchableHighlight>
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
        marginTop: 20,
    },
    button: {
        backgroundColor: COLORS.APP_COLORS,
        borderRadius: 50,
        width: '100%',
        alignItems: 'center',
        paddingHorizontal: '30%',
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
        marginBottom: 30,
    },
    singUp: {
        width: 220,
        height: 220,
        borderWidth: 2,
        borderRadius: 20,
        marginBottom: 30,
    },
});
