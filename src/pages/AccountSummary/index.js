import React, { Component } from 'react';
import { connect } from 'react-redux';

class AccountSummary extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>This is AccountSummary</div>
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
)(AccountSummary);