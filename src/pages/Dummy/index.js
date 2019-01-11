import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>This is Dummy page</div>
        );
    }
}

function mapStateToProps(state) {
    return {
        ...state.App
    };
}

export default connect(
    mapStateToProps,
)(Home);