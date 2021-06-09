import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { FONT_BOLD, FONT_SIZES, COLORS, FONT_MED } from '@components/styles';
export default function TopUpHistory() {
    return (
        <ScrollView>
            <View style={{ marginTop: 10 }}>
                <View style={styles.box}>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            // alignItems: 'center',
                            paddingHorizontal: 20,
                        }}>
                        <View style={{ flex: 0.5, alignItems: 'flex-start' }}>
                            <Text style={styles.fontIcon}>จำนวน</Text>
                            <Text style={styles.fontIcon}>วันที่โอน</Text>
                        </View>
                        <View
                            style={{
                                flex: 0.5,
                                justifyContent: 'center',
                                alignItems: 'flex-end',
                            }}>
                            <View style={styles.status}>
                                <Text style={styles.fontStatus}>สำเร็จ</Text>
                            </View>
                        </View>
                    </View>
                </View>
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
        marginBottom: 5,
    },
    fontIcon: {
        fontFamily: FONT_MED,
        fontSize: FONT_SIZES['400'],
        color: 'black',
    },

    imageIcon: {
        height: 90,
        width: 90,
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
