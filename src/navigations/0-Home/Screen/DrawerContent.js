import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItem,
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { FONT_BOLD, FONT_SIZES, COLORS, FONT_MED } from '@components/styles';
// import{ AuthContext } from '../components/context';
const Drawer = createDrawerNavigator();
export function DrawerContent(props) {
    // const paperTheme = useTheme();

    // const { signOut, toggleTheme } = React.useContext(AuthContext);

    return (
        <View style={{ flex: 1 }}>
            <View
                style={{
                    flex: 0.45,
                    backgroundColor: COLORS.APP_COLORS,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 20,
                }}>
                <Image
                    style={styles.tinyLogo}
                    source={require('../../../assets/images/logo.png')}
                />
                <View>
                    <Text style={styles.font}>ยอดเงินคงเหลือ 10.00 บาท</Text>
                </View>
            </View>
            <DrawerContentScrollView {...props}>
                <DrawerItem
                    icon={({ color, size }) => (
                        <Icon name="home" color={color} size={size} />
                    )}
                    label="หน้าหลัก"
                    onPress={() => {
                        props.navigation.navigate('HomeScreen');
                    }}
                />
                <DrawerItem
                    icon={({ color, size }) => (
                        <Icon name="user" color={color} size={size} />
                    )}
                    label="โปรไฟล์"
                    onPress={() => {
                        props.navigation.navigate('ProfileScreen');
                    }}
                />
                <DrawerItem
                    icon={({ color, size }) => (
                        <Icon name="list-ol" color={color} size={size} />
                    )}
                    label="สินค้าที่ต้องไปส่ง"
                    onPress={() => {
                        props.navigation.navigate('JobScreen');
                    }}
                />
                <DrawerItem
                    icon={({ color, size }) => (
                        <Icon name="cc-amazon-pay" color={color} size={size} />
                    )}
                    label="เติมเงิน"
                    onPress={() => {
                        props.navigation.navigate('TopUpScreen');
                    }}
                />

                <DrawerItem
                    icon={({ color, size }) => (
                        <Icon name="sign-out-alt" color={color} size={30} />
                    )}
                    label="ออกจากระบบ"
                    onPress={() => {
                        // props.navigation.navigate('JobScreen');
                    }}
                />
            </DrawerContentScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    font: {
        fontFamily: FONT_BOLD,
        fontSize: FONT_SIZES['500'],
        color: 'white',
        marginTop: 20,
    },
    tinyLogo: {
        height: 100,
        width: 100,
    },
});
