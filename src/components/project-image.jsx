import React from 'react'
import PropTypes from 'prop-types'

class ProjectImage extends React.Component {
    render() {
        const images = require.context('../../public/images/projects',true);
        const imagePath = './' + this.props.image;

        return (
            <img src={images(imagePath)} />
        )
    }
}

ProjectImage.propTypes = {
    image: PropTypes.string
}

export default ProjectImage