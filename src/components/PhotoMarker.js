import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { greatPlaceStyle, greatPlaceStyleHover } from './PhotoMakerStyle';

import { connect } from 'react-redux';


class PhotoMarker extends Component {
    static propTypes = {
        photoId: PropTypes.number,
        text: PropTypes.string,
        position: PropTypes.object,
    };

    render() {

        const { hoverPhoto, photoId, photoUrl } = this.props
        const style = (hoverPhoto === photoId) ? greatPlaceStyleHover : greatPlaceStyle;

        return (
            <div className="hint hint--html hint--info hint--top" style={style}>
                <img src= {photoUrl} alt={photoUrl}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { hoverPhoto } = state.appInfo;

    return {
        hoverPhoto
    }
}

export default connect(mapStateToProps)(PhotoMarker);