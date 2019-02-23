import React, { Component } from 'react';
import {connect} from 'react-redux';
import {changeHoverPhoto} from '../../util/Actions';


class Register extends Component {
    componentDidMount() {

    }

    onClickedStreamingPrice(e) {
        e.preventDefault();

    }

    onClickedTrading(e) {
        e.preventDefault();

    }

    render() {
        return (
            <div>This is Register page</div>
        );
    }
}

function mapStateToProps(state) {
    const { selectedSymbol, userId, marketList, exchangeList, bidAsk} = state.appInfo;

    return {
        selectedSymbol,
        userId,
        marketList,
        exchangeList,
        bidAsk
    }
}

export default connect(mapStateToProps)(Register);