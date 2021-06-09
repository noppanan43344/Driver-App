import React from 'react';
import {View, Text} from 'react-native';
import MapView, {Polygon} from 'react-native-maps';

export default function MapPolygon() {
  return (
    <>
      <MapView>
        <Polygon
          coordinates={[
            {latitude: 37.8025259, longitude: -122.4351431},
            {latitude: 37.7896386, longitude: -122.421646},
            {latitude: 37.7665248, longitude: -122.4161628},
            {latitude: 37.7734153, longitude: -122.4577787},
            {latitude: 37.7948605, longitude: -122.4596065},
            {latitude: 37.8025259, longitude: -122.4351431},
          ]}
          strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
          strokeColors={[
            '#7F0000',
            '#00000000', // no color, creates a "long" gradient between the previous and next coordinate
            '#B24112',
            '#E5845C',
            '#238C23',
            '#7F0000',
          ]}
          strokeWidth={6}
        />
      </MapView>
    </>
  );
}
