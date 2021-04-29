import * as Cesium from 'cesium';
import React from 'react';

export default class Map3D extends React.Component {
    componentDidMount(){
        Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJkMTYwYTk1ZC00ZTQ5LTQxMmEtYjQyZi01YTgyMDRkNzkxMzQiLCJpZCI6NDU2NjksImlhdCI6MTYxNTMxMjMyN30.6Vqvf-4RtrFxzGFkdoAxokmcWWRkwsc7gw9-yBQL4S4';
        
        const viewer = new Cesium.Viewer('map3d', {
          terrainProvider: Cesium.createWorldTerrain()
        }); 
        
        viewer.shadows = true;
        viewer.scene.primitives.add(Cesium.createOsmBuildings());   

        viewer.camera.flyTo({
          destination : Cesium.Cartesian3.fromDegrees(-21.938068, 64.128000, 400),
          //orientation : {
          //  heading : Cesium.Math.toRadians(0.0),
          //  pitch : Cesium.Math.toRadians(-15.0),
          //}
        });

        //teste fromid - funciona, mas depende do website
        /* Cesium.IonResource.fromAssetId(353567)
          .then(function (resource) {
            console.log(resource)
            viewer.entities.add({
              position: Cesium.Cartesian3.fromDegrees(-21.938068, 64.128000, 100),
              model: {
                uri: resource,
                scale: 10.0,
                color: Cesium.Color["RED"]
              },
            });
          }) */


        var origin = Cesium.Cartesian3.fromDegrees(-21.938068, 64.128000, 100);
        var modelMatrix = Cesium.Transforms.eastNorthUpToFixedFrame(origin);

        var model = viewer.scene.primitives.add(Cesium.Model.fromGltf({
          url : './teapot.glb',//'http://localhost:3000/object/cow.glb',
          show : true,                     // default
          modelMatrix : modelMatrix,
          scale : 2.0,                     // double size
          minimumPixelSize : 128,          // never smaller than 128 pixels
          maximumScale: 20000,             // never larger than 20000   model size (overrides minimumPixelSize)
          allowPicking : false,            // not pickable
          debugShowBoundingVolume : false, // default
          debugWireframe : false
        }));

        model.readyPromise.then((e) => viewer.entities.add({
          position: Cesium.Cartesian3.fromDegrees(-21.938068, 64.128000, 100),
          model: e
        }));


        //teste com arquivos locais / do servidor, não funciona de jeito nenhum
        /* var position = Cesium.Cartesian3.fromDegrees(
          -21.938068, 
          64.128000,
          100
        );
        var heading = Cesium.Math.toRadians(135);
        var pitch = 0;
        var roll = 0;
        var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
        var orientation = Cesium.Transforms.headingPitchRollQuaternion(
          position,
          hpr
        );
        
        var modelMatrix = Cesium.Transforms.eastNorthUpToFixedFrame(position);

        var model = viewer.scene.primitives.add(Cesium.Model.fromGltf({
          url : 'http://localhost:3000/object/cow.glb',
          modelMatrix : modelMatrix,
          scale: 2e7
        }));

        viewer.entities.add({
          name: 'nice',
          position: position,
          orientation: orientation,
          model: {
            uri: 'http://localhost:3000/object/cow.glb',
            scale: 10.0
          },
        }); */
    }

    render(){
        return <div style={{height: "54vh", width: "50%"}} id="map3d"/>
    }
}