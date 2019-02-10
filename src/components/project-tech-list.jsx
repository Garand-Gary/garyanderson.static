import React from 'react'
import ProjectTech from './project-tech'

class ProjectTechList extends React.Component {
    render() {
        return this.props.technologies.map((tech,key) =>
            <ProjectTech key={key} tech={tech}/>
        )
    }
}

export default ProjectTechList