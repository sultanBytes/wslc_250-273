import React from 'react';
import slideImg from './../assests/images/benefits_subimage_5.jpg';
import leftArrow from './../assests/images/arrow-left-slider.png';
import rightArrow from './../assests/images/arrow-right-slider.png';

const HeroSection = () => {
  return (
    <div className='hero-section'>
        <div className='container'>
            <div className='hero-section-content'>
                <h1>
                Design Your Dream Home...
                </h1>
                <h1>
                At Your Fingertips
                </h1>
                <button>Explore More</button>
            </div>
            <div className='hero-section-slider'>
                <div className='slider-img'>
                    <img src={slideImg}></img>
                </div>
                <div className='navs'>
                    <div>
                        <img src={leftArrow}></img>
                    </div>
                    <div>
                        <img src={rightArrow}></img>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroSection