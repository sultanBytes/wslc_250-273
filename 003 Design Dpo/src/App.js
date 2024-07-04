import logo from './logo.svg';
import './App.css';
import Header from './components/common-components/Header';
import HeroSection from './components/HeroSection';
import BenifitsSection from './components/BenifitsSection';
import beni1 from './assests/images/benefits_subimage_1.jpg';
import beni2 from './assests/images/benefits_subimage_2.jpg';
import beni3 from './assests/images/benefits_subimage_3.jpg';
import beni4 from './assests/images/benefits_subimage_4.png';
import beni5 from './assests/images/benefits_subimage_5.jpg';
import beniSub1 from './assests/images/benefits_subimage_icon_21681880477.svg'
import beniSub2 from './assests/images/benefits_subimage_icon_21681880477.svg'
import beniSub3 from './assests/images/benefits_subimage_icon_31681880478.svg'
import beniSub4 from './assests/images/benefits_subimage_icon_41681880478.svg'
import beniSub5 from './assests/images/benefits_subimage_icon_51681880478.svg'


function App() {

  const benifitArr = [
    {
      img:beni1,
      content:{
        title:'Many Options In All Designs',
        btn:'Explore design',
        subImg:beniSub1
      }
    },
    {
      img:beni2,
      content:{
        title:'High Resolution 3D Drawings',
        btn:'know more',
        subImg:beniSub2
      }
    },
    {
      img:beni3,
      content:{
        title:'2D Measurements Of Per Drawing',
        btn:'View more',
        subImg:beniSub3
      }
    },
    {
      img:beni4,
      content:{
        title:'Material List For Cost Calculation Of Furniture',
        btn:'View more',
        subImg:beniSub4
      }
    },
    {
      img:beni5,
      content:{
        title:'Get Daily Latest Designs Updates',
        btn:'View more',
        subImg:beniSub5
      }
    }
  ];
  return (
    <>
      <Header />
      <HeroSection/>
      <BenifitsSection details={benifitArr}/>
    </>
  );
}

export default App;
