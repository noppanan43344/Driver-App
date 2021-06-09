import React, { useState } from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet,
    StatusBar,
    ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { PrimaryButton } from '@components/Button';
import { Input } from 'react-native-elements';
import SpinnerDialog from '@components/Spinner/SpinnerDialog';
import I18n from '../../../i18n/i18';
import { FONT_BOLD, FONT_SIZES, COLORS } from '@components/styles';

export default function AuthScreen(props) {
    const [loading, setloading] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    function login(navigation) {
        setloading(true);
        console.log(username);
        console.log(password);
        // Coding Authentication

        setTimeout(() => {
            setloading(false);
            navigation.navigate('HomeStack');
        }, 0);
    }

    return (
        <>
            {loading ? (
                <SpinnerDialog
                    title={I18n.t('loadinglogin')}
                    excerpt="ตรวจสอบข้อมูล"
                />
            ) : (
                <View></View>
            )}
            <StatusBar backgroundColor={COLORS.PRIMARY} />
            <ScrollView>
                <View style={styles.container}>
                    <Image
                        style={styles.tinyLogo}
                        source={require('../../assets/images/react.jpg')}
                    />
                    <Input
                        placeholder="Username"
                        leftIcon={
                            <Icon
                                name="user"
                                size={24}
                                color="black"
                                style={{ margin: 10 }}
                            />
                        }
                        onChangeText={setUsername}
                        value={username}
                    />
                    <Input
                        placeholder="Password"
                        leftIcon={
                            <Icon
                                name="lock"
                                size={24}
                                color="black"
                                style={{ margin: 10 }}
                            />
                        }
                        onChangeText={setPassword}
                        value={password}
                        secureTextEntry={true}
                    />
                    <View style={styles.buttons}>
                        <PrimaryButton
                            titleStyle={{
                                fontFamily: FONT_BOLD,
                                fontSize: FONT_SIZES['500'],
                            }}
                            buttonStyle={{
                                borderRadius: 60,
                                height: 60,
                                width: '100%',
                            }}
                            title={I18n.t('login')}
                            onPress={() => login(props.navigation)}
                        />
                    </View>
                </View>
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttons: {
        width: '100%',
        marginTop: 50,
    },
    tinyLogo: {
        height: 250,
        width: '100%',
        borderRadius: 20,
        marginBottom: 100,
        marginTop: 50,
    },
});
