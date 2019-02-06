import React from 'react'
import { withRouteData } from 'react-static'
import ContentHeader from '../components/content-header'
import Paragraphs from '../components/paragraphs'

export default withRouteData(({ home }) => (
    <div>
        <ContentHeader title = {home.title} subtitle = {home.subtitle} />
        <Paragraphs paragraphs = {home.paragraphs} />
    </div>
))
