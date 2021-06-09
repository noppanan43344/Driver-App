import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    TouchableHighlight,
} from 'react-native';
import { FONT_MED, FONT_SIZES, COLORS } from '@components/styles';
export default function CardMenu(props) {
    const { title, nextPath } = props;
    return (
        <View>
            <TouchableHighlight
                underlayColor="white"
                onPress={() => console.log('1')}>
                <View style={styles.box}>
                    <Image
                        style={styles.imageIcon}
                        source={require('../../assets/images/react.jpg')}
                    />
                    <Text style={styles.fontIcon}>{title}</Text>
                </View>
            </TouchableHighlight>
        </View>
    );
}

const styles = StyleSheet.create({
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
        // shadowColor:'#000',
        // shadowOffset:{
        //     width:0,
        //     height:3
        // },
        // shadowOpacity:4.6,
        // shadowRadius:0.3,
        elevation: 7,
    },
    imageIcon: {
        height: 90,
        width: 90,
    },
});
