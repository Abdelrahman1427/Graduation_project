import React, { useEffect } from 'react';
import '../css/AboutPort.css';
import AOS from 'aos';
import {faStarOfLife} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'aos/dist/aos.css';

import { useTranslation } from 'react-i18next';

const AboutPort =()=>{
    const { t } = useTranslation();
    useEffect(() => {
        AOS.init();
      }, [])
    return(
<section className='AboutWrapper d-flex'>
<div className="ImageAbout" data-aos="fade-left"> <p   data-aos="fade-left"> {t('AboutUs')}</p>
</div>

<div   data-aos="fade-left" className="paragraph-About d-flex">
    <p   data-aos="fade-left">{t('AboutParagraphFirst')} <br/>
    {t('AboutParagraphSecond')}
     </p>
</div>

</section>


    )
}
export default AboutPort;