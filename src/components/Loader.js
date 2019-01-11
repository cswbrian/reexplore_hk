import React, { Component } from 'react';
import { connect } from 'react-redux';

import loader from '../assets/img/spiner.gif';

class Loader extends Component {
    render() {
        return (
            <div>
                {
                    !this.props.loader &&
                    <div className="spinner">
                        <img src={ loader } alt="" />
                    </div>
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        loader: state.auth.loader
    };
}

export default connect(
    mapStateToProps,
)(Loader);