import React from 'react'
import LinkList from './project-link-list'

class ProjectInfo extends React.Component {
    render() {
        const title = this.props.title;
        const blurb = this.props.blurb;
        const completed = this.props.completed;
        const links = this.props.links;

        return (
            <table>
                <tbody>
                    <tr>
                        <td colSpan="2"><h6>{title}</h6></td>
                    </tr>
                    <tr>
                        <td colSpan="2">{blurb}</td>
                    </tr>
                    <tr>
                        <td>Completed:</td>
                        <td>{completed}</td>
                    </tr>
                    <tr>
                        <td>Links:</td>
                        <td><LinkList links = {links} /></td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default ProjectInfo