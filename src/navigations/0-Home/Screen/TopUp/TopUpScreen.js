import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    TouchableHighlight,
} from 'react-native';
import { FONT_BOLD, FONT_SIZES, COLORS, FONT_MED } from '@components/styles';
export default function TopUpScreen(props) {
    return (
        <ScrollView>
            <View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 0.5 }}>
                        <TouchableHighlight
                            underlayColor="null"
                            onPress={() =>
                                props.navigation.navigate('TransferMoneyScreen')
                            }>
                            <View style={styles.box}>
                                <Image
                                    style={styles.imageIcon}
                                    source={require('../../../../assets/images/react.jpg')}
                                />
                                <Text style={styles.fontIcon}>
                                    ธนาคารไทยพาณิช
                                </Text>
                                <Text style={styles.fontIcon}>
                                    409-404XXX-X
                                </Text>
                            </View>
                        </TouchableHighlight>
                        <View style={styles.box}>
                            <Image
                                style={styles.imageIcon}
                                source={require('../../../../assets/images/react.jpg')}
                            />
                            <Text style={styles.fontIcon}>ธนาคารไทยพาณิช</Text>
                            <Text style={styles.fontIcon}>409-404XXX-X</Text>
                        </View>
                    </View>
                    <View style={{ flex: 0.5 }}>
                        <View style={styles.box}>
                            <Image
                                style={styles.imageIcon}
                                source={require('../../../../assets/images/react.jpg')}
                            />
                            <Text style={styles.fontIcon}>ธนาคารไทยพาณิช</Text>
                            <Text style={styles.fontIcon}>409-404XXX-X</Text>
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
        borderRadius: 20,
        width: 160,
        height: 160,
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 7,
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
});
