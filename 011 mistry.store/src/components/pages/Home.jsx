import React, { useState } from 'react'
import Header from '../common-components/Header';
import innerImg from './../../assets/images/collections-no-bg.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Marquee, { Motion, randomIntFromInterval } from "react-marquee-slider";
import times from "lodash/times";

import slideImg1 from './../../assets/images/collections_banner.jpg';
import slideImg2 from './../../assets/images/deliveryPackageBanner.jpg';
import slideImg3 from './../../assets/images/500+Coupon+Banner.png';
import slideImg4 from './../../assets/images/Low+Price+Challenge+Banner.png';


const Home = () => {
    const [sliderVelocity, setVelocity] = useState(100);

    let slider1 = {
        accessibility: true,
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        pauseOnHover: true,
        autoplaySpeed: 1500,
        responsive: [
            {
                breakpoint: 992,
                slider1: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 667,
                slider1: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <div>
            <Header />
            <div className='container introduction-banner'>
                <h3>introducing</h3>
                <div className='intro-inner'>
                    <img src={innerImg} />
                </div>
                <p>
                    A curated collection of trending interior materials,
                </p>
                <p>
                    tailored exclusively for all Architects, Interior Designers & Contractors
                </p>
                <div
                    style={{
                        fontWeight: '500'
                    }}
                >
                    Decorative Wall Panels | Louvers | Modular Hardware & Accessories | Laminates | Flooring Solutions | Invisible Grille
                </div>
            </div>
            <div className=' mt-5'>
                <Slider {...slider1}>
                    <div className='px-2'>
                        <div>
                            <img src={slideImg1} />
                        </div>
                    </div>
                    <div className='px-2'>
                        <div>
                            <img src={slideImg2} />
                        </div>
                    </div>
                    <div className='px-2'>
                        <div>
                            <img src={slideImg3} />
                        </div>
                    </div>
                    <div className='px-2'>
                        <div>
                            <img src={slideImg4} />
                        </div>
                    </div>
                </Slider>
            </div>

            <div className='my-5'>
                <div style={{  backgroundColor:'red', fontSize:'30px', color:'white' }} onMouseEnter={()=>{setVelocity(0)}} onMouseLeave={()=>{setVelocity(100)}}>
                    <Marquee velocity={sliderVelocity} minScale={0.7} resetAfterTries={200} direction='rtl'>
                        {times(1, Number).map((id) => (
                           
                                <div>
                                    Decorative Wall Panels | Louvers | Modular Hardware & Accessories | Laminates | Flooring Solutions | Invisible Grille
                                </div>
                           
                        ))}
                    </Marquee>
                </div>;
            </div>
        </div>
    )
}

export default Home