import React from 'react';
import Map from '../map/map'
import Map3D from '../map/map3d';

class Index extends React.Component {
  render() {
    return <>
      {/* <div className="App">
        <Map/>
      </div> */}
      <div className="nice">
        <Map3D/>
      </div>
    </>
  }
}

export default Index;
