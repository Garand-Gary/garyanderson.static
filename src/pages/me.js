import React from 'react'
import { withRouteData } from 'react-static'
import ContentHeader from '../components/content-header'
import Paragraphs from '../components/paragraphs'

export default withRouteData(({ me }) => (
    <div>
        <ContentHeader title = {me.title} subtitle = {me.subtitle} />
        <Paragraphs paragraphs={me.paragraphs} />
    </div>
))
