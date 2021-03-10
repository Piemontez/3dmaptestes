/* eslint-disable no-undef */
import React from 'react';

export default class Map3D extends React.Component {
    componentDidMount(){
        Cesium.Ion.defaultAccessToken = 'inserir_token_aqui';
        
        const viewer = new Cesium.Viewer('map3d', {
          terrainProvider: Cesium.createWorldTerrain()
        });    

        viewer.scene.primitives.add(Cesium.createOsmBuildings());   

        viewer.camera.flyTo({
          destination : Cesium.Cartesian3.fromDegrees(-21.938068, 64.128000, 400),
          orientation : {
            heading : Cesium.Math.toRadians(0.0),
            pitch : Cesium.Math.toRadians(-15.0),
          }
        });

        //teste fromid - funciona, mas depende do website
        Cesium.IonResource.fromAssetId(353567)
          .then(function (resource) {
            viewer.entities.add({
              position: Cesium.Cartesian3.fromDegrees(-21.938068, 64.128000, 100),
              model: {
                uri: resource,
                scale: 10.0
              },
            });
          })

        //teste com arquivos locais / do servidor, não funciona de jeito nenhum
        var position = Cesium.Cartesian3.fromDegrees(
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

        viewer.entities.add({
          name: 'nice',
          position: position,
          orientation: orientation,
          model: {
            uri: 'teapot.glb',
            minimumPixelSize: 128,
            maximumScale: 20000,
          },
        });

        //viewer.entities.add({
        //  position: Cesium.Cartesian3.fromDegrees(-21.937068, 64.128000, 100),
        //  model: {
        //    url: '../../../server/obj/teapot.gltf',
        //    minimumPixelSize: 128,
        //    maximumScale: 20000,
        //  }
        //}); 
    }

    render(){
        return <div style={{height: "54vh", width: "50%"}} id="map3d"/>
    }
}