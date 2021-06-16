import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

export default function BackButton(props) {
    return (
        <>
            <TouchableOpacity {...props}>
                <Icon name="chevron-left" type="feather" color="white"  size={33}/>
            </TouchableOpacity>
        </>
    );
}
