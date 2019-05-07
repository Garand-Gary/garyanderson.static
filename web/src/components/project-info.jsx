import React from 'react'
import PropTypes from 'prop-types'

class ProjectInfo extends React.Component {
    render() {
        const title = this.props.title;
        const blurb = this.props.blurb;

        return (
            <table>
                <tbody>
                    <tr>
                        <td colSpan="2"><h6>{title}</h6></td>
                    </tr>
                    <tr>
                        <td colSpan="2">{blurb}</td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

ProjectInfo.propTypes = {
    title: PropTypes.string,
    blurb: PropTypes.string,
    completed: PropTypes.string,
    links: PropTypes.array
}

export default ProjectInfo