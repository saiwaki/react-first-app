import React, { Component } from 'react'
import { Helmet } from "react-helmet"
import { withGoogleMap, withScriptjs, GoogleMap, Marker } from "react-google-maps"

const MapWithAMarker = withScriptjs(withGoogleMap(props =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
    mapTypeId="roadmap"
  >
    <Marker
      position={{ lat: -34.397, lng: 150.644 }}
    />
  </GoogleMap>
));

export default class Index extends Component {

  constructor(props) {
    super(props)
  }
  
  render(){
    return(
      <div>
        <Helmet
          title="About"
          meta={[
            { name: 'twitter:card', content: 'summary' },
            { name: 'twitter:title', content: 'About' },
            { property: 'og:title', content: 'About' }
          ]}
        />
        <div>
          about
        </div>
        <MapWithAMarker
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyB8H5B22SGUDi4CiPkGd4c__UDAHH4bt4I"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `300px` }} />}
          mapElement={<div style={{ height: `300px` }} />}
        />
      </div>
    )
  }
}
