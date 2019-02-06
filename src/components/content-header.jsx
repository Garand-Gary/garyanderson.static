import React from 'react'

class ContentHeader extends React.Component {
    render() {
        const title = this.props.title;
        const subtitle = this.props.subtitle;

        return (
            <div>
                <h3>{title}</h3>
                <h4>{subtitle}</h4>
            </div>
        )
    }
}

export default ContentHeader