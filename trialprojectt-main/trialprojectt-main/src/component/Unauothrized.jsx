
import '../css/style.css'
import '../css/error.css'
import '../css/unAuoth.css'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Unauothrized = () => {

  const { t } = useTranslation();
  return (
    <div>

      <div className="fistHalf d-flex">
      <b className="errorType userNone nameUnAotho"> {t('unauthorized')}</b>
      </div>
      <div className="secondHalf">
        <div className="errorWrapper">
          <div className="firstWrap d-flex userNone"> {t('Sorry_un')}</div>
          <div className="thirdWrapper d-flex">
          <button className='gback'> <Link to='/'> {t('LinkHome')}  </Link></button></div>
        </div>
      </div>
    </div>
  )
}

export default Unauothrized
