// http://amanvirk.me/singleton-classes-in-es6/

import {
    onLogin
} from './Actions'
import {onDisconnect} from './Actions'
import {store} from '../index.js'

const WEBSOCKET_SERVER = "ws://127.0.0.1:5001/";


let instance = null;
let printDebug = true;
class WSConnectorClass {

    constructor() {
        if (!instance) {
            instance = this;
        }

        this._type = 'WSConnector';
        this.id = Math.floor((Math.random()*10000)+1);
        this.msgID = 0;
        this.pendingMsg = [];   // the messages have to be sent
        this.msgIDMap = {};     // key:msgID, obj:msg method

        if (this.socket == null || this.socket.readyState !== 1) {
            this.socket = new WebSocket(WEBSOCKET_SERVER);
        }
        this.socket.onopen = function(event) {
            if (printDebug) {
                console.log("WSConnector> Connected");
            }
            let dict;
            while((dict = WSConnector.getInstance().pendingMsg.shift()) != null) {
                WSConnector.getInstance().sendMsg(dict.method, dict.params);
            }
        };
        this.socket.onclose = (event) => {
            store.dispatch(onDisconnect(event));
            if (printDebug) {
                if (event.wasClean) {
                    console.log("WSConnector> Connection closed cleanly");
                } else {
                    console.log("WSConnector> Connection closed not cleanly");// eg: server process is killed
                }
                console.log('WSConnector> Code: ' + event.code + ' reason: ' + event.reason);
            }
        };
        this.socket.onerror = function(error) {
            if (printDebug) {
                console.log("WSConnector> Error: " + error.message);
            }
        };
        this.socket.onmessage = event => {
            if (printDebug) {
                console.log("WSConnector recv <<< " + event.data);
            }
            WSConnector.getInstance().handMsg(JSON.parse(event.data));
        };

        return instance;
    }

    static singletonMethod() {
        return 'singletonMethod';
    }

    static staticMethod() {
        return 'staticMethod';
    }
    static getInstance() {
        if (!instance) {
            instance = new WSConnectorClass();
        }
        return instance;
    }

    get type() {
        return this._type;
    }

    set type(value) {
        this._type = value;
    }

    //------------------------------------------------------------------------------------------------------------------
    close() {
        if (this.socket.readyState === WebSocket.OPEN) {
            this.socket.close();
            if (printDebug) {
                console.log("WSConnector> Closing connection");
            }
        }
        instance = null;
    }

    sendMsg(method, params) {
        let rtn = 0;
        if( this.socket.readyState === this.socket.OPEN) {
            this.msgID = this.msgID + 1;
            let msg = JSON.stringify({id: this.msgID, method: method, params: params});
            if (printDebug) {
                console.log("WSConnector send >>> " + msg);
            }
            this.msgIDMap[this.msgID] = method;
            this.socket.send(msg);
            rtn = this.msgID;
        } else {
            this.pendingMsg.push({method: method, params: params});
        }
        return rtn;
    }

    //------------------------------------------------------------------------------------------------------------------
    handMsg(msg) {
        let msgType = ('method' in msg)?msg.method:((msg.id!==null)?this.msgIDMap[msg.id]:"");
        switch (msgType) {
            case "server.sign": {
                // store.dispatch(onLogin(msg));
            } break;
            case "bidAsk": {
                // store.dispatch(onBidAsk(msg))
            } break;
            case "exchangeList": {
                // store.dispatch(onExchangeList(msg))
            } break;
            case "marketList": {
                // store.dispatch(onMarketList(msg))
            }
            default: {
                console.log("WSConnector Unknown message> " + msg)
            }
        }
        if (msg.id in this.msgIDMap) {
            delete this.msgIDMap[msg.id];
        }
    }
    //------------------------------------------------------------------------------------------------------------------
    // Request functions
    ping(msg) {
        return this.sendMsg('message', msg);
    }

    echo(msg) {
        return this.sendMsg('echo', msg);
    }

    broadcast(msg) {
        return this.sendMsg('broadcast', msg);
    }

    time() {
        return this.sendMsg('server.time', []);
    }

    // userId: str, authorization:str, tonce:int
    login(userId, authorization, tonce) {
        return this.sendMsg('server.sign', [userId, authorization, tonce]);
    }

    //------------------------------------------------------------------------------------------------------------------
    exchangeList() {
        return this.sendMsg('exchangeList', []);
    }
    marketList() {
        return this.sendMsg('marketList', []);
    }
    //------------------------------------------------------------------------------------------------------------------

    sayGreeting() {
        console.log(this.instananceVar1);
    }

    changeGreeting(newGreeting) {
        this.instananceVar1 = newGreeting;
    }
}



export const WSConnector = WSConnectorClass;