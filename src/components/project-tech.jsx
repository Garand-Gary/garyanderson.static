import React from 'react'

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

export default ProjectTech