/* eslint-disable prettier/prettier */
// src/GoogleMapComponent.js

import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
  borderRadius: '10px',  // Add this line to set the border radius
  overflow: 'hidden'     // Add this line to ensure the map content doesn't overflow
};

const center = {
  lat: 21.1285453,  // Latitude for San Francisco
  lng:  79.1036561 // Longitude for San Francisco
};

const apiKey = 'AIzaSyAvHHoPKPwRFui0undeEUrz00-8w6qFtik';

const GoogleMapComponent = () => {
  return (
    <LoadScript
      googleMapsApiKey={apiKey}
      loadingElement={<div>Loading...</div>} // Optional: add a loading element
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
