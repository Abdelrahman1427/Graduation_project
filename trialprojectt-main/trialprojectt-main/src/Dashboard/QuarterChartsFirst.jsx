import '../cssDashBoard/QuarterCharts.css'
import '../cssDashBoard/TwoHalfsChart.css'
import HopNoLimit from './HopNoLimit'
import DepartToBar from './DepartToBar'
import { Chart as Chart , ArcElement , Legend } from 'chart.js/auto'
import { useTranslation } from 'react-i18next';


const QuarterCharts = () => {
  const { t } = useTranslation();

  return (

    <div className="ChartsArrival dash-flex">
    <div className="WeatherChart">
    <div className="GraphDashA">
    <div className="titleChart">{t('first_chart')}</div>
    <div className="d-flex">
    <DepartToBar/>
    </div>
    </div>
    </div>


    <div className="OperationContainer awelop">
    <div className="GraphDash">
    <div className="titleChart">{t("second_chart")}</div>
    <div className="d-flex">
    <HopNoLimit/>
    </div>
    </div>
    </div>
</div>
  );
}

export default QuarterCharts

