import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react'

const AnyReactComponent = ({text, img}) => <div className="google--img"><img height="75px" width="75px" src={img} alt="PRAMAR"/></div>

class Maps extends Component {
    static defaultProps = {
        center: {
          lat: 54.487178419300115,
          lng: 18.2399423529357
        },
        zoom: 11
      };

    render() {
        return (
        <div style={{ height: '600px', width: '100%', zindex: '-1'}}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={54.487178419300115}
            lng={18.2399423529357}
            text="PRAMAR"
            img={"logo-kolor.svg"}
          />
        </GoogleMapReact>
      </div>
        );
    }
}

export default Maps;
