import React from 'react';
import {
    View,
    Text,
    ScrollView,
    TouchableHighlight,
    StyleSheet,
} from 'react-native';
import { FONT_BOLD, FONT_SIZES, COLORS, FONT_MED } from '@components/styles';
export default function TrakingScreen() {
    return (
        <View style={{ flex: 1, flexDirection: 'column' }}>
            <View style={{ flex: 0.65, backgroundColor: 'red' }}>
                <Text>1</Text>
            </View>

            <View style={{ flex: 0.35 }}>
                <ScrollView>
                    <View style={{ marginTop: 20, paddingHorizontal: 15 }}>
                        <TouchableHighlight
                            underlayColor="null"
                            onPress={() => console.log('1')}>
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
                                        <Text style={styles.font}>
                                            0940342997
                                        </Text>
                                        <Text style={styles.font}>
                                            ยังไม่ได้รับสินค้า
                                        </Text>
                                        <Text style={styles.font}>
                                            999/99 บ้านขามเรียง กันทรวิชัย
                                            มหาสารคาม
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            underlayColor="null"
                            onPress={() => console.log('2')}>
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
                                        <Text style={styles.font}>
                                            0940342997
                                        </Text>
                                        <Text style={styles.font}>
                                            ยังไม่ได้รับสินค้า
                                        </Text>
                                        <Text style={styles.font}>
                                            999/99 บ้านขามเรียง กันทรวิชัย
                                            มหาสารคาม
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            underlayColor="null"
                            onPress={() => console.log('3')}>
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
                                        <Text style={styles.font}>
                                            0940342997
                                        </Text>
                                        <Text style={styles.font}>
                                            ยังไม่ได้รับสินค้า
                                        </Text>
                                        <Text style={styles.font}>
                                            999/99 โรงเรียนอนุกูลนารี ตำบลเมือง
                                            อำเภอเมือง จังหวัดกาฬสินธุ์ 46000
                                            Tol.043-227-499
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            underlayColor="null"
                            onPress={() => console.log('4')}>
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
                                        <Text style={styles.font}>
                                            0940342997
                                        </Text>
                                        <Text style={styles.font}>
                                            ยังไม่ได้รับสินค้า
                                        </Text>
                                        <Text style={styles.font}>
                                            โรงเรียนบ้านหนองตอกแป้น
                                            ตำบลหนองตอกแป้น อำเภอยางตลาด
                                            จังหวัดกาฬสินธุ์ 46120
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableHighlight>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    box: {
        backgroundColor: '#FFF',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
        elevation: 5,
        borderRadius: 10,
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
        // alignItems: 'center',
        paddingHorizontal: 20,
    },
    flexStart: {
        flex: 0.5,
        alignItems: 'flex-start',
        marginVertical: 5,
    },
    flexEnd: { flex: 0.5, alignItems: 'flex-end', marginVertical: 5 },
});
