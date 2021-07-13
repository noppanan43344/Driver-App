import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    ScrollView,
    TouchableHighlight,
    StyleSheet,
    Dimensions,
    Switch,
} from 'react-native';
import { FONT_BOLD, FONT_SIZES, COLORS, FONT_MED } from '@components/styles';
import BackButton from '@components/Button/BackButton';
import MapView, { Polyline, Marker } from 'react-native-maps';
import Loading from '@components/Loading/Loading';
import Axios from 'axios';
import { URL } from '@utils/config';
import BackgroundGeolocation from 'react-native-background-geolocation';
import { Header } from 'react-native-elements';
export default function TrakingScreen(props) {
    const [loading, setLoading] = useState(true);
    const [orders, setOrders] = useState({});
    const [isPolyline, setIsPolyline] = useState({});
    const [isNewPolyline, setIsNewPolyline] = useState([]);
    const [isWayPoint, setIsWayPoint] = useState([]);
    const [lat, setLat] = useState(0);
    const [long, setLong] = useState(0);
    const [isColor, setIsColor] = useState([]);
    const [location, setLocation] = useState({});
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
    const onLocation = (location) => {
        // console.log('[location] -', location);
        setLat(location['coords']['latitude']);
        setLong(location['coords']['longitude']);
    };
    const onError = (error) => {
        // console.warn('[location] ERROR -', error);
    };
    const onActivityChange = (event) => {
        // console.log('[activitychange] -', event); // eg: 'on_foot', 'still', 'in_vehicle'
    };
    const onProviderChange = (provider) => {
        // console.log('[providerchange] -', provider.enabled, provider.status);
    };
    const onMotionChange = (event) => {
        // console.log('[motionchange] -', event.isMoving, event.location);
        // setLoading(false);
    };

    useEffect(() => {
        // open job here
        openSession()
        let timer;
        const unsub = props.navigation.addListener('focus', () => {
            console.log('useEffect');

            bgGeoLocation();
            timer = setInterval(() => {
                getPolylines();
            }, 5000);
        });

        return () => {
            clearInterval(timer);
            unsub;
        };
    }, [props.navigation]);

    const openSession= async()=>{
        const { data } = await Axios.get(URL + '/startwork/112');
    }

    const getPolylines = async () => {
        const { data } = await Axios.get(URL + 'tracking/tracking/333');
        let waypoints = [];
        var polylines = [];

        data.result.dashline.map((val, i) => {
            waypoints.push({
                latitude: val[1],
                longitude: val[0],
            });
        });
        data.result.polyline.map((val, i) => {
            polylines.push({
                latitude: val[1],
                longitude: val[0],
            });
        });
        setIsNewPolyline(polylines);
        console.log(waypoints);
        console.log(polylines);
    };
    const bgGeoLocation = async () => {
        let isJobId = await getlocation();
        BackgroundGeolocation.onLocation(onLocation, onError);
        BackgroundGeolocation.onMotionChange(onMotionChange);
        BackgroundGeolocation.onActivityChange(onActivityChange);
        BackgroundGeolocation.onProviderChange(onProviderChange);
        BackgroundGeolocation.changePace(true);
        BackgroundGeolocation.ready(
            {
                desiredAccuracy: BackgroundGeolocation.DESIRED_ACCURACY_HIGH,
                distanceFilter: 10,
                stopTimeout: 3,
                debug: false, // <-- enable this hear sounds for background-geolocation life-cycle.
                logLevel: BackgroundGeolocation.LOG_LEVEL_VERBOSE,
                stopOnTerminate: false, // <-- Allow the background-service to continue tracking when user closes the app.
                startOnBoot: true, // <-- Auto start tracking when device is powered-up.
                // HTTP / SQLite config
                url: URL + 'driver/post-location',
                method: 'POST',
                batchSync: false, // <-- [Default: false] Set true to sync locations to server in a single HTTP request.
                autoSync: true, // <-- [Default: true] Set true to sync each location to server as it arrives.
                headers: {
                    'X-FOO': 'bar',
                },
                params: {
                    job_id: isJobId,
                },
            },
            (state) => {
                console.log(
                    '- BackgroundGeolocation is configured and ready: ',
                    state.enabled,
                );
                if (!state.enabled) {
                    BackgroundGeolocation.start(function () {
                        console.log('- Start success');
                    });
                }
            },
        );
    };
    const getlocation = async () => {
        const { data } = await Axios.get(URL + 'provider/findordermoc/112');
        let waypoints = [];
        var polylines = [];
        var marker = [];
        data.result.order.map((val, i) => {
            // add data custommer
            marker.push({
                latitude: val.lat,
                longitude: val.lng,
                name: val.firstname + ' ' + val.lastname,
                phoneNumber: val.phoneNumber,
                address:
                    val.address +
                    ' ' +
                    val.tambon +
                    ' ' +
                    val.amphur +
                    ' ' +
                    val.province,
            });
            // add data waypoints
            let waypoint = [];
            val.location.map((val, i) => {
                waypoint.push({
                    latitude: val[1],
                    longitude: val[0],
                });
            });
            waypoints.push(waypoint);
            // add data polylines
            polylines.push({
                latitude: val.lat,
                longitude: val.lng,
            });
        });
        // add data polylines index 0
        polylines.push({
            latitude: data.result.order[0].lat,
            longitude: data.result.order[0].lng,
        });
        const colors = [
            '#63b598',
            '#ce7d78',
            '#ea9e70',
            '#a48a9e',
            '#f50422',
            '#648177',
            '#0d5ac1',
        ];
        setIsColor(colors);
        setIsWayPoint(waypoints);
        setIsPolyline(polylines);
        setLocation(data);
        setOrders(marker);
        setLoading(false);
        return data.result.order[0].orderId; // <- return ID order_route index 0
    };

    return (
        <>
            <Header
                placement="left"
                leftComponent={
                    <BackButton
                        onPress={() => {
                            props.navigation.goBack();
                        }}
                    />
                }
                centerComponent={{
                    text: 'เส้นทาง',
                    style: {
                        color: 'white',
                        fontFamily: FONT_BOLD,
                        fontSize: FONT_SIZES['500'],
                    },
                }}
                rightComponent={
                    <View style={{ marginTop: 5 }}>
                        <Switch
                            trackColor={{ false: '#767577', true: '#ffffff' }}
                            thumbColor={isEnabled ? '#767577' : '#ffffff'}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                    </View>
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
                                            <Text style={styles.font}> </Text>
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
                                            <View style={styles.rowFont}>
                                                <Text style={styles.fontGreen}>
                                                    เสร็จ
                                                </Text>
                                                <Text style={styles.font}>
                                                    /
                                                </Text>
                                                <Text style={styles.fontBlue}>
                                                    ต้องทำ
                                                </Text>
                                                <Text style={styles.font}>
                                                    /
                                                </Text>
                                                <Text style={styles.fontOrange}>
                                                    รวม
                                                </Text>
                                            </View>
                                            <View style={styles.rowFont}>
                                                <Text style={styles.fontGreen}>
                                                    10
                                                </Text>
                                                <Text style={styles.font}>
                                                    /
                                                </Text>
                                                <Text style={styles.fontBlue}>
                                                    20
                                                </Text>
                                                <Text style={styles.font}>
                                                    /
                                                </Text>
                                                <Text style={styles.fontOrange}>
                                                    10
                                                </Text>
                                            </View>
                                            <View style={styles.rowFont}>
                                                <Text style={styles.fontGreen}>
                                                    35
                                                </Text>
                                                <Text style={styles.font}>
                                                    /
                                                </Text>
                                                <Text style={styles.fontBlue}>
                                                    87
                                                </Text>
                                                <Text style={styles.font}>
                                                    /
                                                </Text>
                                                <Text style={styles.fontOrange}>
                                                    35
                                                </Text>
                                            </View>
                                            <View style={styles.rowFont}>
                                                <Text style={styles.fontGreen}>
                                                    02:30
                                                </Text>
                                                <Text style={styles.font}>
                                                    /
                                                </Text>
                                                <Text style={styles.fontBlue}>
                                                    08:50
                                                </Text>
                                                <Text style={styles.font}>
                                                    /
                                                </Text>
                                                <Text style={styles.fontOrange}>
                                                    02:30
                                                </Text>
                                            </View>
                                            <View style={styles.rowFont}>
                                                <Text style={styles.fontGreen}>
                                                    70.00
                                                </Text>
                                                <Text style={styles.font}>
                                                    /
                                                </Text>
                                                <Text style={styles.fontBlue}>
                                                    174.00
                                                </Text>
                                                <Text style={styles.font}>
                                                    /
                                                </Text>
                                                <Text style={styles.fontOrange}>
                                                    70.00
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                    <View style={styles.container}>
                        {!isEnabled ? (
                            <MapView
                                style={styles.map}
                                region={{
                                    latitude: lat,
                                    longitude: long,
                                    latitudeDelta: 0.001,
                                    longitudeDelta: 0.001,
                                }}>
                                <Marker
                                    image={require('@assets/images/mark.png')}
                                    coordinate={{
                                        latitude: lat,
                                        longitude: long,
                                        // latitude: lat,
                                        // longitude: long,
                                    }}
                                />

                                {location.result.order.map((val, i) => (
                                    <>
                                        <Polyline
                                            coordinates={isWayPoint[i]}
                                            strokeColor={isColor[i]}
                                            strokeWidth={5}
                                            lineDashPattern={[5, 7]}
                                        />
                                        <Marker
                                            key={val.orderId}
                                            image={require('@assets/images/home.png')}
                                            coordinate={{
                                                latitude: val.lat,
                                                longitude: val.lng,
                                            }}
                                            title={
                                                val.firstname +
                                                ' ' +
                                                val.lastname
                                            }
                                        />
                                    </>
                                ))}
                                <Polyline
                                    coordinates={isNewPolyline}
                                    strokeColor="green" // fallback for when `strokeColors` is not supported by the map-provider
                                    strokeWidth={5}
                                />
                            </MapView>
                        ) : (
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
                                />

                                {location.result.order.map((val, i) => (
                                    <>
                                        <Marker
                                            key={i}
                                            image={require('@assets/images/home.png')}
                                            coordinate={{
                                                latitude: val.lat,
                                                longitude: val.lng,
                                            }}
                                            title={
                                                val.firstname +
                                                ' ' +
                                                val.lastname
                                            }
                                        />
                                        <Polyline
                                            coordinates={isPolyline}
                                            strokeColor={isColor[i]}
                                            strokeWidth={5}
                                        />
                                    </>
                                ))}
                            </MapView>
                        )}
                    </View>
                    <View style={{ flex: 1 }}>
                        <ScrollView>
                            {orders.length != 0 ? (
                                <View
                                    style={{
                                        marginTop: 10,
                                        paddingHorizontal: 10,
                                    }}>
                                    {orders.map((item, i) => (
                                        <TouchableHighlight
                                            key={i}
                                            underlayColor="null"
                                            onPress={() =>
                                                props.navigation.navigate(
                                                    'ScanQRScreen',
                                                    { traking: i },
                                                )
                                            }>
                                            <View style={styles.box}>
                                                <View
                                                    style={{
                                                        alignItems: 'center',
                                                    }}>
                                                    <Text style={styles.font}>
                                                        เริ่ม / ถึง / จริง
                                                    </Text>
                                                    <Text style={styles.font}>
                                                        12:30 / 13:00 / 12:58
                                                    </Text>
                                                </View>
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
                                                            ระยะทาง
                                                        </Text>
                                                        <Text
                                                            style={styles.font}>
                                                            เวลา
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
                                                            {item.name}
                                                        </Text>
                                                        <Text
                                                            style={styles.font}>
                                                            {item.phoneNumber}
                                                        </Text>
                                                        <Text
                                                            style={styles.font}>
                                                            {item.statusName}
                                                        </Text>
                                                        <Text
                                                            style={styles.font}>
                                                            10 กิโลเมตร
                                                        </Text>
                                                        <Text
                                                            style={styles.font}>
                                                            0 ชั่วโมง 20 นาที
                                                        </Text>
                                                        <Text
                                                            style={styles.font}>
                                                            {item.address}
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
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
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
    fontGreen: {
        fontFamily: FONT_BOLD,
        fontSize: FONT_SIZES['400'],
        color: 'green',
    },
    fontBlue: {
        fontFamily: FONT_BOLD,
        fontSize: FONT_SIZES['400'],
        color: 'blue',
    },
    fontOrange: {
        fontFamily: FONT_BOLD,
        fontSize: FONT_SIZES['400'],
        color: 'orange',
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
    rowFont: { flexDirection: 'row', justifyContent: 'space-between' },
});
