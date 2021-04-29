import React from 'react';
import mapboxgl from 'mapbox-gl';

export default class Map extends React.Component{
    map;

    componentDidMount(){
        mapboxgl.accessToken = 'pk.eyJ1IjoiZGF2aXBtZWxsbyIsImEiOiJja20wdTFlOWowMXFjMnB1bDU1anVqZTJ3In0.7uWn6alZ_5O6Wi36PBhRYw'
        this.map = new mapboxgl.Map({
            container: 'mapbox-map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [35, 63],
            zoom: 12,
        });

        var layers = this.map.getStyle().layers;
        var labelLayerId;
        for (var i = 0; i < layers.length; i++) {
            if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
                labelLayerId = layers[i].id;
                break;
            }
        }

        // The 'building' layer in the Mapbox Streets
        // vector tileset contains building height data
        // from OpenStreetMap.
        this.map.addLayer(
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
        );
    }
    
    render(){
        return <div id='mapbox-map' style={{height: '70vh', width: '100%'}}>
            
        </div>
    }
}