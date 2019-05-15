import React, { Component } from 'react';
import { GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';


import CurrentLocation from './Map';

export class companyMaps extends Component {
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
      <div style={{width: '100%', height:500, position: 'relative', left: this.props.left}}>
      <CurrentLocation
              centerAroundCurrentLocation
              google={this.props.google}
            >
              <Marker onClick={this.onMarkerClick} name={'current location'} Cu />
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
        <div className="_ch _ci _b7">
          <div className="_cj _ck _cl _cm _a3 _a4 _a5 _a6 _a7 _a8 _a9 _aa _ab _ac _ad _ae _af _ag _ah _ai _aj _ak _al _am _an _b1 _b2 _b3 _ar _b4 _at _au _av _aw">
            <div className="_bm _bn _bo _a3 _a4 _a5 _a6 _a7 _a8 _a9 _aa _ab _ac _ad _ae _af _ag _ah _ai _aj _bt _bu _bv _bw _b1 _b2 _b3 _ar _b4 _bx _by _bz _c0">
              <div className="_cn _a3 _a4 _a5 _a6 _a7 _a8 _a9 _aa _ab _ac _ad _ae _af _ag _ah _ai _aj _bt _bu _bv _bw _ao _ap _aq _ar _as _bx _by _bz _c0" >
                <svg height="4" width="4" class="_co _cp"><circle cx="2" cy="2" r="2" fill="#AFAFAF"></circle></svg>
                <svg height="35" width="8" class="_co _cp"><rect height="35" width="1" x="3.5" fill="#d2d2d2"></rect></svg>
                <svg height="6" width="6" class="_co _cp"><rect height="6" width="6" fill="#000000"></rect></svg>
              </div>
            </div>
            <div class="_cq _c6 _k _b7">
              <button role="link" type="button" class="_cr _c6 _cs _ct _a3 _a4 _a5 _a6 _a7 _a8 _a9 _aa _ab _ac _ad _ae _af _ag _ah _ai _aj _ak _al _am _an _ao _ap _aq _ar _as _at _au _av _aw _ax _ay _az _b0 _ae _af _ag _a2">
                <div class="_a _cu _cv _cw _cx _a3 _a4 _a5 _a6 _a7 _a8 _a9 _aa _ab _ac _ad _ae _af _ag _ah _ai _aj _ak _al _am _an _b1 _b2 _b3 _ar _b4 _at _au _av _aw">Enter Source here</div>
              </button>
              <button role="link" type="button" class="whereTo _cr _c6 _cs _ct _cz _a3 _a4 _a5 _a6 _a7 _a8 _a9 _aa _ab _ac _ad _ae _af _ag _ah _ai _aj _ak _al _am _an _ao _ap _aq _ar _as _at _au _av _aw _ax _ay _az _b0 _ae _af _ag _a2">
                <div class="_a _cu _cv _d0 _a3 _a4 _a5 _a6 _a7 _a8 _a9 _aa _ab _ac _ad _ae _af _ag _ah _ai _aj _ak _al _am _an _b1 _b2 _b3 _ar _b4 _at _au _av _aw" >Enter destination here</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyA1QVjA2sVyrm2L4ZOMJUO7Jbnci36TgoM'
})(companyMaps);