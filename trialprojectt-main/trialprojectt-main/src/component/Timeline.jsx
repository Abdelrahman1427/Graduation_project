import React from 'react';
import '../css/timeline.css';
import timelinepic from '../imgs/secInfo.jpg';
import sora from '../imgs/Logo.png';
import AOS from 'aos';
import { useTranslation } from 'react-i18next';

const TimelineSection = () => {
    const { t } = useTranslation();
    return (
    <div className='scrollable'>
    <header className='timeline-section-title'>
            <h1>{t('Achievements')}</h1>
    </header>
    <ul className="timeline">
        <li data-aos="fade-right">
            <div className="direction-r">
            <div className="flag-wrapper">
            <span className="hexa"></span>
            <span className="flag">{t('achiv_1')}</span>
            <span className="time-wrapper"><span className="time">{t('date_1')}</span></span>
            </div>
            <div className="desc">{t('content_1')}</div>
            </div>
        </li>
        <li data-aos="fade-left">
            <div className="direction-l">
            <div className="flag-wrapper">
            <span className="hexa"></span>
            <span className="flag">{t('achiv_2')}</span>
            <span className="time-wrapper"><span className="time">{t('date_2')}</span></span>
            </div>
            <div className="desc">{t('content_2')}</div>
            </div>
        </li>
        <li data-aos="fade-right">
            <div className="direction-r">
            <div className="flag-wrapper">
            <span className="hexa"></span>
            <span className="flag">{t('achiv_3')}</span>
            <span className="time-wrapper"><span className="time">{t('date_3')}</span></span>
            </div>
            <div className="desc">{t('content_3')}</div>
            </div>
        </li>
        <li data-aos="fade-left">
            <div className="direction-l">
            <div className="flag-wrapper">
            <span className="hexa"></span>
            <span className="flag">{t('achiv_4')}</span>
            <span className="time-wrapper"><span className="time">{t('date_4')}</span></span>
            </div>
            <div className="desc">{t('content_4')}</div>
            </div>
        </li>
        <li data-aos="fade-right">
            <div className="direction-r">
            <div className="flag-wrapper">
            <span className="hexa"></span>
            <span className="flag">{t('achiv_5')}</span>
            <span className="time-wrapper"><span className="time">{t('date_5')}</span></span>
            </div>
            <div className="desc">{t('content_5')}</div>
            </div>
        </li>
    </ul>
    </div>
    );
}
export default TimelineSection;