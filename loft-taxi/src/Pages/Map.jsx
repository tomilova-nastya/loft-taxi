import React from 'react';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';

mapboxgl.accessToken = 'pk.eyJ1IjoibmFzdGFzc2phdG9taWxvdmEiLCJhIjoiY2tmcXYxbzB2MG9xajJ4bXRmajdkOG9ndSJ9.C_hEs0TRF88ckid55IGWGQ';

export class Map extends React.Component {

    componentDidMount() {
      this.map = new mapboxgl.Map({
        container: this.mapContainer,
        style: 'mapbox://styles/mapbox/streets-v9',
        center: [37.537565, 55.796800],
        zoom: 15
      });
    }
  
    componentWillUnmount() {
      this.map.remove();
    }

    setMapContainer = (element) => {
        this.mapContainer = element;
    }
  
    render() {
        return <div className="mapContainer" ref={this.setMapContainer} />;
    }
  }