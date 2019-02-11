import React from 'react'
import ProjectTech from './project-tech'
import PropTypes from 'prop-types'

class ProjectTechList extends React.Component {
    render() {
        return this.props.technologies.map((tech,key) =>
            <ProjectTech key={key} tech={tech}/>
        )
    }
}

ProjectTechList.propTypes = {
    technologies: PropTypes.array
}

export default ProjectTechList