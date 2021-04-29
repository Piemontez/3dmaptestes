import React from 'react';
import mapboxgl from 'mapbox-gl';

export default class Map extends React.Component{
    componentDidMount(){
        mapboxgl.accessToken = 'pk.eyJ1IjoiZGF2aXBtZWxsbyIsImEiOiJja20wdTFlOWowMXFjMnB1bDU1anVqZTJ3In0.7uWn6alZ_5O6Wi36PBhRYw'
        var map = new mapboxgl.Map({
            container: 'mapbox-map',
            style: 'mapbox://styles/mapbox/light-v10',
            zoom: 8,
            center: [-74.5447, 40.6892]
        });

        map.on('load', function () {
            map.addSource('wms-source', {
                'type': 'raster',
                // use the tiles option to specify a WMS tile source URL
                // https://docs.mapbox.com/mapbox-gl-js/style-spec/sources/
                'tiles': [
                    'http://localhost:8585/geoserver/wms?SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&FORMAT=image%2Fpng&TRANSPARENT=true&STYLES&LAYERS=a%20nice%20brazil&exceptions=application%2Fvnd.ogc.se_inimage&SRS=EPSG%3A4326&WIDTH=768&HEIGHT=384&BBOX={bbox-epsg-3857}'
                ],
                'tileSize': 256
            });
            map.addLayer(
            {
                'id': 'a nice brazil',
                'type': 'raster',
                'source': 'wms-source',
            },
                'aeroway-line'
            );
        });


        // The 'building' layer in the Mapbox Streets
        // vector tileset contains building height data
        // from OpenStreetMap.
        /* this.map.addLayer(
            {
                'id': 'add-3d-buildings',
                'source': 'composite',
                'source-layer': 'building',
                'filter': ['==', 'extrude', 'true'],
                'type': 'fill-extrusion',
                'minzoom': 15,
                'paint': {
                    'fill-extrusion-color': '#aaa',
                    
                    // Use an 'interpolate' expression to
                    // add a smooth transition effect to
                    // the buildings as the user zooms in.
                    'fill-extrusion-height': [
                        'interpolate',
                        ['linear'],
                        ['zoom'],
                        15,
                        0,
                        15.05,
                        ['get', 'height']
                    ],
                    'fill-extrusion-base': [
                        'interpolate',
                        ['linear'],
                        ['zoom'],
                        15,
                        0,
                        15.05,
                        ['get', 'min_height']
                    ],
                    'fill-extrusion-opacity': 0.6
                }
            },

            labelLayerId
        ); */
    }
    
    render(){
        return <div id='mapbox-map' style={{height: '70vh', width: '100%'}}>
            
        </div>
    }
}