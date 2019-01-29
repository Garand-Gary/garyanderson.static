import React from 'react'
import { withRouteData } from 'react-static'
import Paragraphs from '../components/paragraphs'

export default withRouteData(({ me }) => (
    <div>
        <Paragraphs paragraphs={me} />
    </div>
))
