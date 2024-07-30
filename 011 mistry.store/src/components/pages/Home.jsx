import React, { useEffect, useState } from 'react'
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

import tabImg1 from './../../assets/images/elctricals1.svg';
import tabImg2 from './../../assets/images/elctricals2.svg';
import tabImg3 from './../../assets/images/elctricals3.svg';
import tabImg4 from './../../assets/images/elctricals4.svg';
import tabImg5 from './../../assets/images/elctricals5.svg';
import tabImg6 from './../../assets/images/elctricals6.svg';
import tabImg7 from './../../assets/images/elctricals7.svg';
import tabImg8 from './../../assets/images/elctricals8.svg';



const Home = () => {
    const [sliderVelocity, setVelocity] = useState(100);
    const [activeTabCat, setTabCat] = useState('electricals');
    const [tabItems, setTabItems] = useState([]);

    const tabContent = [
        {
            title:'electricals',
            img:tabImg1
        },
        {
            title:'electricals',
            img:tabImg1
        },
        {
            title:'electricals',
            img:tabImg1
        },
        {
            title:'electricals',
            img:tabImg1
        },
        {
            title:'electricals',
            img:tabImg1
        },
        {
            title:'electricals',
            img:tabImg1
        },
        {
            title:'electricals',
            img:tabImg2
        },
        {
            title:'electricals',
            img:tabImg2
        },
        {
            title:'electricals',
            img:tabImg2
        },
        {
            title:'electricals',
            img:tabImg2
        },
        {
            title:'electricals',
            img:tabImg2
        },
        {
            title:'electricals',
            img:tabImg2
        },
        {
            title:'electricals',
            img:tabImg2
        },
        {
            title:'electricals',
            img:tabImg1
        },
        {
            title:'electricals',
            img:tabImg1
        },
        {
            title:'paints',
            img:tabImg3
        },
        {
            title:'paints',
            img:tabImg4
        },
        {
            title:'paints',
            img:tabImg3
        },
        {
            title:'paints',
            img:tabImg4
        },
        {
            title:'paints',
            img:tabImg3
        },
        {
            title:'paints',
            img:tabImg4
        },
        {
            title:'paints',
            img:tabImg3
        },
        {
            title:'paints',
            img:tabImg4
        },
        {
            title:'paints',
            img:tabImg3
        },
        {
            title:'paints',
            img:tabImg4
        },
        {
            title:'paints',
            img:tabImg3
        },
        {
            title:'paints',
            img:tabImg4
        },
        {
            title:'paints',
            img:tabImg3
        },
        {
            title:'paints',
            img:tabImg4
        },
        {
            title:'paints',
            img:tabImg3
        },
        {
            title:'wood',
            img:tabImg5
        },
        {
            title:'wood',
            img:tabImg6
        },
        {
            title:'wood',
            img:tabImg5
        },
        {
            title:'wood',
            img:tabImg6
        },
        {
            title:'wood',
            img:tabImg5
        },
        {
            title:'wood',
            img:tabImg6
        },
        {
            title:'wood',
            img:tabImg5
        },
        {
            title:'wood',
            img:tabImg6
        },
        {
            title:'wood',
            img:tabImg5
        },
        {
            title:'wood',
            img:tabImg6
        },
        {
            title:'wood',
            img:tabImg5
        },
        {
            title:'wood',
            img:tabImg6
        },
        {
            title:'wood',
            img:tabImg5
        },
        {
            title:'wood',
            img:tabImg6
        },
        {
            title:'wood',
            img:tabImg5
        },
        {
            title:'wood',
            img:tabImg6
        },
        {
            title:'wood',
            img:tabImg5
        },
        {
            title:'wood',
            img:tabImg6
        },
        {
            title:'wood',
            img:tabImg5
        },
        {
            title:'hardware',
            img:tabImg7
        },
        {
            title:'hardware',
            img:tabImg8
        },
        {
            title:'hardware',
            img:tabImg7
        },
        {
            title:'hardware',
            img:tabImg8
        },
        {
            title:'hardware',
            img:tabImg7
        },
        {
            title:'hardware',
            img:tabImg8
        },
        {
            title:'hardware',
            img:tabImg7
        },
        {
            title:'hardware',
            img:tabImg8
        },
        {
            title:'hardware',
            img:tabImg7
        },
        {
            title:'hardware',
            img:tabImg8
        },
        {
            title:'hardware',
            img:tabImg7
        },
        {
            title:'hardware',
            img:tabImg8
        },
        {
            title:'hardware',
            img:tabImg7
        },
        {
            title:'hardware',
            img:tabImg8
        },
        {
            title:'hardware',
            img:tabImg7
        },
        {
            title:'hardware',
            img:tabImg8
        },
        {
            title:'hardware',
            img:tabImg7
        },
        {
            title:'hardware',
            img:tabImg8
        },
        {
            title:'hardware',
            img:tabImg7
        },
        {
            title:'hardware',
            img:tabImg8
        },
        {
            title:'hardware',
            img:tabImg7
        },
        {
            title:'hardware',
            img:tabImg8
        },
        {
            title:'hardware',
            img:tabImg7
        },
        {
            title:'hardware',
            img:tabImg8
        },
        {
            title:'hardware',
            img:tabImg7
        },
        {
            title:'hardware',
            img:tabImg8
        },
        {
            title:'hardware',
            img:tabImg7
        },
        {
            title:'hardware',
            img:tabImg8
        },
        {
            title:'hardware',
            img:tabImg7
        },
        {
            title:'hardware',
            img:tabImg8
        },
        {
            title:'hardware',
            img:tabImg7
        },
        {
            title:'hardware',
            img:tabImg8
        },
        {
            title:'hardware',
            img:tabImg7
        },
        {
            title:'hardware',
            img:tabImg8
        },
        {
            title:'hardware',
            img:tabImg7
        },
        {
            title:'hardware',
            img:tabImg8
        },
        {
            title:'hardware',
            img:tabImg7
        },
        {
            title:'hardware',
            img:tabImg8
        },
        {
            title:'hardware',
            img:tabImg7
        },
        {
            title:'hardware',
            img:tabImg8
        },
        {
            title:'hardware',
            img:tabImg7
        },
        {
            title:'hardware',
            img:tabImg8
        },
        {
            title:'hardware',
            img:tabImg7
        },
        {
            title:'hardware',
            img:tabImg8
        },
        {
            title:'hardware',
            img:tabImg7
        },
        {
            title:'hardware',
            img:tabImg8
        },
        {
            title:'hardware',
            img:tabImg7
        },
        {
            title:'hardware',
            img:tabImg8
        }
        
    ];

    useEffect(()=>{
        const data = tabContent.filter((item)=> item.title === activeTabCat);
        setTabItems(data);

        // console.log(data);
    },[activeTabCat]);

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
                           
                                <div style={{backgroundColor:'grey'}}>
                                    Decorative Wall Panels | Louvers | Modular Hardware & Accessories | Laminates | Flooring Solutions | Invisible Grille
                                </div>
                           
                        ))}
                    </Marquee>
                </div>;
            </div>

            <div className='container-fluid'>
                <div className='container border rounded-3 p-4'>
                        <h1>Trusted by <span className='text-danger'> 75+ Brands</span></h1>
                        <div className='tab-head py-3'>
                            <button className={`rounded-pill fw-semibold border border-dark-subtle py-2 px-4 me-3 ${(activeTabCat === 'electricals') ? 'active-tab-btn' : ''}`}
                            onClick={()=>{setTabCat('electricals')}}>Electricals</button>
                            <button className={`rounded-pill fw-semibold border border-dark-subtle py-2 px-4 me-3 ${(activeTabCat === 'paints') ? 'active-tab-btn' : ''}`}  onClick={()=>{setTabCat('paints')}}>Paints</button>
                            <button className={`rounded-pill fw-semibold border border-dark-subtle py-2 px-4 me-3 ${(activeTabCat === 'wood') ? 'active-tab-btn' : ''}`} onClick={()=>{setTabCat('wood')}}>Wood Materials</button>
                            <button className={`rounded-pill fw-semibold border border-dark-subtle py-2 px-4 me-3 ${(activeTabCat === 'hardware') ? 'active-tab-btn' : ''}`} onClick={()=>{setTabCat('hardware')}}>Hardware & Plumbing</button>
                        </div>
                        <div className='tab-body'>
                            {
                                tabItems.map((tabdata)=>(
                                    <div className='p-3 border bg-white rounded'>
                                        <img src={tabdata.img} />
                                    </div>
                                ))
                            }
                        </div>
                </div>
            </div>

            <div style={{height:'50vh'}}></div>
        </div>
    )
}

export default Home