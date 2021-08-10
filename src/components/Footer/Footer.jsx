import React from 'react'
import './Footer.scss'
import Logo from '../../assets/images/logo.svg'

const Footer = () => {
   return (
      <div className="footer">
         <img data-aos="fade-down" src={Logo} alt="Blogr Logo" />
         <div className="footer-item">
            <h4 data-aos="fade-down">Product</h4>
            <ul data-aos="fade-down">
               <li>Overview</li>
               <li>Pricing</li>
               <li>Marketplace</li>
               <li>Features</li>
               <li>Integrations</li>
            </ul>
         </div>
         <div className="footer-item">
            <h4 data-aos="fade-down">Company</h4>
            <ul data-aos="fade-down">
               <li>About</li>
               <li>Team</li>
               <li>Blog</li>
               <li>Careers</li>
            </ul>
         </div>
         <div className="footer-item">
            <h4 data-aos="fade-down">Connect</h4>
            <ul data-aos="fade-down">
               <li>Contact</li>
               <li>Newsletter</li>
               <li>LinkedIn</li>
            </ul>
         </div>
      </div>
   )
}

export default Footer
