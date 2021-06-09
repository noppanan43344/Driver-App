import React, { useState } from 'react';
import { Text, View, Image } from 'react-native';
import { CustomButton } from '@components/Button';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { FONT_MED, FONT_BOLD } from '@components/styles';

export default function CardListButton(props) {
    const { title, color, icon, titleButton } = props;
    const [textButton, setTextButton] = useState(titleButton);
    return (
        <>
            <View
                style={{
                    backgroundColor: '#fff',
                    height: 70,
                    flexDirection: 'column',
                    marginBottom: 10,
                }}>
                <View style={{ flexDirection: 'row', height: '100%' }}>
                    <View
                        style={{
                            flex: 2,
                            backgroundColor: '#fff',
                            justifyContent: 'center',
                        }}>
                        <View style={{ flexDirection: 'row' }}>
                            <View
                                style={{
                                    flex: 1,
                                    alignItems: 'center',
                                }}>
                                <Text>
                                    <FontAwesome name={icon} size={30} />
                                </Text>
                            </View>
                            <View
                                style={{
                                    flex: 3,
                                }}>
                                <Text
                                    style={{
                                        fontSize: 20,
                                        fontFamily: FONT_MED,
                                    }}>
                                    {props.title}
                                </Text>
                            </View>
                        </View>
                    </View>

                    <View
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                        }}>
                        <View style={{ paddingRight: 10 }}>
                            <CustomButton
                                title={textButton}
                                buttonStyle={{
                                    backgroundColor: color,
                                    marginBottom: 0,
                                }}
                                onPress={() => setTextButton('Done')}
                            />
                        </View>
                    </View>
                </View>
            </View>
        </>
    );
}
