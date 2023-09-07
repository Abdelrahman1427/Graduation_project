import React ,{useState} from 'react'
import { useTranslation } from 'react-i18next';
import DepartingLimit from './DepartLimit.jsx';
import DepartDateLimit from './DepartDateLimit.jsx';

const TwoInputsSixth = () => {
const {t} = useTranslation();
  return (
    <div className="ChartsArrival dash-flex">
    <div className="firstChart halfWidthChart">
    <div className="GraphDash arrivdashAB">
      <div className="titleChart">{t('chart_eleven')}</div>
    <DepartingLimit/>
    </div>

    </div>
    <div className="SecondChartContainer halfWidthChart">
    <div className="GraphDash arrivdashAB">
    <div className="titleChart">{t('chart_twelve')}</div>
    <DepartDateLimit/>
    </div>
    </div>
    </div>
  )
}
export default TwoInputsSixth;