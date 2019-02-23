import React, { Component } from 'react';

import './App.css';
import Navbar from "./components/Navbar";
import { Route, Switch, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';

import generateRouteList, { pages } from './containers/Router';

class App extends Component {
    styles = theme => ({
        root: {
            flexGrow: 1,
        },
    });

    constructor(props) {
        super(props);
        this.state = {
            auth: 0,
            contentHeight: window.innerHeight - 64
        };
    }
    updateDimensions() {
        this.setState({ contentHeight: window.innerHeight - 64});
    }

    componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions.bind(this));
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions.bind(this));
    }


    render() {
        const classes = this.styles;
        const routerList = generateRouteList( this.props.auth );

        return (
            <div className={classes.root} style={{height:"100%"}}>
                <div style={{height:"64px"}}>
                    <Navbar />
                </div>
                <div style={{height:this.state.contentHeight}}>
                    <Switch>
                        <Route path="/" exact component={ pages.Home } />
                        { routerList.map(item => <Route key={ item.path } path={ item.path } component={ item.component } />) }
                        <Redirect to="/" />
                    </Switch>
                </div>
           </div>


            //
            // <div className="wrap" style={{ minHeight: this.state.contentHeight }}>
            //     <Navbar />
            //     <Switch>
            //         <Route path="/" exact component={ pages.Home } />
            //         { routerList.map(item => <Route key={ item.path } path={ item.path } component={ item.component } />) }
            //         <Redirect to="/" />
            //     </Switch>
            //
            //     <AddTodo />
            //     <VisibleTodoList />
            //     <Footer />
            // </div>
        )
    }
}

function mapStateToProps(state) {
    const { currentPage} = state.appInfo;

    return {
        currentPage
    }
}

export default connect(mapStateToProps)(App);


