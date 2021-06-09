import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { FONT_BOLD, FONT_SIZES, COLORS, FONT_MED } from '@components/styles';
import { Button } from '@components/Button';
export default function TransferMoney() {
    return (
        <View style={styles.container}>
            <TouchableHighlight
                underlayColor="null"
                onPress={() => console.log('Check In')}>
                <View style={styles.button}>
                    <Text style={styles.font}>ยืนยันการโอน</Text>
                </View>
            </TouchableHighlight>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'green',
    },
    button: {
        backgroundColor: COLORS.APP_COLORS,
        borderRadius: 50,
        width: '100%',
        alignItems: 'center',
    },
    font: {
        fontFamily: FONT_BOLD,
        fontSize: FONT_SIZES['500'],
        color: 'white',
        paddingVertical: 10,
    },
});
