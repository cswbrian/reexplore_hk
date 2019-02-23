import React, { Component } from 'react';
import {connect} from 'react-redux';
import {changeHoverPhoto} from '../util/Actions';
import Grid from "@material-ui/core/Grid";
import MapView from "./MapView";
import PostList from "./PostList";
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import PropTypes from "prop-types";

class Post extends Component {
    static propTypes = {
        post: PropTypes.object,
    };

    constructor(props) {
        super(props);
        this.postPhoto = {};
    }

    componentDidMount() {
        //this.props.dispatch(marketList());
        //this.props.dispatch(exchangeList());
        this.postPhoto = this.props.post.photos;

    }

    onLikeClicked(postId) {
        console.log("onLikedClicked: " + postId);
    }

    onCommentClicked(postId) {
        console.log("Comment clicked");

    }
    onShareClicked(postId) {
        console.log("Share clicked");
    }
    onSeeMoreClicked(postId) {
        console.log("See more clicked");
    }

    render() {
        const coverPhotoKey = (this.postPhoto.length>0)?(this.postPhoto[0]):null;
        let coverPhoto = null;
        let image;
        if (coverPhotoKey) {
            coverPhoto = this.props.map_photos[coverPhotoKey];
            image = <img src={coverPhoto.link} alt={coverPhoto.description} style={{width:"380px", padding:"2px", display:"block", marginLeft:"auto", marginRight:"auto"}}/>
        }


        return (
            <div key={this.props.post.postId} style={{padding:"10px"}}>
                <Paper  >
                    <Grid container spacing={1} style={{height:"100%"}} alignItems={"center"}>
                        <Grid item xs={2} style={{padding:"10px"}}>
                            <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
                        </Grid>
                        <Grid item xs={10}>
                            <Typography style={{fontWeight:'bold'}}>{this.props.post.creator.name}</Typography>
                        </Grid>

                        <Grid item xs={12} style={{paddingLeft:"10px", paddingRight:"10px"}}>
                            <Typography>{this.props.post.description}</Typography>
                        </Grid>
                        <Grid item xs={12} justify="center">
                            {image}
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container>
                                <Grid item xs={4} onClick={ () => this.onLikeClicked(this.props.post.postId)}>
                                    <Button fullWidth={true}>Like</Button>
                                </Grid>
                                <Grid item xs={4} onClick={ () => this.onCommentClicked(this.props.post.postId)}>
                                    <Button fullWidth={true}>Comment</Button>
                                </Grid>
                                <Grid item xs={4} onClick={ () => this.onShareClicked(this.props.post.postId)}>
                                    <Button fullWidth={true}>Share</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { user, hoverPhoto, posts, map_photos} = state.appInfo;

    return {
        user,
        hoverPhoto,
        posts,
        map_photos,
    }
}

export default connect(mapStateToProps)(Post);