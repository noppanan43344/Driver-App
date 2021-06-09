import React from 'react';
import { Text, View, Dimensions, StyleSheet } from 'react-native';
import MapView, { Marker, Callout, ProviderPropType } from 'react-native-maps';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const SPACE = 0.01;

class LoadingMap extends React.Component {
  constructor(props) {
    super(props);
    

    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          zoomEnabled={true}
          provider={this.props.provider}
          style={styles.map}
          initialRegion={this.state.region}
          onPress={this.onMapPress}
          loadingEnabled
          loadingIndicatorColor="#666666"
          loadingBackgroundColor="#eeeeee"
        >
          <Marker
            coordinate={{
              latitude: LATITUDE + SPACE,
              longitude: LONGITUDE + SPACE,
            }}
          />
          <Marker
            coordinate={{
              latitude: LATITUDE - SPACE,
              longitude: LONGITUDE - SPACE,
            }}
          >
            <Callout>
              <View>
                <Text>This is a plain view</Text>
              </View>
            </Callout>
          </Marker>
        </MapView>
        <View>
            <Text>Name : Sirichai Chulee</Text>
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.bubble}  >
            <Text style={{color:"#fff"}} onPress={() => this.props.navigation.goBack()}>Back</Text>
          </View>
        </View>
      </View>
    );
  }
}

LoadingMap.propTypes = {
  provider: ProviderPropType,
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  bubble: {
    color:"#FFF",
    backgroundColor: '#000',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 30,
    backgroundColor: 'transparent',
  },
});

export default LoadingMap;