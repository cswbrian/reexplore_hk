import React, { Component } from 'react';
import {connect} from 'react-redux';
import {login} from '../../util/Actions';


class Login extends Component {
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
            <div>This is Login page</div>
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

export default connect(mapStateToProps)(Login);