import React, { Component } from 'react';
import {connect} from 'react-redux';
import {changeHoverPhoto} from '../util/Actions';

class PostFilter extends Component {
    componentDidMount() {
        //this.props.dispatch(marketList());
        //this.props.dispatch(exchangeList());
    }

    onClickedStreamingPrice(e) {
        e.preventDefault();

    }

    onClickedTrading(e) {
        e.preventDefault();


    }

    render() {
        return (
            <div>This is Post Filter</div>
        );
    }
}

function mapStateToProps(state) {
    const { user } = state.appInfo;

    return {
        user
    }
}

export default connect(mapStateToProps)(PostFilter);