import React from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

  const Map = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyC6wQaQsgfm_w4qxJo2zsmyMAG_Tf5KeA8&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: 39.9611755, lng: -82.9987942 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 39.9611755, lng: -82.9987942 }} onClick={props.onMarkerClick} />}
    {props.isMarkerShown && <Marker position={{ lat: 38.9611755, lng: -82.9987942 }} onClick={props.onMarkerClick} />}
    {props.isMarkerShown && <Marker position={{ lat: 39.9611755, lng: -81.9987942 }} onClick={props.onMarkerClick} />}
  </GoogleMap>
)

class MapContainer extends React.PureComponent {
  state = {
    isMarkerShown: false,
  }

  componentDidMount() {
    this.delayedShowMarker()
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true })
    }, 3000)
  }

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false })
    this.delayedShowMarker()
  }

  render() {
    return (
      <Map
        isMarkerShown={this.state.isMarkerShown}
        onMarkerClick={this.handleMarkerClick}
      />
    )
  }
}

export default MapContainer;
