import React from 'react'
import Paragraphs from './paragraphs'
import ProjectInfo from './project-info'
import ProjectTechList from './project-tech-list'
import PropTypes from 'prop-types'
import LinkList from './project-link-list'

class Project extends React.Component {
    render() {
        const proj = this.props.project;
        const title = proj.title;
        const blurb = this.props.blurb;

        return (
            <div className="project col-lg-6 col-md-12">
                <div className="row">
                    <div className="project-title col-xs-12">
                        <h6>{title}</h6>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-11">
                    </div>
                    <div className="col-xs-1">
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        <LinkList links = {proj.links} />
                    </div>
                </div>
            </div>
        )
    }
}

Project.propTypes = {
    project: PropTypes.object
}

export default Project