import React, { Component } from "react";
import { GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";

import CurrentLocation from "./Map";

export class logisticsMaps extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    return (
      <div>
        <div
          style={{
            width: "100%",
            height: 500,
            position: "relative",
            left: this.props.left
          }}
        >
          <CurrentLocation
            centerAroundCurrentLocation
            google={this.props.google}
          >
            <Marker onClick={this.onMarkerClick} name={"current location"} Cu />
            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}
              onClose={this.onClose}
            >
              <div>
                <h4>{this.state.selectedPlace.name}</h4>
              </div>
            </InfoWindow>
          </CurrentLocation>
        </div>
        <div>
          <label>From:</label>
          <input placeholder="Enter Source Location" type="text" />
          <br />
          <label>To:</label>
          <input placeholder="Enter Destination Location" type="text" />
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "API KEY"
})(logisticsMaps);
