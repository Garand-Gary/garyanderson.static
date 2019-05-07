import React from 'react';
import { Link } from '@reach/router';

class Navigation extends React.Component {
    render() {
        // this is only active when the location pathname is exactly
        // the same as the href.
        const isActive = ({ isCurrent }) => {
            return isCurrent ? { className: "active" } : null
        }

        return (
            <nav className="float-md-right">
                <ul>
                    <li>
                        <Link to="/me" getProps={isActive}>Me</Link>
                    </li>
                    <li>
                        <Link to="/projects" getProps={isActive}>Projects</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Navigation;