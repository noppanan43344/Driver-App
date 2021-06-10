import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    TextInput,
} from 'react-native';
import { FONT_BOLD, FONT_SIZES, COLORS, FONT_MED } from '@components/styles';
import Icon from 'react-native-vector-icons/FontAwesome';
export default function Profile() {
    const [name, setName] = useState('นพนรรณ์ เลิศนันทพร');
    const [phone, setPhone] = useState('0940342997');
    const [password, setPassword] = useState('**********');
    return (
        <View style={styles.container}>
            <View style={styles.text}>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        // justifyContent: 'c',
                    }}>
                    <Icon name="user-circle-o" size={30} color="black" />
                    <TextInput
                        style={styles.textInput}
                        onChangeText={setName}
                        value={name}
                        placeholder="ชื่อ - สกุล"
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
                    <Icon name="phone" size={30} color="black" />
                    <TextInput
                        style={styles.textInput}
                        onChangeText={setPhone}
                        value={phone}
                        keyboardType="numeric"
                        placeholder="เบอร์โทรศัพท์"
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
                    <Icon name="lock" size={30} color="black" />
                    <TextInput
                        style={styles.textInput}
                        onChangeText={setPassword}
                        value={password}
                        secureTextEntry={true}
                        placeholder="รหัสผ่าน"
                    />
                </View>
            </View>
            <TouchableHighlight
                underlayColor="null"
                onPress={() => console.log('Check In')}>
                <View style={styles.button}>
                    <Text style={styles.font}>บันทึก</Text>
                </View>
            </TouchableHighlight>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: COLORS.APP_COLORS,
        borderRadius: 50,
        width: '100%',
        alignItems: 'center',
        paddingHorizontal: '40%',
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
});
