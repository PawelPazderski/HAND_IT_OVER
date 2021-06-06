import React from 'react'
import DecorationHeading from '../../../components/DecorationHeading'
import "./homecontact.scss"
import HomeFooter from '../HomeFooter'

const HomeContact = () => {
    return (
        <div id="kontakt" className="home-contact-container">
            <div className="home-contact-boxes">
                <div className="home-contact-box-left">
               </div>
                    <div className="home-contact-box-right">
                        <DecorationHeading title="Skontaktuj się z nami"/>
                        <div className="contact-form"></div>
                    </div>
               </div>
            
            <div className="footer-container">
                <HomeFooter />
            </div>
            
        </div>
    )
}

export default HomeContact