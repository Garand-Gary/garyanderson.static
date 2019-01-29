import React from 'react'
import { Link } from '@reach/router'

class FooterNavigation extends React.Component {
    render() {
        return (
            <div>
                <h5>Menu</h5>
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
            </div>
        )
    }
}

export default FooterNavigation