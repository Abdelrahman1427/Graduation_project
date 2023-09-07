import '../css/style.css'
import NavBar from "./NavBar";
import LanguageChanger from './LanguageChanger';
import '../css/heroStyle.css'
import Footer from './Footer'
import AboutPort from './About.jsx';
import HeroSection from './HeroSection';
import ServicesMain from './ServicesMain';
import TimelineSection from './Timeline.jsx';
import Weather from '../Dashboard/Weather';
import Logs from './Logs';
import AboutTeam from './AboutTeam';
const HeroStart =()=>{
    return(
        <>

        <NavBar/>
        <LanguageChanger />
        <div className="heroConatiner">
         <HeroSection/>
         </div>
            <AboutPort/>
            <ServicesMain />
            <TimelineSection/>
            <Footer id="footer"/>
        </>

    )
}
export default HeroStart;