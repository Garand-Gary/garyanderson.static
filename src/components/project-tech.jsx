import React from 'react'
import PropTypes from 'prop-types'

class ProjectTech extends React.Component {
    render() {
        const tech = this.props.tech;
        const technology = tech.technology;
        const usage = tech.usage;

        const images = require.context('../../public/images/tech',true)
        const imagePath = './' + technology + '.png'

        return (
            <img src={images(imagePath)} title={usage} />
        )
    }
}

ProjectTech.propTypes = {
    tech: PropTypes.object
}

export default ProjectTech