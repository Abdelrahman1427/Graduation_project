import React ,{useState} from 'react'
import { useTranslation } from 'react-i18next';
import RecurringBoth from './HNORboth.jsx';

const TwoInputNine = () => {
  const { t } = useTranslation();

  return (
  
    <div className="ChartsArrival dash-flex">
     <div className="firstChart">
      <div className="GraphDash arrivdashABCD">
        <div className="titleChart">{t('chart_ten')}</div>
              <RecurringBoth/>
        </div>
     </div>
    </div>
  )
}

export default TwoInputNine;