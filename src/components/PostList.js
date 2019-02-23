import React, { Component } from 'react';
import {connect} from 'react-redux';
import {changeHoverPhoto, getPosts, dropPin, undropPin, createNewPost, closeNewPost, changeNewPostDescription} from '../util/Actions';

import Post from "./Post";

// There are two methods to posts
// first is the postList shows the posts that contain photos in the map view
// second is the postList shows the latest posts in the city where the user lives
// third is the postList shows some posts by scrolling down the postList

class PostList extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.dispatch(getPosts());
    }

    render() {

        return (

            <div style={{background:"#FFFFFF", height:"100%"}}>

                <table>
                    <tbody style={{display: "block", height:this.props.mapHeight, overflow:'auto'}}>
                    {Object.keys(this.props.posts).map((key, i) => (
                        <tr><td>
                            <Post
                                onClick={ () => this.onPostClicked(key)}
                                key={key}
                                post={this.props.posts[key]}
                                creator={"Tomson"}
                            />
                        </td></tr>
                    ))}
                    </tbody>
                </table>

            </div>
        );
    }
}

function mapStateToProps(state) {
    const { userId, map_photos, posts, hoverPhoto, mapHeight} = state.appInfo;

    return {
        ...state,
        userId,
        posts,
        map_photos,
        hoverPhoto,
        mapHeight,

    }
}

export default connect(mapStateToProps)(PostList);