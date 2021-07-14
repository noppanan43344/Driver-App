import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
    TouchableHighlight,
    ActivityIndicator,
} from 'react-native';
import { FONT_BOLD, FONT_SIZES, COLORS, FONT_MED } from '@components/styles';
import { Header } from 'react-native-elements';
import Axios from 'axios';
import { URL } from '@utils/config';
import Loading from '@components/Loading/Loading';

export default function index(props) {
    const [driverId, setDriverId] = useState(1);
    const [job, setJob] = useState({});
    const [isLoad, setisLoad] = useState(true);
    useEffect(() => {
        getjob(getDate());
    }, []);

    const getjob = async (date) => {
        const { data } = await Axios.get(
            URL + 'driver/findJob/' + driverId + '/' + date,
        );
        setJob(data);
        setisLoad(false);
    };

    const getDate = () => {
        var today = new Date();
        var date =
            today.getFullYear() +
            '-' +
            (today.getMonth() + 1) +
            '-' +
            today.getDate();
        return date;
    };
    return (
        <View style={styles.container}>
            <Header
                leftComponent={{
                    icon: 'menu',
                    color: '#000',
                    size: 35,
                    onPress: () => props.navigation.openDrawer(),
                }}
                rightComponent={{
                    icon: 'edit',
                    color: '#000',
                    size: 35,
                    onPress: () => props.navigation.navigate('ProfileScreen'),
                }}
                backgroundColor={COLORS.APP_COLORS}
                // elevation={20}
            />
            {isLoad ? (
                <>
                    <>
                        <ActivityIndicator size="small" />
                    </>
                </>
            ) : (
                <>
                    <View style={styles.view}>
                        <View style={{ alignItems: 'center' }}>
                            <Image
                                style={styles.tinyLogo}
                                source={require('@assets/images/logo.png')}
                            />
                        </View>
                        <View style={{ flexDirection: 'row-reverse' }}>
                            <Text style={styles.font}>
                                ยอดคงเหลือ 10.00 บาท
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row-reverse' }}>
                        <Text
                            style={{
                                fontFamily: FONT_BOLD,
                                fontSize: FONT_SIZES['300'],
                                color: 'white',
                                marginTop: -20,
                                marginBottom:20
                            }}>
                            งาน{"รหัส:"+job.result.vehicleJobSessionId+" ของวันที่:"+job.result.dateRoute +" รถ:"+job.result.vehicleId.name}
                        </Text>
                        </View>
                    </View>
                    <View style={styles.menu}>
                        <View style={{ marginTop: 30 }}>
                            <ScrollView>
                                <View
                                    style={{
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                    }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View
                                            style={{
                                                flex: 0.5,
                                                alignItems: 'center',
                                            }}>
                                            <TouchableHighlight
                                                underlayColor="null"
                                                onPress={() =>
                                                    props.navigation.navigate(
                                                        'JobScreen',{jobsessionId:job.result.vehicleJobSessionId}
                                                    )
                                                }>
                                                <View style={styles.box}>
                                                    <Image
                                                        style={styles.imageIcon}
                                                        source={require('@assets/images/quality.png')}
                                                    />
                                                    <Text
                                                        style={styles.fontIcon}>
                                                        สินค้าที่จะส่ง
                                                    </Text>
                                                </View>
                                            </TouchableHighlight>
                                            <TouchableHighlight
                                                underlayColor="null"
                                                onPress={() =>
                                                    props.navigation.navigate(
                                                        'TopUpHistoryScreen',
                                                    )
                                                }>
                                                <View style={styles.box}>
                                                    <Image
                                                        style={styles.imageIcon}
                                                        source={require('@assets/images/clock.png')}
                                                    />
                                                    <Text
                                                        style={styles.fontIcon}>
                                                        ประวัติการโอน
                                                    </Text>
                                                </View>
                                            </TouchableHighlight>
                                        </View>
                                        <View
                                            style={{
                                                flex: 0.5,
                                                alignItems: 'center',
                                            }}>
                                            <TouchableHighlight
                                                underlayColor="null"
                                                onPress={() =>
                                                    props.navigation.navigate(
                                                        'TopUpScreen',
                                                    )
                                                }>
                                                <View style={styles.box}>
                                                    <Image
                                                        style={styles.imageIcon}
                                                        source={require('@assets/images/debit-card.png')}
                                                    />
                                                    <Text
                                                        style={styles.fontIcon}>
                                                        เติมเงิน
                                                    </Text>
                                                </View>
                                            </TouchableHighlight>
                                            <TouchableHighlight
                                                underlayColor="null"
                                                onPress={() =>
                                                    props.navigation.navigate(
                                                        'ReportScreen',
                                                    )
                                                }>
                                                <View style={styles.box}>
                                                    <Image
                                                        style={styles.imageIcon}
                                                        source={require('@assets/images/success.png')}
                                                    />
                                                    <Text
                                                        style={styles.fontIcon}>
                                                        รายงานการส่งสินค้า
                                                    </Text>
                                                </View>
                                            </TouchableHighlight>
                                        </View>
                                    </View>
                                </View>
                            </ScrollView>
                        </View>
                    </View>
                </>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.APP_COLORS,
        width: '100%',
        height: '100%',
    },
    font: {
        fontFamily: FONT_BOLD,
        fontSize: FONT_SIZES['500'],
        color: 'white',
        marginBottom: 20,
    },
    view: {
        paddingHorizontal: 15,
    },
    tinyLogo: {
        height: 220,
        width: 220,
        borderRadius: 20,
        marginTop: 50,
    },
    menu: {
        flex: 1,
        backgroundColor: 'white',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
    },
    fontIcon: {
        marginTop: 10,
        fontFamily: FONT_MED,
        fontSize: FONT_SIZES['400'],
        color: 'black',
    },
    box: {
        backgroundColor: '#FFF',
        borderRadius: 20,
        width: 140,
        height: 140,
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 7,
    },
    imageIcon: {
        height: 80,
        width: 80,
    },
});
