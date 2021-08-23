import React, { useState } from 'react';
import {
    View,
    Image,
    StyleSheet,
    StatusBar,
    ScrollView,
    TextInput,
    Alert,
} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import Icon from 'react-native-vector-icons/FontAwesome';
import { PrimaryButton } from '@components/Button';
import SpinnerDialog from '@components/Spinner/SpinnerDialog';
import I18n from '../../../i18n/i18';
import { FONT_BOLD, FONT_SIZES, COLORS } from '@components/styles';
import loginService from '../../services/loginService';
import axios from 'axios';
import { URL } from '@utils/config';

export default function AuthScreen(props) {
    const [loading, setloading] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const getDeviceInfo = async(driverid)=>{
        let systemName = DeviceInfo.getSystemName();
        let systemVersion = DeviceInfo.getSystemVersion();
        DeviceInfo.getDeviceName().then( async(deviceName) => {
            let payload = {
                device:deviceName +"_" +systemName+"_"+systemVersion,
                driverid:driverid
        }
        console.log(payload);
            const {data} = await axios.post(URL+'driver/setdriverdevice',payload)
          });
    }

    async function login(navigation) {
        setloading(true);
        console.log(username);
        console.log(password);
        // Coding Authentication
        //await loginService.setusername(username)
        let payload = { username: username, password: password };
        let userlogin = await loginService.login(payload);

        if (!username || !password) {
            Alert.alert(
                'กรุณากรอกข้อมูลให้ครบถ้วน',
                'กรุณากรอกอีเมลล์และรหัสผ่านให้ครบถ้วน',
            );
            setloading(false);
        }
        console.log(userlogin);
        if (userlogin) {
            if (userlogin.status == 'ok') {
                await loginService.setusername(userlogin.result.driverId);
                setloading(false);
                getDeviceInfo(userlogin.result.driverId);
                navigation.navigate('HomeDrawer');
            } else {
                Alert.alert(
                    'ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง',
                    'กรุณาตรวจสอบชื่อผู้ใช้หรือรหัสผ่าน',
                );
                setloading(false);
            }
        } else {
            Alert.alert(
                'ไม่สามารถเชื่อมต่อเชิฟเวอร์ได้',
                'กรุณาตรวจสอบเครือข่ายของคุณและลองใหม่อีกครั้ง',
            );
            setloading(false);
        }
    }

    return (
        <>
            {loading ? (
                <SpinnerDialog
                    title={I18n.t('loadinglogin')}
                    excerpt="ตรวจสอบข้อมูล"
                />
            ) : (
                <View></View>
            )}
            <StatusBar backgroundColor={COLORS.PRIMARY} />
            <ScrollView>
                <View style={styles.container}>
                    <Image
                        style={styles.tinyLogo}
                        source={require('@assets/images/logo.png')}
                    />
                    <View style={styles.text}>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                // justifyContent: 'c',
                            }}>
                            <Icon name="user" size={30} color="black" />
                            <TextInput
                                style={styles.textInput}
                                onChangeText={setUsername}
                                value={username}
                                placeholder="Username"
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
                                placeholder="Password"
                            />
                        </View>
                    </View>
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
                            title={I18n.t('login')}
                            onPress={() => login(props.navigation)}
                        />
                    </View>
                </View>
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttons: {
        width: '100%',
        marginTop: 30,
    },
    tinyLogo: {
        height: 230,
        width: 230,
        borderRadius: 20,
        marginBottom: 100,
        marginTop: 50,
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
