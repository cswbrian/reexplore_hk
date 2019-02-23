import React, {Component } from 'react';
import PropTypes from 'prop-types'

import {connect} from 'react-redux';


class PinMarker extends Component {
    static propTypes = {
        position: PropTypes.object,
    };


    render() {

        return (
            <div className="hint hint--html hint--info hint--top" >
                <img src="/img/map_pin.png" style={{width: 50}}></img>

            </div>
        );
    }
}

function mapStateToProps(state) {
    const {} = state.appInfo;

    return {

    }
}

export default connect(mapStateToProps)(PinMarker);