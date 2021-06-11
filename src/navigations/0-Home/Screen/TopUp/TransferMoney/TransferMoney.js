import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    TextInput,
    ScrollView,
    Image,
    Platform,
} from 'react-native';
import { FONT_BOLD, FONT_SIZES, COLORS, FONT_MED } from '@components/styles';
import { Picker } from '@react-native-community/picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import { launchImageLibrary } from 'react-native-image-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import Moment from 'moment';
export default function TransferMoney(props) {
    const [money, setMoney] = useState('');
    const [bank, setBank] = useState('');
    const [response, setResponse] = useState(null);
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [time, setTime] = useState('วันที่โอน');
    const [selectedValue, setSelectedValue] = useState('โอนจากธนาคาร');
    const onChange = (event, selectedDate) => {
        Moment.locale('th');
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
        if (event['type'] == 'set') {
            setTime(Moment(currentDate).format('DD-MM-YYYY'));
        }
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

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
                        <Icon name="university" size={30} color="black" />
                        <Picker
                            selectedValue={selectedValue}
                            style={{
                                height: 55,
                                width: 300,
                                fontSize: 50,
                                color: 'COLORS.Gray1',
                                fontFamily: FONT_BOLD,
                                fontSize: FONT_SIZES['600'],
                            }}
                            onValueChange={(itemValue, itemIndex) =>
                                setSelectedValue(itemValue)
                            }>
                            <Picker.Item label="โอนจากธนาคาร" value="1" />
                            <Picker.Item label="ธนาคารไทยพาณิช" value="2" />
                            <Picker.Item label="ธนาคารกรุงศรี" value="3" />
                            <Picker.Item label="ธนาคารกสิกร" value="4" />
                            <Picker.Item label="ธนาคารออมสิน" value="5" />
                        </Picker>
                    </View>
                </View>
                <View style={styles.text}>
                    <TouchableHighlight
                        underlayColor="null"
                        onPress={showDatepicker}>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                height: 55,
                            }}>
                            <Icon name="calendar" size={30} color="black" />
                            <Text style={styles.fontInput}>{time}</Text>
                            {show && (
                                <DateTimePicker
                                    testID="dateTimePicker"
                                    value={date}
                                    // mode={mode}
                                    // is24Hour={true}
                                    // display="default"
                                    onChange={onChange}
                                />
                            )}
                        </View>
                    </TouchableHighlight>
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
    },
    fontInput: {
        fontFamily: FONT_BOLD,
        fontSize: FONT_SIZES['500'],
        color: COLORS.Gray1,
        borderBottomWidth: 0,
        paddingHorizontal: 15,
        width: '80%',
        height: 55,
        marginTop: 20,
    },
    image: {
        width: 250,
        height: 250,
        borderRadius: 20,
        marginBottom: 30,
    },
});
