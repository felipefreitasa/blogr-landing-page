import React from 'react'
import './Banner.scss'
import BannerBg from '../../assets/images/bg-pattern-intro.svg'
import Navbar from '../Navbar/Navbar'

const Banner = () => {
   return (
      <div className="banner">
         <Navbar />
         <img src={BannerBg} alt="Background Banner" />
         <div className="banner-content">
            <h1>A modern publishing platform</h1>
            <p>Grow your audience and build your online brand</p>
            <div className="banner-buttons">
               <button>Start for free</button>
               <button>Learn More</button>
            </div>
         </div>
      </div>
   )
}

export default Banner
