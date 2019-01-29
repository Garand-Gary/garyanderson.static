import React from 'react'

class Project extends React.Component {
    render() {
        const proj = this.props.project;

        return (
            <h1>{proj.title}</h1>
        )
    }
}

export default Project