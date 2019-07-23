import React from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';
class ReactMap extends React.Component {
   render() {
   const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter = { { lat: 24, lng: 121 } }
        defaultZoom = { 13 }
      >
      </GoogleMap>
   ));
   return(
      <div>
        <GoogleMapExample
          containerElement={ <div style={{ height: '600px', width: '100%' }} /> }
          mapElement={ <div style={{ height: '100%' }} /> }
        />
      </div>
   );
   }
};
export default ReactMap;