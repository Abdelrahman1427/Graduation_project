import '../cssDashBoard/dashmenu.css';
import logo from '../imgs/image__5_-removebg-preview.png'
import statsIcon from '../imgs/DashboardIcons/state.png';
import roleIcon from '../imgs/DashboardIcons/profile.png';
import weatherIcon from '../imgs/DashboardIcons/weather.png';
import AnalsysOne from '../imgs/DashboardIcons/analytics.png';
import AnalsysTwo from '../imgs/DashboardIcons/report.png';
import logoutIcon from '../imgs/DashboardIcons/logout.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import menuLogoIcon from '../imgs/DashboardIcons/menu.png'

const DashboardMenu = () => {
  const { t } = useTranslation();
  const userType = localStorage.getItem('roleUser') ;
  const userName= localStorage.getItem('NameUser') ;
  const navigate = useNavigate();
  const onClickLogOut = () => {
    localStorage.clear();
    navigate('/');
  };
  return (
    <section className="dashContainer">
    <div className="titleDash d-flex">
      <img className='LogoDashImg' src={logo}alt="" />
      <span className='menu-dash-title'>{t('port_Authority')}</span>
    </div>
    <div className='wh-dash-Menu-elem-span'>
      <ul className='Dash-Menu-links'>
      <Link className='linksMenu' to='/Dashboard/Analysis'>
         <li className='dash-menu-elements'>
              <img src={statsIcon} className='dash-elem-iconA'/>
              <p className='menu-text'>{t('Dashboard')}</p>
         </li>
        </Link>
        <Link className='linksMenu' to='/Dashboard/Weather'>
         <li className='dash-menu-elements'>
             <img src={weatherIcon} className='dash-elem-iconA weather-sora'/>
             <p className='menu-text'>{t('Weather')}</p>
         </li>
         </Link>
         <Link className='linksMenu' to='/Dashboard/Logs'>
         <li className='dash-menu-elements'>
             <img src={AnalsysOne} className='dash-elem-iconA logs-sora'/>
             <p className='menu-text'>{t('logs')}</p>
         </li>
         </Link>
      </ul>
    </div>
    <div className='user-card-kamel'>
      <img src={roleIcon} className='dash-user-Icon'/>
      <p className='welcome-dashboard'>{t('Welcome')}</p>
      <input type='text' readOnly className='account-text' placeholder='@username' value={userName}/>
      <input type='text' readOnly className='account-text role-acc' placeholder='Role' value={userType}/>
      <div className='logout-icon-container' onClick={onClickLogOut}>
      <img src={logoutIcon} className='logout-Icon'/>
      </div>
    </div>
    </section>
  );
}

export default DashboardMenu
