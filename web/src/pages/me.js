import React from 'react'
import { withRouteData } from 'react-static'
import Helmet from 'react-helmet'
import ContentHeader from '../components/content-header'
import Paragraphs from '../components/paragraphs'

export default withRouteData(({ me }) => (
    <div>
        <Helmet>
            <title>Me - GaryAnderson.org</title>
        </Helmet>
        <ContentHeader title = {me.title} subtitle = {me.subtitle} />
        <Paragraphs paragraphs = {me.paragraphs} />
    </div>
))
