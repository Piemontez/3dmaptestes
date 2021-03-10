import React from 'react';
import {MapContainer, TileLayer, Marker, Popup, Circle} from 'react-leaflet';

export default class MyMap extends React.Component {
    render(){
        return <MapContainer center={[64.128701,-21.942068]} zoom={15} scrollWheelZoom={true}>
        <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
            <Marker position={[64.128701,-21.942068]}>
                <Popup>
                    Reykjavíkurflugvöllur
                </Popup>
            </Marker>
            <Circle center={[64.128701,-21.942068]} radius={900}>
                <Popup>
                    Reykjavíkurflugvöllur&apos;s region
                </Popup>
            </Circle>
        </MapContainer>
    }
}