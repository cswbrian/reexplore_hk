import React, {Component } from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';


class NewPostView extends Component {
    static propTypes = {
        photoId: PropTypes.number,
        text: PropTypes.string
    };

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>
                This is new post View
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { user } = state.appInfo;

    return {
        user
    }
}

export default connect(mapStateToProps)(NewPostView);