/*global google*/
import React, { Component } from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  DirectionsRenderer
} from "react-google-maps";
class Map extends Component {
  state = {
    directions: null
  };

  componentDidMount() {
    const directionsService = new google.maps.DirectionsService();
    
    // const origin = { lat: 39.9611755, lng: -82.9987942 };
    // const destination = { lat: 39.9621755, lng: -82.9984942 };
    const origin =  this.props.origin ;
    const destination = this.props.destination ;

    directionsService.route(
      {
        origin: origin,
        destination: destination,
        travelMode: google.maps.TravelMode.DRIVING
      },
      (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          this.setState({
            directions: result
          });
        } else {
          console.error(`error fetching directions ${result}`);
        }
      }
    );
  }

  render() {
    const GoogleMapExample = withGoogleMap((state) => (
      <GoogleMap
        defaultCenter={{ lat: 39.9611755, lng: -82.9987942 }}
        defaultZoom={13}
      >
        <DirectionsRenderer
          directions={this.state.directions}
        />
      </GoogleMap>
    ));

    return (
      <div>
        <GoogleMapExample
          containerElement={<div style={{ height: `200px`, width: "200px" }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
}

export default Map;