import '../cssDashBoard/QuarterCharts.css'
import '../cssDashBoard/TwoHalfsChart.css'
import HopNoLimit from './HopNoLimit'
import { useState } from 'react'
import ArrivalNoLimit from './ArrivalNoLimit'
import { Chart as Chart , ArcElement , Legend } from 'chart.js/auto'
import OperationLimit from './OperationLimit'
import { useTranslation } from 'react-i18next';

const QuarterChartsSecond = () => {
  const { t } = useTranslation();

  return (

    <div className="ChartsArrival dash-flex">
    <div className="WeatherChart">
    <div className="GraphDashA">
    <div className="titleChart">{t('chart_three')}</div>
    <div className="d-flex">
     <ArrivalNoLimit />
    </div>

    </div>
    </div>
    <div className="OperationContainer oplimitcontainer">
    <div className="GraphDash">
    <div className="titleChart titleoplimit">{t('chart_four')}</div>
    <OperationLimit/>
    </div>
</div>
</div>
  )
}

export default QuarterChartsSecond

