import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableHighlight,
    Alert,
    Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { FONT_BOLD, FONT_SIZES, COLORS, FONT_MED } from '@components/styles';
import Header from '@components/Header';
import BackButton from '@components/Button/BackButton';
export default function ReportScreen(props) {
    return (
        <ScrollView>
            <Header
                title="รายการสินค้าที่ส่งสำเร็จ"
                leftComponent={
                    <BackButton onPress={() => props.navigation.goBack()} />
                }
            />

            <View
                style={{
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                <View style={{ flexDirection: 'row' }}>
                    <View
                        style={{
                            flex: 1,
                            alignItems: 'center',
                        }}>
                        <TouchableHighlight
                            underlayColor="null"
                            onPress={
                                () => {}
                                // props.navigation.navigate('JobScreen')
                            }>
                            <View style={styles.boxs}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Icon
                                        name="truck-moving"
                                        size={40}
                                        color="red"
                                        style={{ marginRight: 15 }}
                                    />
                                    <Text style={styles.fontIcon}>1/20</Text>
                                </View>
                                <Text style={styles.fontRed}>
                                    สินค้าที่ส่งแล้ว
                                </Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            underlayColor="null"
                            onPress={
                                () => {}
                                // props.navigation.navigate('TopUpHistoryScreen')
                            }>
                            <View style={styles.boxs}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Icon
                                        name="clock"
                                        size={40}
                                        color="orange"
                                        style={{ marginRight: 10 }}
                                    />
                                    <Text style={styles.fontIcon}>
                                        1ชั่วโมง 30นาที
                                    </Text>
                                </View>
                                <Text style={styles.fontOrange}>
                                    เวลาเดินทาง
                                </Text>
                            </View>
                        </TouchableHighlight>
                    </View>

                    <View
                        style={{
                            flex: 1,
                            alignItems: 'center',
                        }}>
                        <TouchableHighlight
                            underlayColor="null"
                            onPress={
                                () => {}
                                // props.navigation.navigate('JobScreen')
                            }>
                            <View style={styles.boxs}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Icon
                                        name="route"
                                        size={40}
                                        color="blue"
                                        style={{ marginRight: 10 }}
                                    />
                                    <Text style={styles.fontIcon}>
                                        35 กิโลเมตร
                                    </Text>
                                </View>
                                <Text style={styles.fontBlue}>ระยะทาง</Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            underlayColor="null"
                            onPress={
                                () => {}
                                // props.navigation.navigate('TopUpHistoryScreen')
                            }>
                            <View style={styles.boxs}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Icon
                                        name="dollar-sign"
                                        size={40}
                                        color="green"
                                        style={{ marginRight: 10 }}
                                    />
                                    <Text style={styles.fontIcon}>
                                        120.5 บาท
                                    </Text>
                                </View>
                                <Text style={styles.fontGreen}>จำนวนเงิน</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
            <View style={{ marginTop: 20, paddingHorizontal: 10 }}>
                <TouchableHighlight underlayColor="null" onPress={() => {}}>
                    <View style={styles.box}>
                        <View style={styles.row}>
                            <View style={styles.flexStart}>
                                <Text style={styles.font}>ชื่อ</Text>
                                <Text style={styles.font}>เบอร์</Text>
                                <Text style={styles.font}>สถานะ</Text>
                                <Text style={styles.font}>ที่อยู่</Text>
                            </View>
                            <View style={styles.flexEnd}>
                                <Text style={styles.font}>
                                    นพนรรณ์ เลิศนันทพร
                                </Text>
                                <Text style={styles.font}>0940342997</Text>
                                <Text style={styles.font}>
                                    ยังไม่ได้รับสินค้า
                                </Text>
                                <Text style={styles.font}>
                                    999/99 บ้านขามเรียง กันทรวิชัย มหาสารคาม
                                </Text>
                            </View>
                        </View>
                    </View>
                </TouchableHighlight>
            </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    box: {
        backgroundColor: '#FFF',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
        elevation: 5,
        borderRadius: 10,
    },
    boxs: {
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 15,
        elevation: 5,
        borderRadius: 10,
        marginTop: 15,
        minWidth: '90%',
    },
    font: {
        fontFamily: FONT_MED,
        fontSize: FONT_SIZES['400'],
        color: 'black',
    },
    status: {
        backgroundColor: 'red',
        width: 120,
        alignItems: 'center',
    },
    fontStatus: {
        fontFamily: FONT_MED,
        fontSize: FONT_SIZES['500'],
        color: 'white',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    flexStart: {
        flex: 0.5,
        alignItems: 'flex-start',
        marginVertical: 5,
    },
    flexEnd: { flex: 0.5, alignItems: 'flex-end', marginVertical: 5 },
    imageIcon: {
        height: 80,
        width: 80,
    },
    fontIcon: {
        marginTop: 10,
        fontFamily: FONT_MED,
        fontSize: FONT_SIZES['400'],
        color: 'black',
    },
    fontRed: {
        marginTop: 10,
        fontFamily: FONT_BOLD,
        fontSize: FONT_SIZES['500'],
        color: 'red',
    },
    fontBlue: {
        marginTop: 10,
        fontFamily: FONT_BOLD,
        fontSize: FONT_SIZES['500'],
        color: 'blue',
    },
    fontGreen: {
        marginTop: 10,
        fontFamily: FONT_BOLD,
        fontSize: FONT_SIZES['500'],
        color: 'green',
    },
    fontOrange: {
        marginTop: 10,
        fontFamily: FONT_BOLD,
        fontSize: FONT_SIZES['500'],
        color: 'orange',
    },
});
