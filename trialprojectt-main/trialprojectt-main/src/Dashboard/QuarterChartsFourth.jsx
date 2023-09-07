import '../cssDashBoard/QuarterCharts.css'
import '../cssDashBoard/TwoHalfsChart.css'
import ArrivingDate from './ArrivingDate'
import OPboth from './OPboth'
import { Chart as Chart , ArcElement , Legend } from 'chart.js/auto'
import { useTranslation } from 'react-i18next';

const QuarterChartsFourth = () => {
  const { t } = useTranslation();

  return (

    <div className="ChartsArrival dash-flex">
    <div className="WeatherChart">
    <div className="GraphDash GraphA arrivinglimit">
    <div className="titleChart"> {t('chart_seven')}</div>
    <ArrivingDate/>
    </div>
    </div>

    <div className="OperationContainer oplimitcontainer">
    <div className="GraphDash">
    <div className="titleChart titleoplimit">{t('chart_eight')}</div>
    <OPboth />
    </div>

    </div>
</div>
  )
}

export default QuarterChartsFourth

