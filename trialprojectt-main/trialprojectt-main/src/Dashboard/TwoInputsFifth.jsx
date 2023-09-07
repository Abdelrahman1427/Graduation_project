import React ,{useState} from 'react'
import { useTranslation } from 'react-i18next';
import ArrivalBoth from './ArrivalBoth';
import RecurringBoth from './HNORboth.jsx';
import RecurringCount from './RecurringShipDateCount.jsx';

const TwoInputsFifth = () => {
  const { t } = useTranslation();

  return (
    <div className="ChartsArrival dash-flex">
       <div className="WeatherChart">
          <div className="GraphDashA arrivinglimit">
          <div className="titleChart">
              {t('chart_nine')}
          </div>
              <ArrivalBoth/>
          </div>
    </div>
          <div className="OperationContainerA oplimitcontainer">
            <div className="GraphDash">
              <RecurringCount/>
            </div>
          </div>
    </div>

  )
}
export default TwoInputsFifth;