import { useState } from 'react'
import '../cssDashBoard/TwoHalfsChart.css'
import { Player } from '@lottiefiles/react-lottie-player';

import { useTranslation } from 'react-i18next';
import ArrivalBoth from './ArrivalBoth';
const TwoHalfsInput = () => {

  return (
    <div className="ChartsArrival d-flex">
    <div className="firstChart halfWidthChart">
    <div className="GraphDash">  <div className="titleChart"></div>
  
    </div>

    </div>
    <div className="SecondChartContainer halfWidthChart">
    <div className="GraphDash">  <div className="titleChart"></div>

    </div>

    </div>
    </div>
  )
}

export default TwoHalfsInput
