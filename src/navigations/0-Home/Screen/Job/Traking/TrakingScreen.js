import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    ScrollView,
    TouchableHighlight,
    StyleSheet,
    Dimensions,
} from 'react-native';
import { FONT_BOLD, FONT_SIZES, COLORS, FONT_MED } from '@components/styles';
import Header from '@components/Header';
import BackButton from '@components/Button/BackButton';
import MapView, { Polyline, Marker } from 'react-native-maps';
import GetLocation from 'react-native-get-location';
import Loading from '@components/Loading/Loading';

export default function TrakingScreen(props) {
    const [lat, setLat] = useState(0);
    const [long, setLong] = useState(0);
    useEffect(() => {
        LatLong();
    }, []);
    const [loading, setLoading] = useState(true);
    var x = [1, 2, 3, 4, 5, 6, 7];
    const LatLong = async () => {
        await GetLocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 15000,
        })
            .then((location) => {
                setLat(location['latitude']);
                setLong(location['longitude']);
                setLoading(false);
            })
            .catch((error) => {
                const { code, message } = error;
                console.warn(code, message);
            });
    };
    return (
        <>
            <Header
                title="เส้นทาง"
                leftComponent={
                    <BackButton onPress={() => props.navigation.goBack()} />
                }
            />
            {loading ? (
                <>
                    <Loading />
                </>
            ) : (
                <>
                    <View style={{ marginVertical: 2 }}>
                        <ScrollView>
                            <View
                                style={{
                                    marginTop: 5,
                                    paddingHorizontal: 10,
                                }}>
                                <View style={styles.box}>
                                    <View style={styles.row}>
                                        <View style={styles.flexStart}>
                                            <Text style={styles.font}>
                                                สินค้าที่ส่ง (จำนวน)
                                            </Text>
                                            <Text style={styles.font}>
                                                ระยะทาง (กิโลเมตร)
                                            </Text>
                                            <Text style={styles.font}>
                                                เวลาที่ใช้ (ชั่วโมง)
                                            </Text>
                                            <Text style={styles.font}>
                                                จำนวนเงิน (บาท)
                                            </Text>
                                        </View>
                                        <View style={styles.flexEnd}>
                                            <Text style={styles.font}>
                                                3 / 24 / 3
                                            </Text>
                                            <Text style={styles.font}>
                                                13 / 130 / 13
                                            </Text>
                                            <Text style={styles.font}>
                                                0.30 / 6.30 / 0.30
                                            </Text>
                                            <Text style={styles.font}>
                                                30.50 / 325 / 30.50
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                    <View style={styles.container}>
                        <MapView
                            style={styles.map}
                            initialRegion={{
                                latitude: lat,
                                longitude: long,
                                latitudeDelta: 0.015,
                                longitudeDelta: 0.015,
                            }}>
                            <Marker
                                image={require('@assets/images/mark.png')}
                                coordinate={{
                                    latitude: lat,
                                    longitude: long,
                                }}
                                title="อยู่ดี มีสุข"
                            />
                            <Marker
                                image={require('@assets/images/home.png')}
                                coordinate={{
                                    latitude: 16.252035,
                                    longitude: 103.237163,
                                }}
                                title="ชัย ชนะ"
                            />
                             <Marker
                                image={require('@assets/images/home.png')}
                                coordinate={{
                                    latitude: 16.2533,
                                    longitude: 103.23738,
                                }}
                                title="หนึ่ง สองสาม"
                            />
                            <Polyline
                                coordinates={[
                                    {
                                        latitude: 16.252035,
                                        longitude: 103.237163,
                                    },
                                    {
                                        latitude: 16.25214,
                                        longitude: 103.236902,
                                    },
                                    { latitude: 16.2533, longitude: 103.23738 },
                                    {
                                        latitude: 16.253515,
                                        longitude: 103.237375,
                                    },
                                    {
                                        latitude: 16.253505,
                                        longitude: 103.236944,
                                    },
                                    {
                                        latitude: lat,
                                        longitude: long,
                                    },
                                ]}
                                strokeColor="red" // fallback for when `strokeColors` is not supported by the map-provider
                                strokeColors={[
                                    '#7F0000',
                                    '#000000', // no color, creates a "long" gradient between the previous and next coordinate
                                    '#B24112',
                                    '#E5845C',
                                    '#238C23',
                                    '#7F0000',
                                ]}
                                strokeWidth={5}
                            />
                        </MapView>
                    </View>
                    <View style={{ flex: 1 }}>
                        <ScrollView>
                            {x.length != 0 ? (
                                <View
                                    style={{
                                        marginTop: 10,
                                        paddingHorizontal: 10,
                                    }}>
                                    {x.map((value, i) => (
                                        <TouchableHighlight
                                            key={i}
                                            underlayColor="null"
                                            onPress={() =>
                                                props.navigation.navigate(
                                                    'ScanQRScreen',
                                                    { traking: '!!' },
                                                )
                                            }>
                                            <View style={styles.box}>
                                                <View style={styles.row}>
                                                    <View
                                                        style={
                                                            styles.flexStart
                                                        }>
                                                        <Text
                                                            style={styles.font}>
                                                            ชื่อ
                                                        </Text>
                                                        <Text
                                                            style={styles.font}>
                                                            เบอร์
                                                        </Text>
                                                        <Text
                                                            style={styles.font}>
                                                            สถานะ
                                                        </Text>
                                                        <Text
                                                            style={styles.font}>
                                                            ที่อยู่
                                                        </Text>
                                                    </View>
                                                    <View
                                                        style={styles.flexEnd}>
                                                        <Text
                                                            style={styles.font}>
                                                            นพนรรณ์ เลิศนันทพร
                                                        </Text>
                                                        <Text
                                                            style={styles.font}>
                                                            0940342997
                                                        </Text>
                                                        <Text
                                                            style={styles.font}>
                                                            ยังไม่ได้รับสินค้า
                                                        </Text>
                                                        <Text
                                                            style={styles.font}>
                                                            999/99 บ้านขามเรียง
                                                            กันทรวิชัย มหาสารคาม
                                                        </Text>
                                                    </View>
                                                </View>
                                            </View>
                                        </TouchableHighlight>
                                    ))}
                                </View>
                            ) : (
                                <View
                                    style={{
                                        flex: 1,
                                        alignItems: 'center',
                                    }}>
                                    <Text style={styles.font}>
                                        ไม่มีรายการที่ต้องส่ง
                                    </Text>
                                </View>
                            )}
                        </ScrollView>
                    </View>
                </>
            )}
        </>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.5,
    },
    box: {
        backgroundColor: '#FFF',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
        elevation: 5,
        borderRadius: 10,
    },
    font: {
        fontFamily: FONT_BOLD,
        fontSize: FONT_SIZES['400'],
        color: 'black',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },
    flexStart: {
        flex: 0.5,
        alignItems: 'flex-start',
        marginVertical: 5,
    },
    flexEnd: {
        flex: 0.5,
        alignItems: 'flex-end',
        marginVertical: 5,
    },
});
