import React from 'react'
import FooterNavigation from './footer-navigation'
import SocialLinks from './social-links'
import OtherLinks from './other-links'

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="row">
                    <div className="col-sm-3">
                        <FooterNavigation />
                    </div>
                    <div className="col-sm-3">
                        <SocialLinks />
                    </div>
                    <div className="col-sm-6">
                        <OtherLinks />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 copyright">&copy; Garand Software Limited</div>
                </div>
            </footer>
        )
    }
}

export default Footer