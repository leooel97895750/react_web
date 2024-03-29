/*
首頁的Google Maps導航
*/
import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class GoogleMaps extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    };
  } 

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

  render() {
    return (
      <Map google={this.props.google}
           initialCenter={{
             lat: 24.5,
             lng: 121
           }}
           zoom={13}
           onClick={this.onMapClicked}>
        <Marker onClick={this.onMarkerClick}
                name={'descripton'}
                position={{lat: 39.9055688, lng: 116.39749}}/>

        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
          <div>
            <h3>{this.state.selectedPlace.name}</h3>
          </div>
        </InfoWindow>
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBCfynfSQU-J-AVUeW3IPRK79atoD2UtRE',
  language: 'chinese'
})(GoogleMaps)
