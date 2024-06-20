import React from 'react';
import { LoadScript } from '@react-google-maps/api';

const libraries = ["places"];

const GoogleMapsLoader = ({ children }) => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyBiK4-gaLpyLL2Zk42ubfL1VjMbXDPpi6w" libraries={libraries}>
      {children}
    </LoadScript>
  );
};

export default GoogleMapsLoader;
