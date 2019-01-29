import React from 'react'
import FooterNavigation from './footer-navigation'
import SocialLinks from './social-links'
import OtherLinks from './other-links'

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div>
                    <FooterNavigation />
                </div>
                <div>
                    <SocialLinks />
                </div>
                <div>
                    <OtherLinks />
                </div>
                <div>&copy; Garand Software Limited</div>
            </footer>
        )
    }
}

export default Footer