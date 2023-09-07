import placeHoldImg from '../imgs/icons/placeholder.png'
import emailHoldImg from '../imgs/icons/email.png'
import telePhone from '../imgs/icons/telephone.png'
import '../css/Footer.css';
import { useTranslation } from 'react-i18next';

const Footer =()=>{
   const { t } = useTranslation();

    return(
        <div>
           <div className="WholeFooter" id='footer'>
           <div className='bkgrnd'>
            <div className='contentFooter'>
                 <div className='col Contact'>
                 <img src={telePhone} alt='contact' className='icon-footer'/>
                 <div className='textA'>
                    <p>{t('hotline')}<a href="tel:16583" className='Link'>16583</a></p>
                    <p>{t('reach_out')}<a href="tel:+203480322" className='Link'>+203480322</a></p>
                 </div>
                 </div>
                <div className='col location'>
                 <img src={placeHoldImg} alt='contact' className='icon-footer'/>
                 <div className='textA'>
                    <p>{t('address_part1')}</p>
                    <p>{t('address_part2')}</p>
                    <p>{t('address_part3')}</p>
                    <a href='https://www.google.com/maps/place/Alexandria+Port/@31.1745148,29.8627159,14z/data=!3m1!4b1!4m6!3m5!1s0x14f5c19df4ac6773:0x6425bb3b7b60204e!8m2!3d31.1757919!4d29.8622164!16zL20vMDloYmJ0' target='_blank' rel='noreferrer noopener' className='Link'>{t('location_footer')}</a>
                 </div>
                </div>
                <div className='col email'>
                <img src={emailHoldImg} alt='contact' className='icon-footer'/>
                 <div className='textA'>
                    <p>{t('email_footer')}<a href = 'mailto: info@apa.gov.eg' className='Link'>info@apa.gov.eg</a></p>
                    <p>{t('website_email')}<a href = 'mailto: portwebsite@apa.gov.eg' className='Link'>portwebsite@apa.gov.eg</a></p>
                    <p>{t('Enquiries')}<a href = 'mailto: customer.service@apa.gov.eg' className='Link'>customer.service@apa.gov.eg</a></p>
                    <p>{t('our_web')}<a href = 'apa.gov.eg' target='_blank' rel='noreferrer noopener' className='Link'>apa.gov.eg</a></p>
                </div>
                </div>
            </div>
            </div>
           </div>
            <div className='copyrightBar'>
               <div className='leftPart'> <p>{t('copyrights')}</p> </div>
               <div className='rightPart'>
                <a href = '#' rel='noreferrer noopener' className='LinkC'>{t('privacy_footer')}</a>
                <a href = '#' rel='noreferrer noopener' className='LinkC'>{t('terms')}</a>
               </div>

            </div>
        </div>
    );
}
export default Footer;