import React from 'react'
import { withRouteData } from 'react-static'
import Paragraphs from '../components/paragraphs'

export default withRouteData(({ home }) => (
    <div>
        <Paragraphs paragraphs = {home} />
    </div>
))
