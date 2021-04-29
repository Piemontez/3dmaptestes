import React from 'react';

export default class Map3D extends React.Component {
    async componentDidMount(){
        // eslint-disable-next-line no-undef
        var map = new OSMBuildings({ //Definido no script importado no html
            container: 'map3d',
            position: { latitude: -26.913785, longitude: -48.660875 },
            zoom: 16,
            minZoom: 16,
            //maxZoom: 20,
        });

        map.addMapTiles('https://tile.openstreetmap.org/{z}/{x}/{y}.png');
        //map.addMapTiles('http://localhost:8585/geoserver/wms?SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&FORMAT=image%2Fpng&TRANSPARENT=true&STYLES&LAYERS=a%20nice%20brazil&exceptions=application%2Fvnd.ogc.se_inimage&SRS=EPSG%3A4326&WIDTH=768&HEIGHT=677&BBOX=-477.421875%2C-75.849609375%2C-342.421875%2C43.154296875');
        map.addGeoJSONTiles('https://{s}.data.osmbuildings.org/0.2/anonymous/tile/{z}/{x}/{y}.json');
        map.addMarker({latitude: 64.129800, longitude: -21.942068, altitude: 10});
        map.addMarker({latitude: 64.130600, longitude: -21.945268, altitude: 10});
        map.addMarker({latitude: 64.131400, longitude: -21.949068, altitude: 10});
        map.addMarker({latitude: 64.132200, longitude: -21.952868, altitude: 10});
                
        map.addOBJ(
            'http://localhost:3000/obj/container2.obj',
            {
                latitude: -26.913785,
                longitude: -48.660875
            },
            {
                altitude: 160,
                scale: 2,
                color: "#6b602e"
            }
        );
        map.addOBJ(
            'http://localhost:3000/obj/cow.obj',
            {
                latitude: 64.128000,
                longitude: -21.938068
            },
            {
                altitude: 80,
                rotation: 90,
                scale: 20,
                color: "#ffbbdd"
            }
        );
    }

    render(){
        return <div style={{height: "54vh", width: "50%"}} id="map3d"/>
    }
}