import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
    TouchableHighlight,
} from 'react-native';
import { FONT_BOLD, FONT_SIZES, COLORS, FONT_MED } from '@components/styles';
import CardMenu from '../../components/Card/CardMenu';

export default function index(props) {
    return (
        <View style={styles.container}>
            <View style={styles.view}>
                <Image
                    style={styles.tinyLogo}
                    source={require('../../assets/images/react.jpg')}
                />
                <View style={{ flexDirection: 'row-reverse' }}>
                    <Text style={styles.font}>ยอดคงเหลือ 10.00 บาท</Text>
                </View>
            </View>
            <View style={styles.menu}>
                <View style={{ marginTop: 30 }}>
                    <ScrollView>
                        <View
                            style={{
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ flex: 0.5 }}>
                                    <TouchableHighlight
                                        underlayColor="white"
                                        onPress={() =>
                                            props.navigation.navigate(
                                                'JobScreen',
                                            )
                                        }>
                                        <View style={styles.box}>
                                            <Image
                                                style={styles.imageIcon}
                                                source={require('../../assets/images/react.jpg')}
                                            />
                                            <Text style={styles.fontIcon}>
                                                สินค้าที่จะส่ง
                                            </Text>
                                        </View>
                                    </TouchableHighlight>
                                    <TouchableHighlight
                                        underlayColor="white"
                                        onPress={() =>
                                            props.navigation.navigate(
                                                'TopUpHistoryScreen',
                                            )
                                        }>
                                        <View style={styles.box}>
                                            <Image
                                                style={styles.imageIcon}
                                                source={require('../../assets/images/react.jpg')}
                                            />
                                            <Text style={styles.fontIcon}>
                                                ประวัติการโอน
                                            </Text>
                                        </View>
                                    </TouchableHighlight>
                                </View>
                                <View style={{ flex: 0.5 }}>
                                    <TouchableHighlight
                                        underlayColor="white"
                                        onPress={() =>
                                            props.navigation.navigate(
                                                'TopUpScreen',
                                            )
                                        }>
                                        <View style={styles.box}>
                                            <Image
                                                style={styles.imageIcon}
                                                source={require('../../assets/images/react.jpg')}
                                            />
                                            <Text style={styles.fontIcon}>
                                                เติมเงิน
                                            </Text>
                                        </View>
                                    </TouchableHighlight>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.APP_COLORS,
        width: '100%',
        height: '100%',
    },
    font: {
        fontFamily: FONT_BOLD,
        fontSize: FONT_SIZES['500'],
        color: 'white',
        marginBottom: 20,
    },
    view: {
        paddingHorizontal: 30,
    },
    tinyLogo: {
        height: 220,
        width: '100%',
        borderRadius: 20,
        marginTop: 50,
    },
    menu: {
        flex: 1,
        backgroundColor: 'white',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
    },
    fontIcon: {
        marginTop: 10,
        fontFamily: FONT_MED,
        fontSize: FONT_SIZES['500'],
        color: 'black',
    },
    box: {
        backgroundColor: '#FFF',
        borderRadius: 20,
        width: 160,
        height: 160,
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 7,
    },
    imageIcon: {
        height: 90,
        width: 90,
    },
});
