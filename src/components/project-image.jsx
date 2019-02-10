import React from 'react'

class ProjectImage extends React.Component {
    render() {
        const images = require.context('../../public/images/projects',true);
        const imagePath = './' + this.props.image;

        return (
            <img src={images(imagePath)} />
        )
    }
}

export default ProjectImage