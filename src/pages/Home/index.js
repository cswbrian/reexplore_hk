import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import Dashboard from "../../components/Dashboard";
import Main from "../../components/MapView";
import PostList from "../../components/PostList";
import Navbar from "../../components/Navbar";
import MapView from "../../components/MapView";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col md={8}>
                        <MapView />
                    </Col>
                    <Col md={4}>
                        <PostList />
                    </Col>
                </Row>
            </Container>
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