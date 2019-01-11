import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import Dashboard from "../../components/Dashboard";
import Main from "../../components/MapView";
import PostList from "../../components/PostList";
import Navbar from "../../components/Navbar";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Grid>
                <Row className="show-grid">
                    <Col xs={12} md={8}>
                        <code>{'<Col xs={12} md={8} />'};</code>
                    </Col>
                    <Col xs={6} md={4}>
                        <code>{'<Col xs={6} md={4} />'}</code>
                    </Col>
                </Row>

            </Grid>
        );
    }
}

function mapStateToProps(state) {
    return {
        ...state.App
    };
}

export default connect(
    mapStateToProps,
)(Home);