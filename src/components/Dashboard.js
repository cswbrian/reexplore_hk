import React, { Component } from 'react';
import { Container } from 'reactstrap';
import {connect} from 'react-redux';
import {changeHoverPhoto} from '../util/Actions';


class Dashboard extends Component {
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
            <div>Empty Dashboard</div>
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

export default connect(mapStateToProps)(Dashboard);