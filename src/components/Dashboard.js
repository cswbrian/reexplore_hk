import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import { Table, Button } from 'react-bootstrap';
import {connect} from 'react-redux';
import {marketList, exchangeList, startStreamingPrice, startTrading} from '../util/Actions';

class Dashboard extends Component {
    componentDidMount() {
        this.props.dispatch(marketList());
        this.props.dispatch(exchangeList());
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
            <Grid fluid={true}>
                {Object.keys(this.props.marketList).map((market, i) => (
                    <div key={market} className="m-2">
                        <h2>{this.props.marketList[market]}</h2>
                        <Table striped bordered condensed hover>
                            <thead>
                            <tr>
                                <th>Exchange</th>
                                <th>Holding USD</th>
                                <th>Bid in orders</th>
                                <th>Best bid</th>
                                <th>Best ask</th>
                                <th>Ask in orders</th>
                                <th>Holding BTC</th>

                            </tr>
                            </thead>
                            <tbody>
                            {this.props.exchangeList.map((exchange) =>
                                <tr key={exchange}>
                                    <td>{exchange}</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>{(this.props.marketList[market]+"_"+exchange in this.props.bidAsk) ? this.props.bidAsk[this.props.marketList[market]+"_"+exchange]['bid'] + "("+this.props.bidAsk[this.props.marketList[market]+"_"+exchange]['bid_q']+")" : ''}</td>
                                    <td>{(this.props.marketList[market]+"_"+exchange in this.props.bidAsk) ? this.props.bidAsk[this.props.marketList[market]+"_"+exchange]['ask'] + "("+this.props.bidAsk[this.props.marketList[market]+"_"+exchange]['ask_q']+")" : ''}</td>
                                    <td>0</td>
                                    <td>0</td>

                                </tr>
                            )}

                            </tbody>
                        </Table>
                    </div>
                ))}
            </Grid>
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

export default connect(mapStateToProps)(Dashboard);