import React from 'react'
import Project from './project'
import PropTypes from 'prop-types'

class Projects extends React.Component {
    render() {
        return this.props.projects.map((project, key) =>
            <Project project={project} key={key} />
        )
    }
}

Projects.propTypes = {
    projects: PropTypes.array
}

export default Projects