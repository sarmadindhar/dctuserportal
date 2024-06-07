import React, { useState, useRef , useEffect} from 'react';
import { Form, Input, Button, Modal } from 'antd';
import { LoadScript, StandaloneSearchBox, GoogleMap, Marker } from '@react-google-maps/api';
import { EnvironmentOutlined } from '@ant-design/icons';

const MapInput = ({form}) =>{
  const [isModalVisible, setIsModalVisible] = useState(false);
  const libraries = ["places"];
  const [location, setLocation] = useState(null);

  const searchBoxRef = useRef(null);
  const [searchInput, setSearchInput] = useState('');
  const locationInputRef = useRef(null);
  const mapField = Form.useWatch('map', { form, preserve: true });
  const latField = Form.useWatch('latitude', { form, preserve: true });
  const longField = Form.useWatch('longitude', { form, preserve: true });


  const suffix = (
    <EnvironmentOutlined />);

  const center = {
    lat: latField? latField: 24.491596,
    lng: longField ? longField :54.3547217,
    address:mapField,
  };
  const [markerPosition, setMarkerPosition] = useState(center);
  const mapContainerStyle = {
    height: "400px",
    width: "100%"
  };
  const handleMapClick = (event) => {
    const position = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng()
    };
    setMarkerPosition(position);
    // Reverse geocoding to get address from coordinates
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ location: position }, (results, status) => {
      if (status === 'OK' && results[0]) {
        const location = results[0].formatted_address;
        setLocation(location);

        const position = {
          lat: results[0].geometry.location.lat(),
          lng: results[0].geometry.location.lng()
        };
        setSearchInput(location);
      }
    });
  };


  const handleOpenModal = (location=null) => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleSave = () => {
    if (searchBoxRef.current) {
      const places = searchBoxRef.current.getPlaces();
      if (places && places.length > 0) {
        const place = places[0];
        const location = place.formatted_address;
        const position = {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
          address:location
        };
        setLocation(location);
        setMarkerPosition(position);
        form.setFieldsValue({ map: location});
        form.setFieldsValue({ latitude: position.lat});
        form.setFieldsValue({ longitude: position.lng});
        // form.setFieldsValue({ location, latitude: position.lat, longitude: position.lng });
        setSearchInput(location);
        setIsModalVisible(false);

      }
    }
  };

  const handlePlacesChanged = () => {
    if (searchBoxRef.current) {
      const places = searchBoxRef.current.getPlaces();
      if (places && places.length > 0) {
        const place = places[0];
        const location = place.formatted_address;
        const position = {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng()
        };

        setLocation(location);
        setMarkerPosition(position);
        setSearchInput(location);
      }
    }
  };


  return(
    <LoadScript googleMapsApiKey="" libraries={libraries}>
      <Form.Item
        name="map"
        label="Map"

        rules={[{ required: true, message: 'Please enter  map location!' }]}
      >
        <Input readOnly onClick={handleOpenModal}  value={location?.address} ref={locationInputRef} suffix={suffix} />
      </Form.Item>
      <Form.Item noStyle name={'latitude'}>
        <Input  type="hidden" />
      </Form.Item>
      <Form.Item noStyle name={'longitude'}>
        <Input  type="hidden" />
      </Form.Item>
      <Modal width={800}
        title="Select Location"
        open={isModalVisible}
        onCancel={handleCancel}
        footer={[
          <Button key="cancel" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="save" type="primary" onClick={handleSave}>
            Save
          </Button>
        ]}
      >
        <StandaloneSearchBox
          onLoad={(ref) => (searchBoxRef.current = ref)}
          onPlacesChanged={handlePlacesChanged}
        >
          <Input
            placeholder="Search for a location"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            style={{ width: '100%', marginBottom: '10px' }}
          />
        </StandaloneSearchBox>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={markerPosition}
          zoom={15}
          onClick={handleMapClick}
        >
          <Marker position={markerPosition} />
        </GoogleMap>
      </Modal>
    </LoadScript>
  );


}


export default MapInput;