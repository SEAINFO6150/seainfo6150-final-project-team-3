import React from 'react'
import banner from './image/banner.jpg';
import style from './styles/banner.css'


const Banner = (props) => {
    return (
            <div className="banner-container">
                <img className="banner-img" src={banner} alt="Banner" /> 
                <h1 className="banner-text"> Pets Care</h1>
                <p className="banner-subText">Comprehensive tips for pet parents of dogs, cats and horses.</p>
            </div>
    )
}

export default Banner
