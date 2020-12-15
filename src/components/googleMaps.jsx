import React, { Component } from "react";
import { Map, GoogleApiWrapper , Marker} from 'google-maps-react';

const KeySecret = process.env.REACT_APP_GOOGLE_API

const mapStyles = {
  width: '370px',
  height: '300px'
};

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={15}
        style={mapStyles}
        containerStyle = {mapStyles}

        initialCenter={
          {
            lat: -23.626760639236714,
            lng: -46.634016582373135
          }
        }
      >
      <Marker />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: KeySecret
})(MapContainer);