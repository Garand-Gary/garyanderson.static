import React from 'react'

class Paragraphs extends React.Component {
    render() {
        return this.props.paragraphs.map((paragraph,key) =>
            <p key={key}>{paragraph.text}</p>
        )
    }
}

export default Paragraphs