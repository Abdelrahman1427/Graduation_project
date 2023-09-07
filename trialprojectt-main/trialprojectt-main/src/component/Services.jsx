import React from 'react';
import sixth from '../imgs/icons/container.png';
import firstSvg from '../imgs/icons/ship.png';
import secondSvg from '../imgs/icons/anchors.png';
import thirdSvg from '../imgs/icons/boat.png';
import fourthSvg from '../imgs/icons/storage.png';
import fifthSvg from '../imgs/icons/oil.png';
import '../css/Services.css'
import { useTranslation } from 'react-i18next';

const TheServices =()=>{
  const { t } = useTranslation();
    return(
      <section className='services-container'>
        <div className='first-col-cards'>
            <div className="card-services">
               <div className="circle"></div>
               <div className="circle"></div>
               <div className="card-inner">
               <img className='icon-services' src={sixth} alt=""/>
               <p className='service-subtitle'>{t('Container')}</p>
               </div>
            </div>
            <div className="card-services">
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="card-inner">
              <img className='icon-services' src={thirdSvg} alt=""/>
               <p className='service-subtitle'>{t('Cruise')}</p>
              </div>
            </div>
        </div>
        <div className='second-col-cards'>
            <div className="card-services">
               <div className="circle"></div>
               <div className="circle"></div>
               <div className="card-inner">
               <img className='icon-services' src={firstSvg} alt=""/>
               <p className='service-subtitle'>{t('General_cargo')}</p>
               </div>
            </div>
            <div className="card-services">
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="card-inner">
              <img className='icon-services' src={fourthSvg} alt=""/>
              <p className='service-subtitle'>{t('Warehousing')}</p>
              </div>
            </div>
        </div>
        <div className='third-col-cards'>
            <div className="card-services">
               <div className="circle"></div>
               <div className="circle"></div>
               <div className="card-inner">
               <img className='icon-services' src={secondSvg} alt=""/>
               <p className='service-subtitle'>{t('Mar_serv')}</p>
               </div>
            </div>
            <div className="card-services">
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="card-inner">
              <img className='icon-services' src={fifthSvg} alt=""/>
              <p className='service-subtitle'>{t('Liq_Gas')}</p>
              </div>
            </div>
        </div>
      </section>
    );
}

export default TheServices;