import React from 'react';
import Navigation from './navigation';

class Header extends React.Component {
    render() {
        return (
            <header className="container-fluid">
                <div className="row top">
                    <div className="title col-md-6">
                        <h1>Gary Anderson</h1>
                        <h2>Software Developer</h2>
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