import React, { Component } from 'react';
import {connect} from 'react-redux';
import {marketList, exchangeList, startStreamingPrice, startTrading} from '../util/Actions';
import GoogleMapReact from 'google-map-react';

class MapView extends Component {
    componentDidMount() {

    }

    onClickedStreamingPrice(e) {
        e.preventDefault();
        //this.props.dispatch(startStreamingPrice("BTCUSD"));
    }

    onClickedTrading(e) {
        e.preventDefault();
        //this.props.dispatch(startTrading("BTCUSD"));

    }

    render() {
        return (
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: this.props.map_api_key }}
                    defaultCenter={this.props.map_center}
                    defaultZoom={this.props.map_zoom}
                >
                </GoogleMapReact>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { map_zoom, map_center, map_api_key} = state.appInfo;

    return {
        map_zoom,
        map_center,
        map_api_key
    }
}

export default connect(mapStateToProps)(MapView);