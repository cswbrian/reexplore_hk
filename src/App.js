import React, { Component } from 'react';

import './App.css';
import AddTodo from "./containers/AddTodo";
import VisibleTodoList from "./containers/VisibleTodoList";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Route, Switch, Redirect } from 'react-router-dom';

import generateRouteList, { pages } from './containers/Router';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            auth: 0,
            contentHeight: window.innerHeight * 0.9
        };
    }

    render() {
        const routerList = generateRouteList( this.props.auth );

        return (
            <div className="wrap" style={{ minHeight: this.state.contentHeight }}>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={ pages.Home } />
                    { routerList.map(item => <Route key={ item.path } path={ item.path } component={ item.component } />) }
                    <Redirect to="/" />
                </Switch>

                <AddTodo />
                <VisibleTodoList />
                <Footer />
            </div>
        )
    }
}

export default App;
