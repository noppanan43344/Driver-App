import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableHighlight,
} from 'react-native';
import { FONT_BOLD, FONT_SIZES, COLORS, FONT_MED } from '@components/styles';
export default function JobScreen(props) {
    return (
        <ScrollView>
            <View style={{ marginTop: 20, paddingHorizontal: 15 }}>
                <TouchableHighlight
                    underlayColor="null"
                    onPress={() => console.log('1')}>
                    <View style={styles.box}>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                // alignItems: 'center',
                                paddingHorizontal: 20,
                            }}>
                            <View
                                style={{
                                    flex: 0.5,
                                    alignItems: 'flex-start',
                                    marginVertical: 5,
                                }}>
                                <Text style={styles.font}>ชื่อ</Text>
                                <Text style={styles.font}>เบอร์</Text>
                                <Text style={styles.font}>สถานะ</Text>
                                <Text style={styles.font}>ที่อยู่</Text>
                            </View>
                            <View
                                style={{
                                    flex: 0.5,
                                    alignItems: 'flex-end',
                                    marginVertical: 5,
                                }}>
                                <Text style={styles.font}>
                                    นพนรรณ์ เลิศนันทพร
                                </Text>
                                <Text style={styles.font}>0940342997</Text>
                                <Text style={styles.font}>
                                    ยังไม่ได้รับสินค้า
                                </Text>
                                <Text style={styles.font}>
                                    999/99 บ้านขามเรียง กันทรวิชัย มหาสาารคาม
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
});
