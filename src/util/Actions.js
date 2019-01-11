/*
    20180911: inital version

 */

export const ACTION_login = "ACTION_login";
export const ACTION_onLogin = "ACTION_onLogin";
export const ACTION_changeSelectedSymbol = 'ACTION_changeSelectedSymbol';

export const ACTION_exchangeList = 'ACTION_exchangeList';
export const ACTION_onExchangeList = 'ACTION_onExchangeList';
export const ACTION_marketList = 'ACTION_marketList';
export const ACTION_onMarketList = 'ACTION_onMarketList';

export const ACTION_onBidAsk = 'ACTION_onBidAsk';

export const ACTION_startStreamingPrice = 'ACTION_startStreamingPrice';
export const ACTION_onStartStreamingPrice = 'ACTION_onStartStreamingPrice';

export const ACTION_startTrading = 'ACTION_startTrading';
export const ACTION_onStartTrading = 'ACTION_onStartTrading';



export const ACTION_onDisconnect = 'ACTION_onDisconnect';
export const ACTION_ = 'ACTION_';

//-----------------------------------------------------------------------------
// websocket connection
export function onDisconnect(event) {
    return {
        type: ACTION_onDisconnect,
        event
    }
}
//-----------------------------------------------------------------------------

export function changeSelectedSymbol(newSymbol) {
    return {
        type: ACTION_changeSelectedSymbol,
        newSymbol
    }
}

//-----------------------------------------------------------------------------
export function login(userID, auth, tonce) {
    return {
        type: ACTION_login,
        userID,
        auth,
        tonce
    }
}

export function onLogin(msg) {
    return {
        type: ACTION_onLogin,
        msg
    }
}
//-----------------------------------------------------------------------------
export function exchangeList() {
    return {
        type: ACTION_exchangeList
    }
}

export function onExchangeList(msg) {
    return {
        type: ACTION_onExchangeList,
        msg
    }
}
//-----------------------------------------------------------------------------
export function marketList() {
    return {
        type: ACTION_marketList
    }
}

export function onMarketList(msg) {
    return {
        type: ACTION_onMarketList,
        msg
    }
}
//-----------------------------------------------------------------------------
export function onBidAsk(msg) {
    return {
        type: ACTION_onBidAsk,
        msg
    }
}


//-----------------------------------------------------------------------------
export function startStreamingPrice(market) {
    return {
        type: ACTION_startStreamingPrice,
        market
    }
}

export function onStartStreamingPrice(market) {
    return {
        type: ACTION_onStartStreamingPrice,
        market
    }
}

export function startTrading(market) {
    return {
        type: ACTION_startTrading,
        market
    }
}

export function onStartTrading(market) {
    return {
        type: ACTION_onStartTrading,
        market
    }
}
