import { useContext } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import React from 'react';
import icon from "./constants";
import { Button } from 'react-bootstrap'
import { DataContext } from '../DataContext'
import { useHistory } from 'react-router-dom';
import './MapStyle.css'
import "./MapStyle2.css";
import 'bootstrap/dist/css/bootstrap.min.css'



function MyMap2() {
  const {userInfo, setUserInfo} = useContext(DataContext)
  const history = useHistory();

  const newLocation = () => {
    history.push('/')
  }

  return (
    <div style={{
        position: 'relative'
      }}>
        <div style={{
        position: 'absolute',
        right:0,
        top: 0,
        zIndex: 1000,
        backgroundColor: 'blue'
        }}>
            <Button variant="primary" type="submit" onClick={ newLocation }>
                share new location
            </Button>
        </div>

        <MapContainer
        center={[50.5, 30.5]}
        zoom={13}
        style={{ height: "100vh" }}
        >
        <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {
            userInfo.map( user => {
                return(
                    <Marker position={[ user.location.lat, user.location.lng ]} icon={icon}>
                        <Popup>
                            <div className="detail-wrapper">
                                <h2 className="detail-header">Location Details</h2>
                                <div className="detail-container">
                                    <span>location name: { user.locationName }</span>
                                    <span>location type: { user.locationType }</span>
                                    <div className="logo-wrapper">
                                        <span>logo:</span>
                                        <img src={ process.env.PUBLIC_URL + user.logoAddress } alt="logo" />
                                    </div>
                                </div>
                            </div>
                        </Popup>
                    </Marker>
                )
            } )
        }
        </MapContainer>
    </div>

  );



}

export default MyMap2;
