// http://amanvirk.me/singleton-classes-in-es6/

import {
    onLogin,
    onGetPhotos,
    onGetPosts,
} from './Actions'

import {store} from '../index.js'
import axios from 'axios';


const API_SERVER = "http://127.0.0.1:8000";



export function login(userId, password) {
    axios.get(API_SERVER)
        .then(res => {
            let msg = res.data;

            msg = {};
            store.dispatch(onLogin(msg));
        })
}

