import React from 'react'
import '../styles/banner.css'

export const Banner = () => {
  return (
    <div className='bn-wrapper'>
        <img src="./images/hero-banner.jpg" alt="banner" />
        <h1 className='banner-caption'>
          Wild Life <span style={{color: "#94c93d"}}>Podcast</span>
        </h1>
    </div>
  )
}
