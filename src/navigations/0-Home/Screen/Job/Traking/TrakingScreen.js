import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    ScrollView,
    TouchableHighlight,
    StyleSheet,
    Dimensions,
    Button,
} from 'react-native';
import { FONT_BOLD, FONT_SIZES, COLORS, FONT_MED } from '@components/styles';
import Header from '@components/Header';
import BackButton from '@components/Button/BackButton';
import MapView, { Polyline, Marker } from 'react-native-maps';
import GetLocation from 'react-native-get-location';
import Loading from '@components/Loading/Loading';
import Axios from 'axios';
import { URL } from '@utils/config';
import BackgroundGeolocation from 'react-native-background-geolocation';
export default function TrakingScreen(props) {
    const [loading, setLoading] = useState(true);
    const [orders, setOrders] = useState({});
    const [lat, setLat] = useState(0);
    const [long, setLong] = useState(0);
    const [isMove, setIsMove] = useState(false);

    // const componentWillUnmount = () => {
    //     BackgroundGeolocation.removeListeners();
    // };
    const onLocation = (location) => {
        console.log('[location] -', location);
        setLat(location['coords']['latitude']);
        setLong(location['coords']['longitude']);
    };
    const onError = (error) => {
        console.warn('[location] ERROR -', error);
    };
    const onActivityChange = (event) => {
        console.log('[activitychange] -', event); // eg: 'on_foot', 'still', 'in_vehicle'
    };
    const onProviderChange = (provider) => {
        console.log('[providerchange] -', provider.enabled, provider.status);
    };
    const onMotionChange = (event) => {
        console.log('[motionchange] -', event.isMoving, event.location);
        // setLoading(false);
    };

    useEffect(() => {
        currentLocation();
        console.log('*********************************************');
        console.log(lat);
        console.log(long);

        // This handler fires whenever bgGeo receives a location update.
        BackgroundGeolocation.onLocation(onLocation, onError);

        // This handler fires when movement states changes (stationary->moving; moving->stationary)
        BackgroundGeolocation.onMotionChange(onMotionChange);

        // This event fires when a change in motion activity is detected
        BackgroundGeolocation.onActivityChange(onActivityChange);

        // This event fires when the user toggles location-services authorization
        BackgroundGeolocation.onProviderChange(onProviderChange);

        ////
        // 2.  Execute #ready method (required)
        //
        BackgroundGeolocation.ready(
            {
                // Geolocation Config
                desiredAccuracy: BackgroundGeolocation.DESIRED_ACCURACY_HIGH,
                distanceFilter: 1,
                // Activity Recognition
                stopTimeout: 1,
                // Application config
                debug: true, // <-- enable this hear sounds for background-geolocation life-cycle.
                logLevel: BackgroundGeolocation.LOG_LEVEL_VERBOSE,
                stopOnTerminate: false, // <-- Allow the background-service to continue tracking when user closes the app.
                startOnBoot: true, // <-- Auto start tracking when device is powered-up.
                // HTTP / SQLite config
                url: 'http://yourserver.com/locations',
                batchSync: false, // <-- [Default: false] Set true to sync locations to server in a single HTTP request.
                autoSync: true, // <-- [Default: true] Set true to sync each location to server as it arrives.
                headers: {
                    // <-- Optional HTTP headers
                    'X-FOO': 'bar',
                },
                params: {
                    // <-- Optional HTTP params
                    auth_token:
                        'maybe_your_server_authenticates_via_token_YES?',
                },
            },
            (state) => {
                console.log(
                    '- BackgroundGeolocation is configured and ready: ',
                    state.enabled,
                );

                if (!state.enabled) {
                    ////
                    // 3. Start tracking!
                    //
                    BackgroundGeolocation.start(function () {
                        console.log('- Start success');
                    });
                }
            },
        );
    }, []);
    const currentLocation = async () => {
        GetLocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 15000,
        })
            .then((location) => {
                console.log(location);
                setLat(location['latitude']);
                setLong(location['longitude']);
                setLoading(false);
            })
            .catch((error) => {
                const { code, message } = error;
                console.warn(code, message);
            });
    };
    const startBGLocation = () => {
        BackgroundGeolocation.start(function () {
            console.log('START');
        });
        BackgroundGeolocation.setConfig({
            // Geolocation Config
            desiredAccuracy: BackgroundGeolocation.DESIRED_ACCURACY_HIGH,
            distanceFilter: 1,
            locationUpdateInterval: 1000,
            /*fastestLocationUpdateInterval: 1000, 
          deferTime: 0, 
          allowIdenticalLocations: true, */
            // Activity Recognition
            stopTimeout: 1,
            // Application config
            debug: true, // <-- enable this hear sounds for background-geolocation life-cycle.
            logLevel: BackgroundGeolocation.LOG_LEVEL_VERBOSE,
            stopOnTerminate: false, // <-- Allow the background-service to continue tracking when user closes the app.
            startOnBoot: true, // <-- Auto start tracking when device is powered-up.
            // HTTP / SQLite config
            //TEST: 'http://192.168.1.101:8080/route-display-system/api/testLib'
            url: URL + '/api/record_location',
            method: 'POST',
            batchSync: false, // <-- [Default: false] Set true to sync locations to server in a single HTTP request.
            autoSync: true, // <-- [Default: true] Set true to sync each location to server as it arrives.
            headers: {
                // <-- Optional HTTP headers
                'X-FOO': 'bar',
            },
            params: {
                // <-- Optional HTTP params
                employee_route_id: 0,
            },
        }).then((state) => {
            console.log('[setConfig] success: ', state);
        });
    };
    var x = [];
    // const customPosition = async () => {
    //     const { data } = await Axios.get(URL + 'order/get-order-route/2');
    //     setOrders(data);
    // };
    return (
        <>
            <Header
                title="เส้นทาง"
                leftComponent={
                    <BackButton
                        onPress={() => {
                            props.navigation.goBack();
                        }}
                    />
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
                                                0 / 0 / 0
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
                            region={{
                                latitude: lat,
                                longitude: long,
                                latitudeDelta: 0.015,
                                longitudeDelta: 0.015,
                            }}
                            // initialRegion={{
                            //     latitude: lat,
                            //     longitude: long,
                            //     latitudeDelta: 0.015,
                            //     longitudeDelta: 0.015,
                            // }}
                        >
                            <Marker
                                image={require('@assets/images/mark.png')}
                                coordinate={{
                                    latitude: lat,
                                    longitude: long,
                                }}
                                title="อยู่ดี มีสุข"
                            />
                            {x.map((item, i) => (
                                <Marker
                                    key={i}
                                    image={require('@assets/images/home.png')}
                                    coordinate={{
                                        latitude: item.latitude,
                                        longitude: item.longitude,
                                    }}
                                    title={item.name}
                                />
                            ))}
                            <Text>{lat}</Text>

                            {/* <Polyline
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
                                strokeColor="red"
                                strokeWidth={5}
                            /> */}
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
                                    {x.map((item, i) => (
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
                                    {/* <Button
                                        title="onClick"
                                        onPress={startBGLocation}></Button> */}
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
