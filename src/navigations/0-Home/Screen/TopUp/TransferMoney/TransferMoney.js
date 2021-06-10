import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    TextInput,
    ScrollView,
    Image,
} from 'react-native';
import { FONT_BOLD, FONT_SIZES, COLORS, FONT_MED } from '@components/styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ImagePicker, launchImageLibrary } from 'react-native-image-picker';
export default function TransferMoney(props) {
    const [money, setMoney] = useState('');
    const [date, setDate] = useState('');
    const [bank, setBank] = useState('');
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
                                // console.log(response.assets[0].uri);
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
                            source={require('../../../../../assets/images/photo.png')}
                        />
                    )}
                </TouchableHighlight>
                <View style={styles.text}>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            // justifyContent: 'c',
                        }}>
                        <Icon name="money" size={30} color="black" />
                        <TextInput
                            style={styles.textInput}
                            onChangeText={setBank}
                            value={bank}
                            placeholder="โอนจากธนาคาร"
                        />
                    </View>
                </View>
                <View style={styles.text}>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            // justifyContent: 'c',
                        }}>
                        <Icon name="money" size={30} color="black" />
                        <TextInput
                            style={styles.textInput}
                            onChangeText={setDate}
                            value={date}
                            placeholder="โอนวันที่"
                        />
                    </View>
                </View>
                <View style={styles.text}>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            // justifyContent: 'c',
                        }}>
                        <Icon name="money" size={30} color="black" />
                        <TextInput
                            style={styles.textInput}
                            onChangeText={setMoney}
                            value={money}
                            keyboardType="numeric"
                            placeholder="จำนวนเงิน"
                        />
                    </View>
                </View>
                <TouchableHighlight
                    underlayColor="null"
                    onPress={() => console.log('Check In')}>
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
        marginTop: 30,
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
    text: {
        backgroundColor: COLORS.TEXTFILED,
        borderRadius: 50,
        width: '100%',
        paddingLeft: 20,
        marginBottom: 20,
    },
    textInput: {
        fontFamily: FONT_BOLD,
        fontSize: FONT_SIZES['500'],
        color: 'black',
        borderBottomWidth: 0,
        paddingHorizontal: 15,
        width: '80%',
        height: 55,
        // justifyContent: 'center',
    },
    image: {
        width: 250,
        height: 250,
        borderRadius: 20,
        marginBottom: 30,
    },
});
