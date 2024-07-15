import React from 'react'
import Header from '../common-components/Header';
import innerImg from './../../assets/images/collections-no-bg.png';


const Home = () => {
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
                    fontWeight:'500'
                }}
                >
                    Decorative Wall Panels | Louvers | Modular Hardware & Accessories | Laminates | Flooring Solutions | Invisible Grille
                </div>
            </div>
        </div>
    )
}

export default Home