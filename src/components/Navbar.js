import React, {Component}  from 'react';
import {connect} from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Icon from "@material-ui/core/Icon";
import Fab from "@material-ui/core/Fab";
import AddIcon from "../../node_modules/@material-ui/icons/Add";
import DialogActions from "@material-ui/core/DialogActions";
import Dialog from "@material-ui/core/Dialog";


import {changeNewPostDescription, closeNewPost, createNewPost, dropPin, login, logout} from '../util/Actions'

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            account: 'ssss',
            password: null
        };
    }


    onLogoutClicked = (e) =>{
        e.preventDefault();
        this.props.dispatch(logout());
    };
    onLoginClicked = (e) =>{
        e.preventDefault();
        this.props.dispatch(login(this.state.account, this.state.password));
    };
    onAccountChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };
    onPasswordChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    onCreateNewPostClicked = (e) => {
        this.props.dispatch(createNewPost(e));
    };

    onCloseNewPost = (e) => {
        this.props.dispatch(closeNewPost(e));
    };

    onDropPinClicked = (e) => {
        this.props.dispatch(dropPin(e));
    };

    onPostClicked = (e) => {
        console.log(e);
    };
    onChangePostDescription = (e) => {
        let desc = e.target.value;
        this.props.dispatch(changeNewPostDescription(desc));
    };

    onOpenFilterClicked = (e) => {

    };

    render() {
        const tdStyle = { paddingLeft: '10px' };
        const isLoggedIn = (this.props.sessionKey != null);
        let buttons;


        if (isLoggedIn) {
            buttons =
                <div>
                    <Button style={{paddingRight:"20px"}} color="inherit" onClick={() => this.onCreateNewPostClicked()}>
                        Add Story
                    </Button>
                    <Button style={{paddingRight:"20px"}} color="inherit" onClick={() => this.onCreateNewPostClicked()}>
                        Filter
                    </Button>

                    <Button style={{paddingRight:"20px"}} color="inherit" onClick={() => this.onCreateNewPostClicked()}>
                        <b>Hi, {this.props.user.displayName}</b>
                    </Button>

                    <Button color="inherit" onClick={ (e) => this.onLogoutClicked(e)}>Logout</Button>
            </div>;
        } else {
            buttons =
                <table>
                    <tr>
                        <td style={tdStyle}>
                            <Button style={{paddingRight:"20px"}} color="inherit" onClick={() => this.onOpenFilterClicked()}>
                                Filter
                            </Button>
                        </td>
                        <td style={tdStyle}>
                            <TextField
                                id="account"
                                name="account"
                                label="Account"
                                placeholder={"Account"}
                                margin="dense"
                                variant="filled"
                                value={this.state.account}
                                className={'whiteTextField'}
                                onChange={(e) => this.onAccountChange(e)}
                            />
                        </td>
                        <td style={tdStyle}>
                            <TextField
                                id="password"
                                name={"password"}
                                label="Password"
                                type="password"
                                value={this.state.password}
                                className={'whiteTextField'}
                                autoComplete="current-password"
                                margin="dense"
                                variant="filled"
                                onChange={(e) => this.onPasswordChange(e)}
                            />
                        </td>
                        <td style={tdStyle}>
                            <Button color="inherit" onClick={ (e) => this.onLoginClicked(e)}>Login</Button>
                        </td>
                    </tr>
                </table>;
        }
//{(this.props.currPin.lat&&this.props.currPin.lng)?(this.props.currPin.lat + "," + this.props.currPin.lng):""}
        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton color="inherit" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" color="inherit" style={{ flex: 2 }}>
                            Timetrip
                        </Typography>
                        {buttons}
                    </Toolbar>
                </AppBar>

                <Dialog
                    open={this.props.isCreatingNewPost}
                    onClose={() => this.onCloseNewPost()}
                    fullWidth={true}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description">
                    <DialogTitle>{"Add a new story"}</DialogTitle>
                    <DialogContent>

                        <TextField
                            autoFocus
                            margin="dense"
                            label="Your story"
                            variant="outlined"
                            multiline={true}
                            rows={3}
                            fullWidth
                            defaultValue={this.props.newPost.description}
                            onChange={(e)=>this.onChangePostDescription(e)}>
                        </TextField>

                        <div style={{width:"45%", display:"inline-block"}}>
                            <TextField
                                label="where"
                                fullWidth
                                value={(this.props.currPin.lat&&this.props.currPin.lng)?(this.props.currPin.lat + "," + this.props.currPin.lng):""}
                                InputProps={{ endAdornment:
                                        <Icon onClick={(e)=>this.onDropPinClicked(e)} color="primary">
                                            add_circle
                                        </Icon> }}
                            >
                            </TextField>
                        </div>
                        <div style={{width:"10%", display:"inline-block"}}/>
                        <div style={{width:"45%", display:"inline-block"}}>
                            <TextField
                                label="when"
                                type="datetime-local"
                                defaultValue="2017-05-24T10:30"
                                fullWidth/>
                        </div>

                        <div style={{width:"50%", display:"inline-block"}}>
                            <Button
                                variant="contained"
                                component="label"
                                size={"small"}>
                                Upload File
                                <input type="file" style={{ display: "none" }}/>
                            </Button>
                        </div>
                        <div style={{width:"50%", display:"inline-block"}}>
                            <Fab size="small" color="primary" aria-label="Add" >
                                <AddIcon />
                            </Fab>
                        </div>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => this.onCloseNewPost()} color="primary">
                            Close
                        </Button>
                        <Button onClick={() => this.onCloseNewPost()} color="primary" autoFocus>
                            Post
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { user, sessionKey, newPost, isCreatingNewPost, isDroppingPin, map_bound,currPin} = state.appInfo;

    return {
        ...state,
        user,
        sessionKey,
        newPost,
        isCreatingNewPost,
        isDroppingPin,
        map_bound,
        currPin,
    }
}

export default connect(mapStateToProps)(Navbar);

