import React from 'react'
import OpDate from './OpDate'
import ArrivingLimit from './ArrivingLimit'
import { useTranslation } from 'react-i18next';


const QuarterChartsThird = () => {
  const { t } = useTranslation();

  return (


    <div className="ChartsArrival dash-flex">
    <div className="WeatherChart">
    <div className="GraphDashA arrivinglimit">
    <div className="titleChart">{t('chart_five')}</div>
    <ArrivingLimit/>
    </div>
    </div>
    <div className="OperationContainer oplimitcontainer">
    <div className="GraphDash">
    <div className="titleChart titleoplimit">{t('chart_six')}</div>
    <OpDate/>
    </div>
</div>
</div>
  )
}

export default QuarterChartsThird

