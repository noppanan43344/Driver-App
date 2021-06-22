import Header from '@components/Header';
import BackButton from '@components/Button/BackButton';
import React from 'react';
import {
    View,
    Image,
    StyleSheet,
} from 'react-native';
import { PrimaryButton } from '@components/Button';
import { FONT_BOLD, FONT_SIZES, COLORS } from '@components/styles';
export default function ScanQRScreen(props) {
    return (
        <>
            <Header
                title="สแกน QR Code"
                leftComponent={
                    <BackButton onPress={() => props.navigation.goBack()} />
                }
            />

            <View style={styles.container}>
                <Image
                    style={styles.tinyLogo}
                    source={require('@assets/images/qr-code.png')}
                />
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
                        title={'Scan'}
                        onPress={() =>
                            props.navigation.navigate('SingUpScreen')
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
        paddingHorizontal: 30,
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
