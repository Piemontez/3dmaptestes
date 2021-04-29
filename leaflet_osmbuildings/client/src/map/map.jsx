import React from 'react';
//import {MapContainer, TileLayer,Marker, WMSTileLayer, Popup, Circle} from 'react-leaflet';
import L from 'leaflet';


export default class MyMap extends React.Component {
    componentDidMount(){
        const map = L.map("supermap").setView([-26.898497, -48.648715], 13);
       
        L.tileLayer.wms('http://localhost:8585/geoserver/wms?', {
            //layers: 'a nice brazil'
            //layers: 'beautiful brazil'
            layers: 'sul'
        }).addTo(map);

        map.on("move", function () {
          console.log(map.getCenter().toString());
        });

    }

    render(){
        return <div id="supermap"></div>
    }

    /* render(){
        return <>
            <MapContainer center={[64.128701,-21.942068]} zoom={15} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    //url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    url='http://localhost:8585/geoserver/wms?SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&FORMAT=image%2Fpng&TRANSPARENT=true&tiled=true&STYLES&LAYERS=a%20nice%20brazil&exceptions=application%2Fvnd.ogc.se_inimage&tilesOrigin={x}%2C{y}&WIDTH=256&HEIGHT=256&SRS=EPSG%3A4326&BBOX=-52.03125%2C-27.421875%2C-51.328125%2C-26.71875'
                />
                <WMSTileLayer
                    //url='http://localhost:8585/geoserver/wms?SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&FORMAT=image%2Fpng&TRANSPARENT=true&tiled=true&STYLES&LAYERS=a%20nice%20brazil&exceptions=application%2Fvnd.ogc.se_inimage&tilesOrigin=-73.9830625%2C-33.8811009&WIDTH=256&HEIGHT=256&SRS=EPSG%3A4326&BBOX=-52.03125%2C-27.421875%2C-51.328125%2C-26.71875'
                    url='http://localhost:8585/geoserver/wms?SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&FORMAT=image%2Fpng&TRANSPARENT=true&tiled=true&STYLES&LAYERS=a%20nice%20brazil'
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
        </>
    } */
}