import React from 'react'
import { withRouteData } from 'react-static'
import Projects from '../components/projects'

export default withRouteData(({ projects }) => (
  <div>
    <Projects projects={projects} />
  </div>
))
