

import { ACTION_exchangeList,
    ACTION_onExchangeList,
    ACTION_marketList,
    ACTION_onMarketList,
    ACTION_startStreamingPrice,
    ACTION_startTrading,
    ACTION_onBidAsk
} from "../util/Actions";

import {WSConnector} from "../util/WSConnector";


const initialState = {
    isLoadingMarketList: false,
    isLoadingExchangeList: false,
    isLoadingPing: false,
    isLogin: false,

    userID: "",
    selectedSymbol: "BTCBCH",
    exchangeList: [],
    marketList: [],
    bidAsk: {},

    map_zoom: 11,
    map_center: {
        lat: 59.95,
        lng: 30.33
    },
    map_api_key: "AIzaSyBag47Azp3Bfbs9B3K4hiN8k5eIDfUSwzI"
};



export const appInfo = (state = initialState, action) => {
    switch (action.type) {

        //---------------------------------------------------------------------
        case ACTION_marketList : {
            WSConnector.getInstance().marketList();
            return {
                ...state,
                isLoadingMarketList: true
            };
        } break;

        //---------------------------------------------------------------------
        case ACTION_onMarketList : {
            let marketList = action.msg.data;
            return {
                ...state,
                isLoadingMarketList: false,
                marketList: marketList
            };
        } break;
        //---------------------------------------------------------------------
        case ACTION_exchangeList: {
            WSConnector.getInstance().exchangeList();
            return {
                ...state,
                isLoadingExchangeList: true,
            };
        } break;

        //---------------------------------------------------------------------
        case ACTION_onExchangeList: {
            let exchangeList = action.msg.data;

            return {
                ...state,
                isLoadingExchangeList: false,
                exchangeList: exchangeList
            };
        } break;
        //---------------------------------------------------------------------
        case ACTION_onBidAsk: {
            let exchange = action.msg.data.exchange;
            let market = action.msg.data.market;
            let bid = action.msg.data.bid;
            let ask = action.msg.data.ask;
            let bid_q = action.msg.data.bid_q;
            let ask_q = action.msg.data.ask_q;
            let bidAskKey = market + "_" + exchange;

            return {
                ...state,
                bidAsk: {
                    ...state.bidAsk,
                    [bidAskKey]:  {
                        bid: bid, ask: ask, bid_q: bid_q, ask_q: ask_q
                    }
                }
            };

        } break;

        //---------------------------------------------------------------------
        case ACTION_startStreamingPrice: {

            WSConnector.getInstance().echo("Hello");
            return {
                ...state,
                isLoadingPing: true
            };
        } break;

        //---------------------------------------------------------------------
        case ACTION_startTrading: {

            WSConnector.getInstance().broadcast("Hello all");
            return {
                ...state,
                isLoadingPing: true
            };
        } break;


        //---------------------------------------------------------------------
        default:
            return state;
    }
};

