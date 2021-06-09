import React from 'react';
import { Button } from 'react-native-elements';
import { COLORS, FONT_SIZES, FONT_BOLD } from './styles';

const style = {
    btn: {
        marginBottom: 20,
    },
};

export const BlackButton = (props) => (
    <Button
        titleStyle={{
            fontFamily: FONT_BOLD,
            fontSize: FONT_SIZES['400'],
        }}
        buttonStyle={{ backgroundColor: COLORS.BLACK, ...style.btn }}
        {...props}
    />
);

export const DangerButton = (props) => (
    <Button
        titleStyle={{
            fontFamily: FONT_BOLD,
            fontSize: FONT_SIZES['400'],
        }}
        buttonStyle={{ backgroundColor: COLORS.RED, ...style.btn }}
        {...props}
    />
);

export const SuccessButton = (props) => (
    <Button
        titleStyle={{
            fontFamily: FONT_BOLD,
            fontSize: FONT_SIZES['400'],
        }}
        buttonStyle={{ backgroundColor: COLORS.GREEEN, ...style.btn }}
        {...props}
    />
);

export const InfoButton = (props) => (
    <Button
        titleStyle={{
            fontFamily: FONT_BOLD,
            fontSize: FONT_SIZES['400'],
        }}
        buttonStyle={{ backgroundColor: COLORS.BLUE_SKY, ...style.btn }}
        {...props}
    />
);
export const PerpleButton = (props) => (
    <Button
        titleStyle={{
            fontFamily: FONT_BOLD,
            fontSize: FONT_SIZES['400'],
        }}
        buttonStyle={{ backgroundColor: COLORS.PERPLE, ...style.btn }}
        {...props}
    />
);

export const PrimaryButton = (props) => (
    <Button
        titleStyle={{
            fontFamily: FONT_BOLD,
            fontSize: FONT_SIZES['400'],
        }}
        buttonStyle={{ ...style.btn }}
        {...props}
    />
);
export const CustomButton = (props) => {
    return (
        <Button
            titleStyle={{
                fontFamily: FONT_BOLD,
                fontSize: FONT_SIZES['400'],
            }}
            {...props}
        />
    );
};
