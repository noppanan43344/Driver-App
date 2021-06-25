import Header from '@components/Header';
import BackButton from '@components/Button/BackButton';
import React from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
export default function ScanQRScreen(props) {
    // var track = 'ABCD-123-00-TH1';
    let { traking } = props.route.params;
    createTwoButtonAlert = () =>
        Alert.alert(
            'เกิดข้อผิดพลาด',
            'QR Code ไม่ถูกต้อง กรุณาลองใหม่อีกครั้ง',
            [{ text: 'OK', onPress: () => props.navigation.goBack() }],
        );
    const onSuccess = (e) => {
        console.log(e.data);
        if (traking == e.data) {
            props.navigation.navigate('SingUpScreen');
        } else {
            createTwoButtonAlert();
            console.log('error');
        }
    };
    return (
        <>
            <Header
                title="Scan QR Code"
                leftComponent={
                    <BackButton onPress={() => props.navigation.goBack()} />
                }
            />
            <QRCodeScanner
                onRead={onSuccess}
                flashMode={RNCamera.Constants.FlashMode.off}
            />
            <Text>{traking}</Text>
        </>
    );
}
const styles = StyleSheet.create({
    centerText: {
        flex: 1,
        fontSize: 18,
        padding: 32,
        color: '#777',
    },
    textBold: {
        fontWeight: '500',
        color: '#000',
    },
    buttonText: {
        fontSize: 21,
        color: 'rgb(0,122,255)',
    },
    buttonTouchable: {
        padding: 16,
    },
});
