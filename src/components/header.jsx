import React from 'react';
import Navigation from './navigation';

class Header extends React.Component {
    render() {
        return (
            <header>
                <h1>Gary Anderson</h1>
                <h2>Software Developer</h2>
                <Navigation />
            </header>
        )
    }
}

export default Header;