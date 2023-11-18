// Map.js

import React from 'react';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';

const Map = () => {
  const mapContainerStyle = {
    width: '100%',
    height: '400px',
  };

  const center = {
    lat: -7.239745056192404,
    lng: -35.915961482246544
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyDvJ5TBeBmSYIUGBQDCQlBeXbmtae7rx44">
      <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={20}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
