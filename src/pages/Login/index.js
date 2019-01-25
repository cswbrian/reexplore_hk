import React, { Component } from 'react';
import {connect} from 'react-redux';
import {marketList, exchangeList, startStreamingPrice, startTrading} from '../../util/Actions';

class Login extends Component {
    componentDidMount() {

    }

    onClickedStreamingPrice(e) {
        e.preventDefault();
        this.props.dispatch(startStreamingPrice("BTCUSD"));
    }

    onClickedTrading(e) {
        e.preventDefault();
        this.props.dispatch(startTrading("BTCUSD"));

    }

    render() {
        return (
            <div>This is Login page</div>
        );
    }
}

function mapStateToProps(state) {
    const { selectedSymbol, userID, marketList, exchangeList, bidAsk} = state.appInfo;

    return {
        selectedSymbol,
        userID,
        marketList,
        exchangeList,
        bidAsk
    }
}

export default connect(mapStateToProps)(Login);