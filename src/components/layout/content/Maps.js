import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react'

const AnyReactComponent = ({text}) => <div>{text}</div>

class Maps extends Component {
    static defaultProps = {
        center: {
          lat: 59.95,
          lng: 30.33
        },
        zoom: 11
      };

    render() {
        return (
        <div style={{ height: '600px', width: '100%', zindex: '-1'}}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyApP1cuf0iCUx4uGSCLg1P4QFLKiVvKgtU" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
        );
    }
}

export default Maps;
