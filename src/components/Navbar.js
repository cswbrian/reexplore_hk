import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { routes } from '../containers/Router';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            btn: false
        };
    }

    click() {
        const { btn } = this.state;
        this.setState({ btn: !btn });
    }

    render() {
        const { btn } = this.state;


        return (
            <header>
                <div className="menu_top">
                    <nav className="navbar navbar-default">
                        <div className="navbar-header">
                            <button
                                type="button"
                                className="navbar-toggle collapsed"
                                onClick={ this.click.bind(this) }
                                data-toggle="collapse"
                                data-target="#menu_top"
                                aria-expanded="false">

                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"/>
                                <span className="icon-bar"/>
                                <span className="icon-bar"/>
                            </button>
                            <Link to="/" className="navbar-brand" >
                                cyptotrader
                            </Link>
                        </div>
                        <div className={ `collapse navbar-collapse ${ btn ? 'in' : '' }` } id="menu_top">
                            <ul className="nav navbar-nav navbar-right">
                                <li><Link to={`${routes.account_summary}`} className="navbar-link" >Account</Link></li>
                                <li><Link to={`${routes.dummy}`} className="navbar-link" >Dummy</Link></li>

                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
        );
    }
}

export default connect(null, {

})(Navbar);