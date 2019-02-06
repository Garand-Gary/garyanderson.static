import React from 'react'
import { withRouteData } from 'react-static'
import ContentHeader from '../components/content-header'
import Projects from '../components/projects'

export default withRouteData(({ projects }) => (
  <div>
    <ContentHeader title = {projects.title} subtitle = {projects.subtitle} />
    <Projects projects={projects.projects} />
  </div>
))
