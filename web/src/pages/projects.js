import React from 'react'
import { withRouteData } from 'react-static'
import Helmet from 'react-helmet'
import ContentHeader from '../components/content-header'
import Projects from '../components/projects'

export default withRouteData(({ projects }) => (
    <div>
        <Helmet>
            <title>Projects - GaryAnderson.org</title>
        </Helmet>
        <ContentHeader title = {projects.title} subtitle = {projects.subtitle} />
        <Projects projects={projects.projects} />
    </div>
))
