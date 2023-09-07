import '../cssDashBoard/dashSearch.css';
import searchIcon from '../imgs/DashboardIcons/search.png';
import settingsIcon from '../imgs/DashboardIcons/setting.png';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const DashSearch = () => {
  const { t } = useTranslation();

  return (
    <section className="SearchContainer">
      <div className='title-of-wh-dash'>
        <h1>{t('Main_dash')}</h1>
        <p className='sub-title-dash'>{t('dash-subtitle-track')}</p>
      </div>
      <div className='srch-of-wh-dash'>
      <div className='settings-bar'>
      <img src={settingsIcon} className='special-iForSrch setting-i'/>
      </div>
      <Link className='linksMenu' to='/Menuemployee'>
      <div className='reports-btn-dashboard'>
        <p>{t('reports-dash')}</p>
      </div>
      </Link>
      </div>
   
    </section>
  )
}

export default DashSearch
