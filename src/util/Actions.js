/*
    20180911: inital version

 */

export const ACTION_login = "ACTION_login";
export const ACTION_onLogin = "ACTION_onLogin";
export const ACTION_logout = "ACTION_logout";
export const ACTION_onLogout = "ACTION_onLogout";

export const ACTION_getPhotos = "ACTION_getPhotos";
export const ACTION_onGetPhotos = "ACTION_onGetPhotos";
export const ACTION_getPosts = "ACTION_getPosts";
export const ACTION_onGetPosts = "ACTION_onGetPosts";


export const ACTION_commentPost = "ACTION_commentPost";
export const ACTION_likePost = "ACTION_likePost";
export const ACTION_sharePost = "ACTION_sharePost";


export const ACTION_createNewPost = "ACTION_createNewPost";
export const ACTION_closeNewPost = "ACTION_closeNewPost";
export const ACTION_changeNewPostDescription = "ACTION_changeNewPostDescription";
export const ACTION_dropPin = "ACTION_dropPin";
export const ACTION_undropPin = "ACTION_undropPin";
export const ACTION_updateMapDimension = "ACTION_updateMapDimension";

export const ACTION_changeHoverPhoto = 'ACTION_changeHoverPhoto';
export const ACTION_changeMapBound = "ACTION_changeMapBound";
export const ACTION_draggingMap = "ACTION_draggingMap";


export const ACTION_onDisconnect = 'ACTION_onDisconnect';
export const ACTION_ = 'ACTION_';


//-----------------------------------------------------------------------------
export function login(userId, password) {
    return {
        type: ACTION_login,
        userId,
        password
    }
}

export function onLogin(event) {
    return {
        type: ACTION_onLogin,
        event
    }
}

export function logout() {
    return {
        type: ACTION_logout
    }
}
export function onLogout() {
    return {
        type: ACTION_onLogout
    }
}


//-----------------------------------------------------------------------------
// x axis start point, x axis end point; y axis start point, y axis end point
export function getPhotos(xs, xe, ys, ye,zoom) {
    return {
        type: ACTION_getPhotos,
        xs, xe, ys, ye, zoom
    }
}

export function onGetPhotos(msg) {
    return {
        type: ACTION_onGetPhotos,
        msg
    }
}

//-----------------------------------------------------------------------------
export function getPosts() {
    return {
        type: ACTION_getPosts
    }
}

export function onGetPosts(msg) {
    return {
        type: ACTION_onGetPosts,
        msg
    }
}

//-----------------------------------------------------------------------------
// post related action
export function commentPost(post, newcomment) {
    return {
        type: ACTION_commentPost,
        post,
        newcomment
    }
}

export function likePost(post, like) {
    return {
        type: ACTION_likePost,
        post,
        like
    }
}

export function sharePost(post) {
    return {
        type: ACTION_sharePost,
        post
    }
}


//-----------------------------------------------------------------------------
// web site event
// Map
export function changeHoverPhoto(key) {
    return {
        type: ACTION_changeHoverPhoto,
        key: key
    }
}

export function draggingMap(bound) {
    return {
        type: ACTION_draggingMap,
        bound: bound,
    }
}
export function changeMapBound(bound) {
    return {
        type: ACTION_changeMapBound,
        bound: bound,
    }
}

//-----------------------------------------------------------------------------
// websocket connection
export function onDisconnect(event) {
    return {
        type: ACTION_onDisconnect,
        event
    }
}
//-----------------------------------------------------------------------------
export function createNewPost(event) {
    return {
        type: ACTION_createNewPost,
        event
    }
}

export function closeNewPost(event) {
    return {
        type: ACTION_closeNewPost,
        event
    }
}

export function changeNewPostDescription(description) {
    return {
        type: ACTION_changeNewPostDescription,
        description
    }
}

export function updateMapDimension(event) {
    return {
        type: ACTION_updateMapDimension,
        key: event
    }

}
export function dropPin(event) {
    return {
        type: ACTION_dropPin,
        event
    }
}

export function undropPin(event) {
    return {
        type: ACTION_undropPin,
        event
    }
}

//-----------------------------------------------------------------------------