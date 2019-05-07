import React from 'react';
import Navigation from './navigation';
import { Link } from '@reach/router';

class Header extends React.Component {
    render() {
        return (
            <header className="container-fluid">
                <div className="row top">
                    <div className="title col-md-6">
                        <h1><Link to="/">Gary Anderson</Link></h1>
                    </div>
                    <div className="menu col-md-6 align-self-center">
                        <Navigation />
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;