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
// import Header from '@components/Header';
import BackButton from '@components/Button/BackButton';
import MapView, { Polyline, Marker } from 'react-native-maps';
import Loading from '@components/Loading/Loading';
import Axios from 'axios';
import { URL } from '@utils/config';
import BackgroundGeolocation from 'react-native-background-geolocation';
import moment from 'moment';
import { Header } from 'react-native-elements';
export default function TrakingScreen(props) {
    const [loading, setLoading] = useState(true);
    const [orders, setOrders] = useState({});
    const [isPolyline, setIsPolyline] = useState({});
    const [isWayPoint, setIsWayPoint] = useState({});
    const [lat, setLat] = useState(0);
    const [long, setLong] = useState(0);
    const [time, setTime] = useState();
    const [isEnabled, setIsEnabled] = useState(false);

    const [location, setLocation] = useState({});
    const [waypoint, setWaypoint] = useState([]);
    const [color,setcolor] = useState([]);


    const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
    const onLocation = (location) => {
        console.log('[location] -', location);
        setLat(location['coords']['latitude']);
        setLong(location['coords']['longitude']);
        var timezone = moment().format();
        setTime(timezone);
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
        const unsub = props.navigation.addListener('focus', () => {
            console.log('useEffect');
            bgGeoLocation();
            getlocation();
        });
        return unsub;
    }, [props.navigation]);
//========================== Best Func =================================
    const getlocation = async()=>{
        const { data } = await Axios.get('http://192.168.1.33:8080/ltl-scen1-dev/provider/findordermoc');
        let waypoints = []
        data.result.order.map((val,i)=>{
            let waypoint = []
            val.location.map((val,i)=>{
                waypoint.push({
                    latitude: val[1],
                    longitude: val[0],
                });
            })
            waypoints.push(waypoint)
        })
        const colors= ["#63b598", "#ce7d78", "#ea9e70", "#a48a9e", "#f50422", "#648177" ,"#0d5ac1"]
        setcolor(colors);
        setWaypoint(waypoints);
        setLocation(data);
        setLoading(false);
    }

    const bgGeoLocation = async () => {
        //isPoly();
        BackgroundGeolocation.onLocation(onLocation, onError);
        BackgroundGeolocation.onMotionChange(onMotionChange);
        BackgroundGeolocation.onActivityChange(onActivityChange);
        BackgroundGeolocation.onProviderChange(onProviderChange);
        BackgroundGeolocation.changePace(true);
        BackgroundGeolocation.ready(
            {
                desiredAccuracy: BackgroundGeolocation.DESIRED_ACCURACY_HIGH,
                distanceFilter: 0,
                stopTimeout: 1,
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
                    time: time,
                    job_id: 1,
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
    const isPoly = async () => {
        const { data } = await Axios.get(
            'http://192.168.1.33:8080/ltl-scen1-dev/provider/findordermoc',
        );
        var _waypoint = [];
        var marker = [];
        var _polyline = [];
        data.result.order.map((value, index) => {
            marker.push({
                latitude: value.lat,
                longitude: value.lng,
                name: value.firstname + ' ' + value.lastname,
                phoneNumber: value.phoneNumber,
                address:
                    value.address +
                    ' ' +
                    value.tambon +
                    ' ' +
                    value.amphur +
                    ' ' +
                    value.province,
            });
            _polyline.push({
                latitude: value.lat,
                longitude: value.lng,
            });
            value.location.map((v, i) => {
                _waypoint.push({
                    latitude: v[1],
                    longitude: v[0],
                });
            });
        });
        setOrders(marker);
        setIsPolyline(_polyline);
        setIsWayPoint(_waypoint);
        setLoading(false);
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
                    {isEnabled == false ? (
                        <View style={styles.container}>
                            <MapView
                                style={styles.map}
                                region={{
                                    latitude: 16.246040662984942,
                                    longitude: 103.24808449520349,
                                    latitudeDelta: 0.015,
                                    longitudeDelta: 0.015,
                                }}>
                                {
                                location.result.order.map((val,i)=>( 
                                    
                                    <>
                                    <Marker
                                    key={i}
                                        image={require('@assets/images/mark.png')}
                                        coordinate={{
                                            latitude: val.lat,
                                            longitude: val.lng,
                                        }}
                                        // title="อยู่ดี มีสุข"
                                    />
                                    <Polyline
                                         coordinates={waypoint[i]}
                                         geodesic={false}
                                         strokeColor={color[i]}
                                         strokeWidth={5}
                                        lineDashPattern={[5, 7]}
                                    />
                                    </>
                                    )
                                           )} 
                                 
                                
                            </MapView>
                        </View>
                    ) : (
                        <View style={styles.container}>
                            <MapView
                                style={styles.map}
                                initialRegion={{
                                    latitude: 16.246040662984942,
                                    longitude: 103.24808449520349,
                                    latitudeDelta: 0.015,
                                    longitudeDelta: 0.015,
                                }}>
                                <Marker
                                    image={require('@assets/images/mark.png')}
                                    coordinate={{
                                        latitude: 16.246040662984942,
                                    longitude: 103.24808449520349,
                                    }}
                                    // title="อยู่ดี มีสุข"
                                />
                                {/* {orders.map((item, i) => (
                                    <Marker
                                        key={i}
                                        image={require('@assets/images/home.png')}
                                        coordinate={{
                                            latitude: item.latitude,
                                            longitude: item.longitude,
                                        }}
                                        title={item.name}
                                    />
                                ))} */}
                                {/* <Polyline
                                    coordinates={isPolyline}
                                    strokeColor="red"
                                    strokeWidth={5}
                                    lineDashPattern={[5, 0]}
                                /> */}
                            </MapView>
                        </View>
                    )}

                    <View style={{ flex: 1 }}>
                        <ScrollView>
                            
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
