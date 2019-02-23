import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getPhotos, changeHoverPhoto, changeMapBound, draggingMap} from '../util/Actions';
import GoogleMapReact from 'google-map-react';
import PropTypes from "prop-types";

import NumberMarker from "./NumberMarker";
import PinMarker from "./PinMarker";



class MapView extends Component {
    static propTypes = {
        onCenterChange: PropTypes.func, // @controllable generated fn
        onZoomChange: PropTypes.func, // @controllable generated fn
        onBoundsChange: PropTypes.func,

    };

    constructor(props) {
        super(props);
        this.state = {
            placeholder: null,
        };
    }

    componentDidMount() {
    }

    onBoundsChange = (newPosition) => {
        let offsetBound = null;
        let oldBound = (this.props.map_bound)?this.props.map_bound.bounds:null;
        let newBound = newPosition.bounds;

        if (oldBound == null) {
            offsetBound = {
                xs: newBound.nw.lng,
                xe: newBound.ne.lng,
                ys: newBound.nw.lat,
                ye: newBound.se.lat,
            }
        } else {
            // let offset_x = newBound.center.lng - oldBound.center.lng;
            // let offset_y = newBound.center.lat - oldBound.center.lat;
        //     offsetBound= {
        //         xs: newBound.nw.lng + offset_x,
        //         xe: Math.max(newBound.ne.lng + offset_x, oldBound.ne.lng),
        //         ys: newBound.nw.lat + offset_y,
        //         ye: newBound.se.lat + offset_y,
        //     }
            offsetBound = {
                xs: newBound.nw.lng,
                xe: newBound.ne.lng,
                ys: newBound.nw.lat,
                ye: newBound.se.lat,
            }
        }

        this.props.dispatch(getPhotos(offsetBound.nw, offsetBound.ne, offsetBound.sw, offsetBound.se, newPosition.zoom));
        this.props.dispatch(changeMapBound(newPosition));
    };


    //------
    // Marker function
    onMarkerEnter = (key) => {
        this.props.dispatch(changeHoverPhoto(key));
    };
    onMarkerClicked = (key) => {
        console.log("clicked on the photo: " + key);
    };
    onMarkerLeave = (key) => {
        this.props.dispatch(changeHoverPhoto(null));
    };

    //------
    // Map callback function
    onMapClicked = (e) => {
        // x = e.x;
        // y = e.y;
        console.log("onMapClicked at: (" + e.x + " " + e.y + " " + e.lat + ", " + e.lng + " " + e.event);

    };
    onDrag = (map) => {
        let bound = {
            center: {
                lng: map.center.lng(),
                lat: map.center.lat(),
            }
        }
        this.props.dispatch(draggingMap(bound));
    };

    onDragStarted= (key) => {
        console.log("onDragStarted");
    };


    render() {
        let dropPin;
        if (this.props.isDroppingPin) {
            dropPin = <PinMarker
                lat={this.props.currPin.lat}
                lng={this.props.currPin.lng}
            />
        }
        return (
            <div style={{ height: '100%',background: "#22BBFF"}}>
                <GoogleMapReact
                    key={"googlemap"}
                    bootstrapURLKeys={{ key: this.props.map_api_key }}
                    defaultCenter={this.props.map_center}
                    defaultZoom={this.props.map_zoom}
                    onChange={this.onBoundsChange}
                    onClick={this.onMapClicked}
                    onDrag={this.onDrag}
                    onDragStarted={this.onDragStarted}
                    onChildClick={this.onMarkerClicked}
                    onChildMouseEnter={this.onMarkerEnter}
                    onChildMouseLeave={this.onMarkerLeave}
                >


                    {Object.keys(this.props.map_photos).map((key, i) => (
                        <NumberMarker key={this.props.map_photos[key].id}
                                      lng={this.props.map_photos[key].lng}
                                      lat={this.props.map_photos[key].lat}
                                      photoId={this.props.map_photos[key].id}
                                      text={this.props.map_photos[key].description}/>
                    ))}

                    {dropPin}

                </GoogleMapReact>

            </div>
        );
    }
}

function mapStateToProps(state) {
    const { map_zoom, map_center, map_api_key, map_photos, map_bound, currPin, hoverPhoto, isDroppingPin} = state.appInfo;

    return {
        map_zoom,
        map_center,
        map_api_key,
        map_photos,
        map_bound,
        currPin,
        hoverPhoto,
        isDroppingPin
    }
}

export default connect(mapStateToProps)(MapView);