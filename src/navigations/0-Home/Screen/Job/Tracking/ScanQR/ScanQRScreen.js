import Header from '@components/Header';
import BackButton from '@components/Button/BackButton';
import React from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import Axios from 'axios';
import { URL } from '@utils/config';
export default function ScanQRScreen(props) {
    // var track = 'ABCD-123-00-TH1';
    let { orderNumber, orderid } = props.route.params;
    const errorAlert = () =>{
        Alert.alert(
            'เกิดข้อผิดพลาด',
            'QR Code ไม่ถูกต้อง',
            [{ text: 'OK', onPress: () => props.navigation.goBack() }],
        );
    }
    const updateStatusOrder = async(qrId) =>{
        const { data } = await Axios.post(URL + 'driver/comfirm',{orderId:orderid,orderNumber:qrId});
        console.log(data);
    }
    const successAlert = () =>{   
        Alert.alert(
            'สำเร็จ',
            'รหัสสินค้าถูกต้อง',
            [{text: 'OK'}],
              {cancelable: false},
        );
    }
    const onSuccess = (e) => {
        console.log("orderid"+orderid+"orderNumber"+orderNumber);
        console.log(e.data);
        if (orderNumber == e.data) {
            successAlert()
            updateStatusOrder(e.data)
            //props.navigation.goBack()
            props.navigation.navigate('SingUpScreen');
        } else {
            errorAlert();
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
            <Text>orderNumber {orderNumber+"orderid"+orderid}</Text>
            <QRCodeScanner
                onRead={onSuccess}
                flashMode={RNCamera.Constants.FlashMode.off}
            />
            
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
