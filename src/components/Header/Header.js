import React, { useState } from 'react';
import { Header } from 'react-native-elements';
import { Text } from 'react-native';
import { COLORS, FONT_BOLD, FONT_SIZES } from '@components/styles';
import { withTheme } from 'react-native-elements';

function HeaderDefalut(props) {
    const { theme } = props;
    console.log(theme.colors.black);
    return (
        <Header
            {...props}
            placement="left"
            rightComponent={{
                color: '#fff',
            }}
            backgroundColor={
                theme.colors.black == '#f2f2f2'
                    ? theme.colors.white
                    : theme.colors.primary
            }
            statusBarProps={{
                barStyle:
                    theme.colors.black == '#f2f2f2'
                        ? 'light-content'
                        : 'light-content',
            }}
            containerStyle={{
                backgroundColor:
                    theme.colors.black == '#f2f2f2'
                        ? theme.colors.white
                        : theme.colors.primary,
                justifyContent: 'space-around',
            }}
            centerComponent={{
                text: (
                    <Text
                        style={{
                            color: theme.colors.white,
                            fontFamily: FONT_BOLD,
                            fontSize: FONT_SIZES['500'],
                        }}>
                        {props.title}
                    </Text>
                ),
                style: { color: COLORS.WHITE },
            }}
        />
    );
}
export default withTheme(HeaderDefalut);
