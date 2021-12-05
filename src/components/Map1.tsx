import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import React from 'react';
import icon from "./constants";
import { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import "./MapStyle2.css";

type Props = {
  setNewLocation: (val: LatLngExpression) => void;
};

const Map1: React.FC<Props> = ({
  setNewLocation
}) => {

  const [position, setPosition] = useState<LatLngExpression>([50.5, 30.5])

  function LocationMarker() {
    const map = useMapEvents({
      click(e) {
        setPosition(e.latlng)
        setNewLocation(e.latlng)
      },
    })
  
    return position === null ? null : (
      <Marker position={position} icon={icon}>
        <Popup>You are here</Popup>
      </Marker>
    )
  }

  return (
    <MapContainer
      center={[50.5, 30.5]}
      zoom={13}
      style={{ height: "50vh" }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker />
    </MapContainer>
  );
};

export default Map1;