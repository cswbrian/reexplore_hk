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

                <div style={style}>
                    <img style={{height: '50px', width:'50px'}} src={this.props.photoUrl} alt={this.props.photoUrl}/>
                    <p>{this.props.description} </p>
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

export default connect(mapStateToProps)(NumberMarker);