import React, { useState, useRef, useEffect } from 'react';
import { Form, Input, Button, Modal } from 'antd';
import { StandaloneSearchBox, GoogleMap, Marker } from '@react-google-maps/api';
import { EnvironmentOutlined } from '@ant-design/icons';

const MapInput = ({ form, name , restFields}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [location, setLocation] = useState(null);
  const searchBoxRef = useRef(null);
  const [searchInput, setSearchInput] = useState('');

  const mapField = Form.useWatch(name, form)?.map;
  const latField = Form.useWatch(name, form)?.latitude;
  const longField = Form.useWatch(name, form)?.longitude;

  const suffix = <EnvironmentOutlined />;

  const center = {
    lat: latField || 24.491596,
    lng: longField || 54.3547217,
  };

  const [markerPosition, setMarkerPosition] = useState(center);
  const mapContainerStyle = {
    height: "400px",
    width: "100%",
  };

  const handleMapClick = (event) => {
    const position = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    };
    setMarkerPosition(position);

    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ location: position }, (results, status) => {
      if (status === 'OK' && results[0]) {
        const location = results[0].formatted_address;
        setLocation(location);
        setSearchInput(location);
        form.setFieldsValue({
          [name]: {
            map: location,
            latitude: position.lat,
            longitude: position.lng,
          },
        });
      }
    });
  };

  const handleOpenModal = () => {
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
        };
        setLocation(location);
        setMarkerPosition(position);
        console.log('name is ',name, restFields);
        if(name.length && restFields && restFields.isListField){
          const fields = form.getFieldsValue();
          const { associated_licenses } = fields;
          associated_licenses[restFields.fieldKey] = {
            ...associated_licenses[restFields.fieldKey],
            map: location,
            latitude: position.lat,
            longitude: position.lng,
          };
          form.setFieldsValue({ associated_licenses });
        }else{
          form.setFieldsValue({
            [name]: {
              map: location,
              latitude: position.lat,
              longitude: position.lng,
            },
          });
        }


        setSearchInput(location);
        setIsModalVisible(false);
      }
    }
  };

  const onSetFieldValue = (index) => {
    const fields = form.getFieldsValue('associated_licenses');
    const items = fields.items || [];
    items[index] = { ...items[index], name: 'New Value' };
    form.setFieldsValue({ items });
  };

  useEffect(() => {
    console.log('name',...name);
  }, []);
  const handlePlacesChanged = () => {
    if (searchBoxRef.current) {
      const places = searchBoxRef.current.getPlaces();
      if (places && places.length > 0) {
        const place = places[0];
        const location = place.formatted_address;
        const position = {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
        };
        setLocation(location);
        setMarkerPosition(position);
        setSearchInput(location);
        form.setFieldsValue({
          [name]: {
            map: location,
            latitude: position.lat,
            longitude: position.lng,
          },
        });
      }
    }
  };

  return (
    <>
      <Form.Item rules={[{ required: true }]}
        name={[...name,'map']}
        label="Map"
        {...restFields}
      >
        <Input
          readOnly
          onClick={handleOpenModal}
          suffix={suffix}
        />
      </Form.Item>
      <Form.Item noStyle name={[...name, 'latitude']}>
        <Input type="hidden" />
      </Form.Item>
      <Form.Item noStyle name={[...name, 'longitude']}>
        <Input type="hidden" />
      </Form.Item>
      <Modal
        width={800}
        title="Select Location"
        open={isModalVisible}
        onCancel={handleCancel}
        footer={[
          <Button key="cancel" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="save" type="primary" onClick={handleSave}>
            Save
          </Button>,
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
    </>
  );
};

export default MapInput;
