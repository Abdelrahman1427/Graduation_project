import React, { useState,useEffect } from 'react';
import '../css/style.css'
import '../css/navStyle.css'
import { BrowserRouter, Link } from 'react-router-dom';
import logo from '../imgs/image__5_-removebg-preview.png'
import { useTranslation } from 'react-i18next';
import { HashLink } from 'react-router-hash-link';
const NavBar =()=>{

    const { t } = useTranslation();
const [navbar,setNavbar] = useState(false);
const [navConatinerbig ,setNavContainerBig] = useState(true);
const [navresp , setNavresponive]= useState(false);
const [toggle, setToggle]=useState(false);

const [logged , setlog] = useState(false)
const [zClassList , setZclass] = useState(false)
const [zSmalClassList , seSmaltZclass] = useState(false)



const itemValue = localStorage.getItem('NameUser');
const onClickLog =()=>{
    if(localStorage.length>0)
    {
        setlog(true);
        localStorage.clear();
    }

}

const NameUser = localStorage.getItem('NameUser') ;

 useEffect(() => {
    const timer = setTimeout(() => {
        setZclass(true);
    }, 6000);

    // Clean up the timer when the component unmounts or the value changes
    return () => {
      clearTimeout(timer);
    };

  }, []);

  useEffect(()=>{

    if (itemValue === 'undefined') {
        localStorage.clear();
    }
  },[])

const changeBackground =()=>{
    if(window.innerWidth > 760)
    {
        setNavContainerBig(true);
        if (window.scrollY > 100) {
            setNavbar(true);
            // setZclass(true);

        }
        else
        {
            setNavbar(false);
            // setZclass(false )

        }

    }
    else
    {
        setNavContainerBig(false);
        setNavresponive(true);
        seSmaltZclass(true);
    }
}

useEffect(() => {
    changeBackground()
    // adding the event when scroll change Logo
    window.addEventListener("scroll", changeBackground)
    window.addEventListener("resize", changeBackground)
})
    return(
        <div>

    <nav className= {`${navConatinerbig ? "NavContainer d-flex" : 'display-None'} ${zClassList ? 'zClass' : 'zClasssmall'}`} id="NavContainer">
        <div className ={navbar ? "navMain  firsthalf zClass navScroll d-flex trans " : "navMain d-flex trans"} id='navMain'>
            <div className="orderWapper  d-flex">
                <ul className="orderNavList d-flex ">
                    <li className='orderLI '><Link className='LinkNav' to='/AboutTeam' >{t('AboutUs')} </Link></li>
                    <li className='orderLI '><HashLink to='#Services' className='LinkNav' smooth>{t('Services')} </HashLink></li>
                </ul>
            </div>
        </div>
            <div className={navbar ? " navlogo navLogoScroll  d-flex" : " navlogo  d-flex" }>

            </div>

        <div className ={navbar ? "navMain navScroll secondhalf d-flex trans" : "navMain d-flex trans"} id='navMain'>
            <div className="orderWapper d-flex">
                <ul className="orderNavList d-flex ">
                    <li className="orderLI " > <HashLink to='#footer' className='LinkNav' smooth>  {t('Contact_Us')}  </HashLink></li>
                    <li className='orderLI ' onClick={onClickLog} ><Link className='LinkNav'   to={!NameUser ? '/Login' : '/'} >  {!NameUser ? t('Login') : t('logout') }</Link></li>
                </ul>
            </div>
        </div>
</nav>
<nav className=   {`${navresp ? "NavContainer d-flex" : 'display-None'} ${zClassList ? 'zSmalClassList' : 'zClasssmall '}`}  >
        <div className={toggle ? "navresponsivebtn whiteBackGroud" :'navresponsivebtn'}id="navresponsivebtn">

        <div className="navresWrapper" id="navresWrapper" onClick={()=>setToggle(!toggle)}>
        <img src={logo} alt="portAthourity" />
        </div>
        <div className={toggle ?'navresMenu':''} id="navresMenu">
        <div className={toggle ?'navresTitles d-flex':'display-None'}>
                <ul className="navresTitleslist">
                    <li className="hover-underline-animation"><Link className='LinkNav'  to= '/AboutTeam'> {t('AboutUs')}  </Link></li>
                    <li className="hover-underline-animation"> <HashLink to='#Services' className='LinkNav' smooth>{t('Services')} </HashLink> </li>
                    <li className="hover-underline-animation"><HashLink className='LinkNav' to="#footer" smooth> {t('Contact_Us')}</HashLink> </li>
                    <li className="hover-underline-animation loginpad hover-underline-animationlogin"  onClick={onClickLog} > <Link className='LinkNav'  to={!NameUser ? '/Login' : '/'} >  {!NameUser ? t('Login') : t('logout') }  </Link> </li>
                </ul>
            </div>

    </div>
    </div>
</nav>

</div>

    )
}

export default NavBar;