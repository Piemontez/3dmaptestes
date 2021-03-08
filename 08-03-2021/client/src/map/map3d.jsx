import React from 'react';

export default class Map3D extends React.Component {
    componentDidMount(){
        // eslint-disable-next-line no-undef
        var map = new OSMBuildings({ //Definido no script importado no html
            container: 'map3d',
            position: { latitude: 64.128701, longitude: -21.942068 },
            zoom: 16,
            minZoom: 1,
            maxZoom: 20,
        })
    
        map.addMapTiles('https://tile.openstreetmap.org/{z}/{x}/{y}.png');
        map.addGeoJSONTiles('https://{s}.data.osmbuildings.org/0.2/anonymous/tile/{z}/{x}/{y}.json');
        map.addOBJ(
            'http://localhost:3000/object/teapot',
            {
                latitude: 64.128701,
                longitude: -21.942068
            },
            {
                scale: 20,
                color: "#222255"
            }
        );
        map.addOBJ(
            'http://localhost:3000/object/teddybear',
            {
                latitude: 64.128000,
                longitude: -21.938068
            },
            {
                altitude: 160,
                scale: 3,
                color: "#6b602e"
            }
        );
        map.addOBJ(
            'http://localhost:3000/object/cow',
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
        return <div id="map3d"/>
    }
}