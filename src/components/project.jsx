﻿import React from 'react'
import Paragraphs from './paragraphs'
import ProjectInfo from './project-info'
import ProjectTechList from './project-tech-list'
import ProjectImage from './project-image'
import PropTypes from 'prop-types'

class Project extends React.Component {
    render() {
        const proj = this.props.project;

        return (
            <div className="project">
                <div className="project-header row">
                    <div className="project-info col-md-5">
                        <ProjectInfo title = {proj.title} blurb = {proj.blurb} completed = {proj.completed} links = {proj.links} />
                    </div>
                    <div className="project-tech col-md-4">
                        <ProjectTechList technologies={proj.technologies} />
                    </div>
                    <div className="project-image col-md-3">
                        <ProjectImage image = {proj.image} />
                    </div>
                </div>
                <div className="project-description">
                    <Paragraphs paragraphs = {proj.description} />
                </div>
            </div>
        )
    }
}

Project.propTypes = {
    project: PropTypes.object
}

export default Project