import React from 'react';


export default class Map3D extends React.Component {

    componentDidMount(){
        // eslint-disable-next-line no-undef
        var map = new OSMBuildings({
            container: 'map3d',
            position: { latitude: 64.128701, longitude: -21.942068 },
            zoom: 16,
            minZoom: 15,
            maxZoom: 20,
        })

        console.log(map)
    
        map.addMapTiles('https://tile.openstreetmap.org/{z}/{x}/{y}.png');
        map.addGeoJSONTiles('https://{s}.data.osmbuildings.org/0.2/anonymous/tile/{z}/{x}/{y}.json');
    }

    render(){
        return <div id="map3d"/>
    }
}