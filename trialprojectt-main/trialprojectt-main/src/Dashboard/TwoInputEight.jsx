import React ,{useState} from 'react'
import { useTranslation } from 'react-i18next';
import RecurringLimit from './HNORlimit.jsx';
import RecurringDate from './HNORdate.jsx';

const TwoInputEight = () => {
  const {t} = useTranslation();

  return (
    <div className="ChartsArrival dash-flex">
    <div className="firstChart halfWidthChart">
    <div className="GraphDash arrivdashABCD">
    <div className="titleChart">{t('chart_fifteen')}</div>
    <RecurringLimit/>
    </div>

    </div>
    <div className="SecondChartContainer halfWidthChart">
    <div className="GraphDash arrivdashABCD">
    <div className="titleChart">{t('chart_sixteen')}</div>
    <RecurringDate/>
    </div>
    </div>
    </div>
  )
}
export default TwoInputEight;