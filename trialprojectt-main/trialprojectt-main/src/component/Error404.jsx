import '../css/style.css'
import '../css/error.css'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Error404 = () => {

  const { t } = useTranslation();
  return (
    <div>

      <div className="fistHalf d-flex">
      <b className="errorType userNone">404 </b>
      </div>
      <div className="secondHalf">
        <div className="errorWrapper">
          <div className="firstWrap d-flex userNone"> {t('Sorry')}</div>
          <div className="secondWrapper d-flex userNone"> {t('PAGE_Requested')}</div>
          <div className="thirdWrapper d-flex">
          <button className='gback'> <Link to='/'> {t('LinkHome')}  </Link></button></div>
        </div>
      </div>
    </div>
  )
}

export default Error404
