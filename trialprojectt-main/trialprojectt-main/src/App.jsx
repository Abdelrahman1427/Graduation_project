import { Suspense } from "react";
import { Player } from '@lottiefiles/react-lottie-player';
import Home from "./component/Home.jsx";
import Menus from "./component/Menus.jsx";
import Error404 from "./component/Error404.jsx";
import Data_of_Arriving_ships from "./component/Data_of_Arriving_ships.jsx";
import Data_of_Departing_ships from "./component/Data_of_Departing_ships.jsx";
import Data_of_Ships from "./component/Data_of_Ships.jsx"
import Login from './component/Login.jsx';
import ShipTypeData from './component/Data_of_ship_types.jsx';
import CountriesData from './component/Data_of_countries.jsx';
import AgentData from './component/Data_of_agents.jsx';
import PortsData from './component/Data_of_ports.jsx';

import PortDataReport from "./Reports/PortDataRepo.jsx";
import CountriesRepo from './Reports/CountriesRepo.jsx';
import ArrivalRepo from "./Reports/ArrivalRepo.jsx";
import ShipArrivalRepo from "./Reports/ShipArrivalRepo.jsx";

import DepartingRepo from "./Reports/DepartingRepo.jsx";
import MainDataRepo from './Reports/MainDataOfShipsRepo.jsx';
import AgentDataRepo from './Reports/AgentDataRepo.jsx';
import ShipsArrivalPeriod from "./Reports/ShipsArrivalPeriod.jsx";
import ShipTypeRepo from "./Reports/ShipTypeRepo.jsx";
import DepartingRepoPeriod from "./Reports/DepartingRepoPeriod.jsx";
import ArrivalFreq from "./Reports/ArrivalFreq.jsx";
import DashContainer from "./Dashboard/DashContainer.jsx";
import UpdatePassword from "./component/UpdatePassword.jsx";
import DepFreq from "./Reports/DepFreq.jsx";
import DataofEmp from './Reports/DataofEmp.jsx'
import UserMenu from "./component/UserMenu.jsx";
import { BrowserRouter , Route , Routes} from 'react-router-dom'
import { useEffect } from "react";
import RequireAuth from "./component/RequireAuth.jsx";


import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import SignUp from "./component/SignUp.jsx";
import Weather from "./Dashboard/Weather.jsx";
import AnalysisContainer from "./Dashboard/AnalysisContainer.jsx";
import Unauothrized from "./component/Unauothrized.jsx";
import Logs from "./component/Logs.jsx";
import AboutTeamContainer from './component/AboutTeamContainer.jsx'
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedlngs :['en' , 'ar'],
    fallbackLng: "en",
    detection : {
      order: [ 'localStorage','htmlTag', 'cookie','path', 'subdomain'],
      caches : ['cookie'],
    },
    backend : {
      loadPath: '/src/assets/localise/{{lng}}/translation.json'
    }



  });





 const loadingMarkup = (
   <div className="loadingWrapper d-flex">
      <Player style={{ height: 500 }} src='https://assets2.lottiefiles.com/packages/lf20_poqmycwy.json'  loop autoplay/>
   </div>
 )


const App =()=>{

 const userType = localStorage.getItem('roleUser') ;


    return(
        <div>
          {/* <Suspense fallback={loadingMarkup}> */}
        <BrowserRouter>
            <Routes>
                {/* public paths */}
                <Route path="/" element = {<Home/>}/>
                <Route path="/Login" element = {<Login/>}/>
                <Route path="/unauthorized" element={<Unauothrized/>} />
                <Route path="/AboutTeam" element={<AboutTeamContainer/>} />

                {/* admin paths */}

                <Route element = {<RequireAuth allowedRoles={['admin']} />}>

                <Route path="/menu" element = {<Menus/>}/>

                <Route path="/menu/DataofArrivingships" element = {<Data_of_Arriving_ships/>}/>
                <Route path="/menu/DataofDepartingships" element = {<Data_of_Departing_ships/>}/>
                <Route path="/menu/Signup" element = {<SignUp/>}/>
                <Route path="/menu/UpdatePassword" element = {<UpdatePassword/>}/>
                <Route path="/menu/ShipTypeData" element = {<ShipTypeData/>}/>
                <Route path="/menu/CountriesData" element = {<CountriesData/>}/>
                <Route path="/menu/AgentData" element = {<AgentData/>}/>
                <Route path="/menu/PortsData" element = {<PortsData/>}/>
                <Route path="/menu/DataofShips" element = {<Data_of_Ships/>}/>

                <Route path="/Dashboard" element = {<DashContainer/>}>
                <Route path="Analysis" element = {<AnalysisContainer/>}/>
                <Route path = 'Weather' element={<Weather/>} />
                <Route path="Logs" element={<Logs />} />
                </Route>

                </Route>
                {/* both */}
                <Route element = {<RequireAuth allowedRoles={['admin' , 'other']} />}>
                <Route path="/menu/CountriesRepo" element = {<CountriesRepo/>}/>
                <Route path="/menu/EmployeeRepo" element = {<DataofEmp/>}/>
                <Route path="/menu/AgentDataRepo" element = {<AgentDataRepo/>}/>
                <Route path="/menu/MainDataRepo" element = {<MainDataRepo/>}/>
                <Route path="/menu/PortDataReport" element = {<PortDataReport/>}/>
                <Route path="/menu/ArrivalFrequent" element = {<ArrivalFreq/>}/>
                <Route path="/menu/ArrivalRepo" element = {<ArrivalRepo/>}/>
                <Route path="/menu/ShipArrivalRepo" element = {<ShipArrivalRepo/>}/>
                <Route path="/menu/DepartingRepoPeriod" element = {<DepartingRepoPeriod/>}/>
                <Route path="/menu/ShipsArrivalPeriod" element = {<ShipsArrivalPeriod/>}/>
                <Route path="/Menuemployee" element = {<UserMenu/>}/>
                <Route path="/menu/DepartingRepo" element = {<DepartingRepo/>}/>
                <Route path="/menu/Shiptypes" element = {<ShipTypeRepo/>}/>
                <Route path="/menu/DepartingRepoFreq" element = {<DepFreq/>}/>
                </Route>
                <Route path="*" element = {<Error404/>}/>

            </Routes>
        </BrowserRouter>
        {/* </Suspense> */}
        </div>
    )
}

export default App;