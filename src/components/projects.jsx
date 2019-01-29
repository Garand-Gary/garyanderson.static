import React from 'react'
import Project from './project'

class Projects extends React.Component {
    render() {
        return this.props.projects.map((project, key) =>
            <Project project={project} key={key} />
        )
    }
}

export default Projects