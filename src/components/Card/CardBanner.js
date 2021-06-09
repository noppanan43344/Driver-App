import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { FONT_MED, FONT_SIZES, COLORS } from '@components/styles';

export default function CardBanner(props) {
    const { imageUri, title, rightTitle, subTitle } = props;
    return (
        <>
            <TouchableOpacity {...props} style={styles.container}>
                {imageUri ? (
                    <Image
                        style={styles.banner}
                        source={{
                            uri: imageUri,
                        }}
                    />
                ) : (
                    <Image
                        style={styles.banner}
                        source={require('../../assets/images/product/Tesla-Model-S.jpg')}
                    />
                )}

                <View style={styles.content}>
                    <View style={styles.textRow}>
                        <Text
                            style={{
                                fontFamily: FONT_MED,
                                fontSize: FONT_SIZES['400'],
                                color: 'black',
                            }}>
                            {title ? title : 'title'}
                        </Text>
                        <Text
                            style={{
                                fontFamily: FONT_MED,
                                fontSize: FONT_SIZES['300'],
                                color: 'black',
                            }}>
                            {rightTitle ? rightTitle : 'rightTitle'}
                        </Text>
                    </View>

                    <Text
                        style={{
                            fontFamily: FONT_MED,
                            fontSize: FONT_SIZES['300'],
                            color: COLORS.Gray2,
                        }}>
                        {subTitle ? subTitle : 'subTitle'}
                    </Text>
                </View>
            </TouchableOpacity>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 10,
    },
    banner: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        zIndex: 999,
    },
    content: {
        backgroundColor: 'white',
        paddingVertical: 20,
        paddingHorizontal: 10,
        marginTop: -10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    textRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});
