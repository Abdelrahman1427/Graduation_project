import Counts from './Counts';
import DashSearch from './DashSearch';
import DashboardMenu from './DashboardMenu';
import axios from '../apis/EmpFetch'
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router-dom';
import LanguageChanger from '../component/LanguageChanger';

import '../cssDashBoard/dashboardContainer.css';


import AnalysisContainer from './AnalysisContainer';
import Weather from './Weather';


const DashContainer = () => {



  return (
    <div className='d-flex-start body-of-dashBoard'>
       <LanguageChanger/>
      <DashboardMenu/>
      <div className="analysisContainer backDash">
      <DashSearch/>

        <Outlet/>


      </div>
    </div>
  )
}

export default DashContainer
