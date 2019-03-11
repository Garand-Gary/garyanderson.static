import React from 'react'
import { withRouteData } from 'react-static'
import Helmet from 'react-helmet'
import ContentHeader from '../components/content-header'
import Paragraphs from '../components/paragraphs'

export default withRouteData(({ home }) => (
    <div>
        <Helmet>
            <title>Home - GaryAnderson.org</title>
        </Helmet>
        <ContentHeader title = {home.title} subtitle = {home.subtitle} />
        <Paragraphs paragraphs = {home.paragraphs} />
    </div>
))
