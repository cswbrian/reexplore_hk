import React, {Component } from 'react';
import PropTypes from 'prop-types'
import {greatPlaceStyle, greatPlaceStyleHover} from './MakerStyle';

import {connect} from 'react-redux';


class NumberMarker extends Component {
    static propTypes = {
        photoId: PropTypes.number,
        text: PropTypes.string,
        position: PropTypes.object,
    };

    constructor(props) {
        super(props);
    }

    render() {

        const style = (this.props.hoverPhoto === this.props.photoId )? greatPlaceStyleHover : greatPlaceStyle;

        return (
            <div className="hint hint--html hint--info hint--top" style={style}>
                <div>{this.props.photoId}</div>
                <div style={{width: 80}} className="hint--content">
                    {this.props.text}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { hoverPhoto} = state.appInfo;

    return {
        hoverPhoto
    }
}

export default connect(mapStateToProps)(NumberMarker);