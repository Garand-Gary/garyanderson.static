import React from 'react';
import Navigation from './navigation';

class Header extends React.Component {
    render() {
        return (
            <header>
                <div className="row">
                    <div className="title col-sm-4">
                        <h1>Gary Anderson</h1>
                        <h2>Software Developer</h2>
                    </div>
                    <div className="menu col-sm-8">
                        <Navigation />
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;