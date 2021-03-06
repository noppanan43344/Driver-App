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
import Loading from '../../../../../components/Loading/Loading';
export default function TrakingScreen(props) {
    const [lat, setLat] = useState(0);
    const [long, setLong] = useState(0);
    useEffect(() => {
        LatLong();
    }, []);
    const [loading, setLoading] = useState(true);
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
                                coordinate={{ latitude: lat, longitude: long }}
                                title="อยู่ดี มีสุข"
                                // description={marker.description}
                            />
                            <Marker
                                style={{ width: 2, height: 2 }}
                                coordinate={{
                                    latitude: 16.252035,
                                    longitude: 103.237163,
                                }}
                                image={require('@assets/images/mark.png')}
                                // description={marker.description}
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
                                    '#00000000', // no color, creates a "long" gradient between the previous and next coordinate
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
                            <View
                                style={{
                                    marginTop: 20,
                                    paddingHorizontal: 15,
                                }}>
                                <TouchableHighlight
                                    underlayColor="null"
                                    onPress={() =>
                                        props.navigation.navigate(
                                            'ScanQRScreen',
                                        )
                                    }>
                                    <View style={styles.box}>
                                        <View style={styles.row}>
                                            <View style={styles.flexStart}>
                                                <Text style={styles.font}>
                                                    ชื่อ
                                                </Text>
                                                <Text style={styles.font}>
                                                    เบอร์
                                                </Text>
                                                <Text style={styles.font}>
                                                    สถานะ
                                                </Text>
                                                <Text style={styles.font}>
                                                    ที่อยู่
                                                </Text>
                                            </View>
                                            <View style={styles.flexEnd}>
                                                <Text style={styles.font}>
                                                    นพนรรณ์ เลิศนันทพร
                                                </Text>
                                                <Text style={styles.font}>
                                                    0940342997
                                                </Text>
                                                <Text style={styles.font}>
                                                    ยังไม่ได้รับสินค้า
                                                </Text>
                                                <Text style={styles.font}>
                                                    999/99 บ้านขามเรียง
                                                    กันทรวิชัย มหาสารคาม
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                                </TouchableHighlight>
                            </View>
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
        height: Dimensions.get('window').height * 0.65,
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
        fontFamily: FONT_MED,
        fontSize: FONT_SIZES['400'],
        color: 'black',
    },
    status: {
        backgroundColor: 'red',
        width: 120,
        alignItems: 'center',
    },
    fontStatus: {
        fontFamily: FONT_MED,
        fontSize: FONT_SIZES['500'],
        color: 'white',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // alignItems: 'center',
        paddingHorizontal: 20,
    },
    flexStart: {
        flex: 0.5,
        alignItems: 'flex-start',
        marginVertical: 5,
    },
    flexEnd: { flex: 0.5, alignItems: 'flex-end', marginVertical: 5 },
    // currentLocation: {

    // },
});
