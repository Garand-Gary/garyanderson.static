import React from 'react';
import { Link } from '@reach/router'

class Navigation extends React.Component {
    render() {
        return (
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/me">Me</Link>
                    </li>
                    <li>
                        <Link to="/projects">Projects</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Navigation;