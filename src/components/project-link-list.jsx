import React from 'react'
import PropTypes from 'prop-types'

class LinkList extends React.Component {
    render() {
        return (
            <ul className="link-list">
                {this.props.links.map((link,key) =>
                    <li key={key}><a href={link.url}>{link.text}</a></li>
                )}
            </ul>
        )
    }
}

LinkList.propTypes = {
    links: PropTypes.array
}

export default LinkList