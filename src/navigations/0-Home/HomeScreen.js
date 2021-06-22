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
import { Header } from 'react-native-elements';

export default function index(props) {
    return (
        <View style={styles.container}>
            <Header
                leftComponent={{
                    icon: 'menu',
                    color: '#000',
                    size: 35,
                    onPress: () => props.navigation.openDrawer(),
                }}
                rightComponent={{
                    icon: 'edit',
                    color: '#000',
                    size: 35,
                    onPress: () => props.navigation.navigate('ProfileScreen'),
                }}
                backgroundColor={COLORS.APP_COLORS}
                // elevation={20}
            />
            <View style={styles.view}>
                <View style={{ alignItems: 'center' }}>
                    <Image
                        style={styles.tinyLogo}
                        source={require('@assets/images/logo.png')}
                    />
                </View>
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
                                <View
                                    style={{
                                        flex: 0.5,
                                        alignItems: 'center',
                                    }}>
                                    <TouchableHighlight
                                        underlayColor="null"
                                        onPress={() =>
                                            props.navigation.navigate(
                                                'JobScreen',
                                            )
                                        }>
                                        <View style={styles.box}>
                                            <Image
                                                style={styles.imageIcon}
                                                source={require('@assets/images/quality.png')}
                                            />
                                            <Text style={styles.fontIcon}>
                                                สินค้าที่จะส่ง
                                            </Text>
                                        </View>
                                    </TouchableHighlight>
                                    <TouchableHighlight
                                        underlayColor="null"
                                        onPress={() =>
                                            props.navigation.navigate(
                                                'TopUpHistoryScreen',
                                            )
                                        }>
                                        <View style={styles.box}>
                                            <Image
                                                style={styles.imageIcon}
                                                source={require('@assets/images/clock.png')}
                                            />
                                            <Text style={styles.fontIcon}>
                                                ประวัติการโอน
                                            </Text>
                                        </View>
                                    </TouchableHighlight>
                                </View>
                                <View
                                    style={{
                                        flex: 0.5,
                                        alignItems: 'center',
                                    }}>
                                    <TouchableHighlight
                                        underlayColor="null"
                                        onPress={() =>
                                            props.navigation.navigate(
                                                'TopUpScreen',
                                            )
                                        }>
                                        <View style={styles.box}>
                                            <Image
                                                style={styles.imageIcon}
                                                source={require('@assets/images/debit-card.png')}
                                            />
                                            <Text style={styles.fontIcon}>
                                                เติมเงิน
                                            </Text>
                                        </View>
                                    </TouchableHighlight>
                                    <TouchableHighlight
                                        underlayColor="null"
                                        onPress={() =>
                                            props.navigation.navigate(
                                                'ReportScreen',
                                            )
                                        }>
                                        <View style={styles.box}>
                                            <Image
                                                style={styles.imageIcon}
                                                source={require('@assets/images/success.png')}
                                            />
                                            <Text style={styles.fontIcon}>
                                                รายงานการส่งสินค้า
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
        paddingHorizontal: 15,
    },
    tinyLogo: {
        height: 220,
        width: 220,
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
        fontSize: FONT_SIZES['400'],
        color: 'black',
    },
    box: {
        backgroundColor: '#FFF',
        borderRadius: 20,
        width: 140,
        height: 140,
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 7,
    },
    imageIcon: {
        height: 80,
        width: 80,
    },
});
