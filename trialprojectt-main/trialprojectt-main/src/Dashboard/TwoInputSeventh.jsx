import React ,{useState} from 'react'
import { useTranslation } from 'react-i18next';
import DepartBoth from './DepartBoth.jsx';
import HighestNORnoLimits from './HighestNORnoLimits.jsx';

const TwoInputsSeventh = () => {
  const {t} = useTranslation();

  return (
    <div className="ChartsArrival dash-flex">
    <div className="firstChart halfWidthChart">
    <div className="GraphDash arrivdashAB">
    <div className="titleChart">{t('chart_thirteen')}</div>
    <DepartBoth/>
    </div>

    </div>
    <div className="SecondChartContainer halfWidthChart">
    <div className="GraphDash arrivdashABC">
    <div className="titleChart">{t('chart_fourteen')}</div>
    <HighestNORnoLimits/>
    </div>
    </div>
    </div>
  )
}
export default TwoInputsSeventh;