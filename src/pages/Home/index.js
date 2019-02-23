import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostList from "../../components/PostList";
import MapView from "../../components/MapView";
import {undropPin, updateMapDimension} from "../../util/Actions";
import TextField from "@material-ui/core/TextField";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";


class Home extends Component {


    constructor(props) {
        super(props);
    }

    updateDimensions() {
        this.props.dispatch(updateMapDimension(null));
    }

    componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions.bind(this));
    }

    onDoneClicked() {
        this.props.dispatch(undropPin());
    }

    onCancelClicked() {
        this.props.dispatch(undropPin());
    }

    render() {

        let postList;
        let pinBar;
        if (this.props.isDroppingPin) {
            pinBar = <div>Drop a pin to the location...
                <TextField
                    margin="dense"
                    label="Location"
                    variant="outlined">
                </TextField>
                <TextField
                    margin="dense"
                    label="Latitude"
                    variant="outlined"
                    value={this.props.currPin.lat}>
                </TextField>
                <TextField
                    margin="dense"
                    label="Longitude"
                    variant="outlined"
                    value={this.props.currPin.lng}>
                </TextField>
                <Button onClick={() => this.onCancelClicked()} color="secondary">
                    Cancel
                </Button>
                <Button onClick={() => this.onDoneClicked()} color="primary">
                    Done
                </Button>
            </div>
        } else {
            postList = <div style={{height:"100%", width:this.props.postListWidth, display:"inline-block", verticalAlign:"top"}}><PostList/></div>
        }
        return (
            <div style={{height:this.props.mapHeight}}>
                {pinBar}
                <div style={{height:this.props.mapHeight, width:this.props.mapWidth, display:"inline-block"}}><MapView/></div>
                {postList}
            </div>
        );
    }
}


function mapStateToProps(state) {
    const {isDroppingPin, mapWidth, mapHeight, postListWidth, currPin} = state.appInfo;

    return {
        ...state,
        isDroppingPin,
        mapWidth,
        mapHeight,
        postListWidth,
        currPin,
    };
}

export default connect(
    mapStateToProps,
)(Home);