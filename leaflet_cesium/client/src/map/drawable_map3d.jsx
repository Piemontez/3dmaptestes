import * as Cesium from 'cesium';
import React from 'react';

const positionArray = [
    [-21.938068, 64.128000],
    [-21.938268, 64.128100],
    [-21.938468, 64.128300],
    [-21.938568, 64.128700],
    [-21.938968, 64.129700],
    [-21.938768, 64.129700],
    [-21.938568, 64.129600],
    [-21.938268, 64.129300],
    [-21.937868, 64.128600],
    [-21.938468, 64.128000],
  ]

export default class Map3D extends React.Component {
    componentDidMount(){
        Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJkMTYwYTk1ZC00ZTQ5LTQxMmEtYjQyZi01YTgyMDRkNzkxMzQiLCJpZCI6NDU2NjksImlhdCI6MTYxNTMxMjMyN30.6Vqvf-4RtrFxzGFkdoAxokmcWWRkwsc7gw9-yBQL4S4';
        
        const viewer = new Cesium.Viewer('map3d', {
            terrainProvider: Cesium.createWorldTerrain(),
        });    

        viewer.shadows = true;
        viewer.scene.primitives.add(Cesium.createOsmBuildings());   

        viewer.camera.flyTo({
          destination : Cesium.Cartesian3.fromDegrees(-21.938068, 64.128000, 400),
        });

        viewer.cesiumWidget.screenSpaceEventHandler.removeInputAction(
            Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK
        );

        viewer.cesiumWidget.screenSpaceEventHandler.removeInputAction(
            Cesium.ScreenSpaceEventType.LEFT_CLICK
        );

        function createPoint(worldPosition) {
            return viewer.entities.add({
                position: worldPosition,
                point: {
                    color: Cesium.Color.WHITE,
                    pixelSize: 5,
                    heightReference: Cesium.HeightReference.CLAMP_TO_GROUND,
                },
            });
        }

        function drawShape(positionData) {
            return viewer.entities.add({
                polyline: {
                    positions: positionData,
                    clampToGround: true,
                    width: 3,
                },
            });
        }

        var activeShapePoints = [];
        var floatingPoint;
        var handler = new Cesium.ScreenSpaceEventHandler(viewer.canvas);


       /*  positionArray.forEach(
            (e) => {
                if (activeShapePoints.length === 0) {
                    floatingPoint = createPoint({x: e[0], y: e[1]});
                    activeShapePoints.push({x: e[0], y: e[1]});
                    var dynamicPositions = new Cesium.CallbackProperty(function () {
                        return activeShapePoints;
                    }, false);
                    drawShape(dynamicPositions);
                }
                activeShapePoints.push({x: e[0], y: e[1]});
                createPoint({x: e[0], y: e[1]});
            }
        );
        terminateShape(); */


        function drawEarthShape(position){
            var earthPosition = viewer.scene.pickPosition(position);
            console.log(activeShapePoints)
            if (Cesium.defined(earthPosition)) {
                if (activeShapePoints.length === 0) {
                    floatingPoint = createPoint(earthPosition);
                    activeShapePoints.push(earthPosition);
                    var dynamicPositions = new Cesium.CallbackProperty(function () {
                        return activeShapePoints;
                    }, false);
                    drawShape(dynamicPositions);
                }
                activeShapePoints.push(earthPosition);
                createPoint(earthPosition);
            }
        }
        
        function terminateShape() {
            activeShapePoints.pop();
            drawShape(activeShapePoints);
            viewer.entities.remove(floatingPoint);
            floatingPoint = undefined;
            activeShapePoints = [];
        }

        //bind mouse move
        handler.setInputAction(function (event) {
            if (Cesium.defined(floatingPoint)) {
                var newPosition = viewer.scene.pickPosition(event.endPosition);
                if (Cesium.defined(newPosition)) {
                    floatingPoint.position.setValue(newPosition);
                    activeShapePoints.pop();
                    activeShapePoints.push(newPosition);
                }
            }
        }, Cesium.ScreenSpaceEventType.MOUSE_MOVE);
        
        //bind left click
        handler.setInputAction(function (event) {
            drawEarthShape(event.position)
        }, Cesium.ScreenSpaceEventType.LEFT_CLICK);

        //bind right click
        handler.setInputAction(function () {
            terminateShape();
        }, Cesium.ScreenSpaceEventType.RIGHT_CLICK);
    }

    render(){
        return <div style={{height: "54vh", width: "50%"}} id="map3d"/>
    }
}