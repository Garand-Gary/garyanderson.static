import React from 'react'
import PropTypes from 'prop-types'

class Paragraphs extends React.Component {
    render() {
        return this.props.paragraphs.map((paragraph,key) =>
            <p key={key}>{paragraph.text}</p>
        )
    }
}

Paragraphs.propTypes = {
    paragraphs: PropTypes.array
}

export default Paragraphs