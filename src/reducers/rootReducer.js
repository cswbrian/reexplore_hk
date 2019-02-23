

import {
    ACTION_login,
    ACTION_onLogin,
    ACTION_logout,
    ACTION_onLogout,
    ACTION_getPhotos,
    ACTION_onGetPhotos,
    ACTION_getPosts,
    ACTION_onGetPosts,
    ACTION_commentPost,
    ACTION_likePost,
    ACTION_sharePost,
    ACTION_changeHoverPhoto,
    ACTION_changeMapBound,
    ACTION_draggingMap,
    ACTION_createNewPost,
    ACTION_changeNewPostDescription,
    ACTION_closeNewPost,
    ACTION_dropPin,
    ACTION_undropPin,
    ACTION_updateMapDimension,

} from "../util/Actions";

import {WSConnector} from "../util/WSConnector";

const POST_WIDTH = 430;
const NAVBAR_HEIGHT = 64;
const PINBAR_HEIGHT = 61;

const initialState = {
    isLoadingMarketList: false,
    isLoadingExchangeList: false,
    isLoadingPing: false,
    isLogin: false,

    isDroppingPin: false,
    isCreatingNewPost: false,

    mapHeight: window.innerHeight - NAVBAR_HEIGHT,
    mapWidth: window.innerWidth -  POST_WIDTH,
    postListWidth: POST_WIDTH,

    newPost: {
        description: "",
        location: {
            name: "",
            lng: "",
            lat: "",
        }

    },
    currPin: {
        lat: null,
        lng: null,
    },

    userId: "",
    user: null,
    sessionKey: null,
    posts: {},
    hoverPhoto: null,
    hoverPost: null,
    map_zoom: 11,
    map_center: {
        lat: 22.432659,
        lng: 114.109497
    },
    map_api_key: "AIzaSyAQbG5mvIzO68zDSLyI78VCrqKwizH74aE",
    map_photos: {},
    map_bound: null,
};



export const appInfo = (state = initialState, action) => {
    switch (action.type) {

        //---------------------------------------------------------------------
        case ACTION_login: {
            let userId = action.userId;
            let password = action.password;

            // send the login request to api server
            let user = {
                userId:123,
                userName: "tom1988",
                displayName: "Tomson",
                email: "abc@gmail.com",
            };
            let sessionKey = "This is sessnion key";
            return {
                ...state,
                sessionKey: sessionKey,
                user: user,
            };
        }

        case ACTION_logout: {
            // send logout request to api server
            return {
                ...state,
                user: null,
                sessionKey: null,
            }
        }

        //---------------------------------------------------------------------
        case ACTION_changeHoverPhoto : {
            // find the the post owning this photo and set hoverPost
            return {
                ...state,
                hoverPhoto: parseInt(action.key),
                hoverPost: null,
            };
        }

        case ACTION_draggingMap: {

            return {
                ...state,
                currPin: {
                    lng: action.bound.center.lng,
                    lat: action.bound.center.lat,
                }
            }
        }

        case ACTION_changeMapBound: {

            return {
                ...state,
                map_bound: action.bound,
            }
        }

        //---------------------------------------------------------------------
        case ACTION_commentPost: {
            // send a comment to api server
            let postId = action.post.postId;
            let comment = action.newcomment;

            return {
                ...state,

            }
        }

        //---------------------------------------------------------------------
        case ACTION_getPhotos: {
            // send request to api server to get photos with parameters

            let photos = {
                1: {
                    id: 1,
                    lat: 22.2816153,
                    lng: 114.1357076,
                    postId: 1,
                    description: "3 University Drive",
                    link: "https://dl.airtable.com/.attachments/dc5337845949d36e10450ae6de1b576e/ccdc4600/6263892088_096cd51ffe_o.jpg",
                    comments: [
                        {
                            comment: "wow nice",
                            creator: {
                                name: "Tom Lee",
                                link: "http://www.google.com",
                                profilePic: "http://www.google.com",
                            },
                        },
                        {
                            comment: "good",
                            creator: {
                                name: "Michael",
                                link: "http://www.google.com",
                                profilePic: "http://www.google.com",
                            },
                        },
                    ],
                },
                2: {
                    id: 2,
                    lat: 22.3198776,
                    lng: 114.1649802,
                    postId: 1,
                    description: "Kowloon Hills",
                    link: "https://dl.airtable.com/.attachments/fa4220e2ccd2d74365299e4e86df5ac6/e979a690/16079770472_cffb060964_h.jpg",
                    comments: [
                        {
                            comment: "wow nice",
                            creator: {
                                name: "Tom Lee",
                                link: "http://www.google.com",
                                profilePic: "http://www.google.com",
                            },
                        },
                        {
                            comment: "good",
                            creator: {
                                name: "Michael",
                                link: "http://www.google.com",
                                profilePic: "http://www.google.com",
                            },
                        },
                    ],
                },
                3: {
                    id: 3,
                        lat: 22.3221726,
                        lng: 114.1703787,
                        postId: 1,
                        description: "Yaumatei KCR Station",

                    link: "https://dl.airtable.com/.attachments/f0d133b2e6d1749fc20ce5312ebb45e6/06caf13a/16080477225_34422ced45_o.jpg",
                    comments: [
                        {
                            comment: "wow nice",
                            creator: {
                                name: "Tom Lee",
                                link: "http://www.google.com",
                                profilePic: "http://www.google.com",
                            },
                        },
                        {
                            comment: "good",
                            creator: {
                                name: "Michael",
                                link: "http://www.google.com",
                                profilePic: "http://www.google.com",
                            },
                        },
                    ],
                }
            };

                
            return {
                ...state,
                map_photos: photos,
            }
        }
        //---------------------------------------------------------------------
        case ACTION_getPosts: {
            // send request to api server to get post

            let posts = {
                    1: {
                        postId: 1,
                        creator: {
                            name: "Tom Lee",
                            link: "http://www.google.com",
                            profilePic: "http://www.google.com",
                        },
                        photos: [1, 2],
                        description: "This is post 1  about photo A and photo B",
                        comments: []
                    },
                    2: {
                        postId: 2,
                        creator: {
                            name: "Tom Lee",
                            link: "http://www.google.com",
                            profilePic: "http://www.google.com",
                        },
                        photos: [1, 2],
                        description: "This is post 2 about photo A and photo B",
                        comments: []
                    },

                };
            return {
                ...state,
                posts: posts,
            }
        }

        //---------------------------------------------------------------------
        case ACTION_createNewPost: {
            return {
                ...state,
                isCreatingNewPost: true,
            }
        }
        case ACTION_closeNewPost: {
            return {
                ...state,
                isCreatingNewPost: false,
            }
        }
        case ACTION_changeNewPostDescription: {
            return {
                ...state,
                newPost: {
                    ...state.newPost,
                    description: action.description,
                }
            }
        }
        case ACTION_updateMapDimension: {
            return {
                ...state,
                mapHeight: (state.isDroppingPin)? window.innerHeight - NAVBAR_HEIGHT - PINBAR_HEIGHT  : window.innerHeight -  NAVBAR_HEIGHT,
                mapWidth: (state.isDroppingPin)? window.innerWidth : window.innerWidth -  POST_WIDTH,
                postListWidth: (state.isDroppingPin)? 0 : POST_WIDTH,
            }
        }
        case ACTION_dropPin: {

            return {
                ...state,
                isDroppingPin: true,
                isCreatingNewPost: false,
                mapHeight: window.innerHeight - NAVBAR_HEIGHT - PINBAR_HEIGHT,
                mapWidth: window.innerWidth,
                postListWidth: 0,
                currPin: {
                    lng: state.map_bound.center.lng,
                    lat: state.map_bound.center.lat
                }
            }
        }

        //---------------------------------------------------------------------
        case ACTION_undropPin: {

            return {
                ...state,
                isDroppingPin: false,
                isCreatingNewPost: true,
                mapHeight: window.innerHeight - NAVBAR_HEIGHT,
                mapWidth: window.innerWidth - POST_WIDTH,
                postListWidth: POST_WIDTH,
                currPin: {
                    lng: null,
                    lat: null,
                }
            }
        }

        //---------------------------------------------------------------------

        // case ACTION_onMarketList : {
        //     let marketList = action.msg.data;
        //     return {
        //         ...state,
        //         isLoadingMarketList: false,
        //         marketList: marketList
        //     };
        // }
        // //---------------------------------------------------------------------
        // case ACTION_exchangeList: {
        //     WSConnector.getInstance().exchangeList();
        //     return {
        //         ...state,
        //         isLoadingExchangeList: true,
        //     };
        // }
        //
        // //---------------------------------------------------------------------
        // case ACTION_onExchangeList: {
        //     let exchangeList = action.msg.data;
        //
        //     return {
        //         ...state,
        //         isLoadingExchangeList: false,
        //         exchangeList: exchangeList
        //     };
        // }
        // //---------------------------------------------------------------------
        // case ACTION_onBidAsk: {
        //     let exchange = action.msg.data.exchange;
        //     let market = action.msg.data.market;
        //     let bid = action.msg.data.bid;
        //     let ask = action.msg.data.ask;
        //     let bid_q = action.msg.data.bid_q;
        //     let ask_q = action.msg.data.ask_q;
        //     let bidAskKey = market + "_" + exchange;
        //
        //     return {
        //         ...state,
        //         bidAsk: {
        //             ...state.bidAsk,
        //             [bidAskKey]:  {
        //                 bid: bid, ask: ask, bid_q: bid_q, ask_q: ask_q
        //             }
        //         }
        //     };
        //
        // }



        //---------------------------------------------------------------------



        //---------------------------------------------------------------------
        default:
            return state;
    }
};

