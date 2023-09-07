import '../css/style.css'
import '../css/titleforms.css'
import '../css/menuStyle.css'
import { Link } from 'react-router-dom';
import { Player } from '@lottiefiles/react-lottie-player';
import { useState } from 'react';
import { motion ,AnimatePresence } from "framer-motion"
import ModelIMO from '../Model/ModelIMO';
import { useTranslation } from 'react-i18next';
import LanguageChanger from './LanguageChanger';

const Menus = () => {

  const { t } = useTranslation();

 const [firstClass , setFirstClass] = useState(false);
 const [secondClass , setSecondClass] = useState(false);
 const [thirdclass , setthirdClass] = useState(false);
 const [Forthclass , setforthClass] = useState(false);


 const [mainDataOpen , setDataMainOpen] = useState(false);
 const [ArivalOpen , seArivalOpen] = useState(false);
 const [DepOpen , seDepOpen] = useState(false);
 const [ArrivingPeriodopen , setArrvingPeriodopen] = useState(false)
 const [departPeriodOpen , setdepPeriodOPen] = useState(false);
 const [departFreqOpen , setdepFreqOPen] = useState(false);
 const [ArivalFreqOpen , setArrvalFreqOPen] = useState(false);

 const [imoField , setIMOField] = useState(false);
 const [ArrivingField , setArrivingField] = useState(false);
 const [departingField , setdepartingField] = useState(false);





 const onClickONMAIN = ()=>{
  setIMOField(true);
  setArrivingField(false);
  setdepartingField(false);
  setDataMainOpen(!mainDataOpen)
 }

 const onClickONArival = ()=>{
  setIMOField(true);
  setArrivingField(true);
  setdepartingField(false);
  seArivalOpen(!ArivalOpen)
 }
 const onClickONDeparture = ()=>{
  setIMOField(true);
  setArrivingField(false);
  setdepartingField(true);
  seDepOpen(!DepOpen)
 }

 const [ArivingStart,setArvingStart] = useState(false);
 const [ArivingEnd,setArvingtEnd] = useState(false);

 const onClickONArivingPeriod = ()=>{
  setIMOField(false);
  setArvingStart(true);
  setArvingtEnd(true);
  setArrvingPeriodopen(!ArrivingPeriodopen)
 }
 const [DepartPerStart,setDepPerStart] = useState(false);
 const [DeparPerEnd,setPerDepartEnd] = useState(false);
 const onClickONDepPeriod = ()=>{
  setIMOField(false);
  setDepPerStart(true);
  setPerDepartEnd(true);
  setdepPeriodOPen(!departPeriodOpen)
 }

 const onClickONArivingPeriodFreq = ()=>{
  setIMOField(true);
  setArvingStart(true);
  setArvingtEnd(true);
  setDepPerStart(false);
  setPerDepartEnd(false);
  setArrivingField(false);
  setArrvalFreqOPen(!ArivalFreqOpen);
 }
 const onClickONDepPeriodFreq = ()=>{
  setIMOField(true);
  setDepPerStart(true);
  setPerDepartEnd(true);
  setArvingStart(false);
  setArvingtEnd(false);
  setdepFreqOPen(!departFreqOpen)
 }




const ChangeFirst = ()=>{
  setFirstClass(!firstClass)

}

const ChangeSecond = ()=>{

  setSecondClass(!secondClass)

}
const ChangeThird = ()=>{

  setthirdClass(!thirdclass)
}
const firstRepoCard =(e)=>{
  e.stopPropagation();
}
const fourthChange = ()=>{
  setforthClass(!Forthclass)
}

  return (
    <div>
     <LanguageChanger />
    <div className="backgroundMenu">
      <div  className=  "firstMainDate mainStyleWrapper trans" onClick={ChangeFirst}>
      <div className="titleMenu titleWidthOnClick d-flex">
      <span className='titleMenuspan '> {t('Main_Data')}</span>
      </div>
      <motion.div layout
      animate={{
          height: firstClass ? "auto" : '0' ,
          display :firstClass ? "flex" : 'none',
          transition: {
                  type: "tween",
                  duration: 0.15
                },
        }}

         className={firstClass? "btnMenuContainer d-flex" : "displayNone" }>
        <div  className="unorderWrapper">
        <div className="cardType">
        <Link className='LinkNav' to="/menu/ShipTypeData">
          <div className="lotiWrapper d-flex">
          <Player style={{ height: 140 }} src='https://assets10.lottiefiles.com/packages/lf20_q07pKG.json' className="playerLotie" loop autoplay/>
          </div>
          <div className="cardTextWrapper"> <Link className='LinkNav' to="/menu/ShipTypeData">{t('Data_of_Ship_Types')}</Link></div>
          </Link>
        </div>
        <div className="cardType">
        <Link className='LinkNav' to="/menu/CountriesData">
          <div className="lotiWrapper d-flex">
          <Player style={{ height: 140 }} src='https://assets10.lottiefiles.com/packages/lf20_mHIYUQrfMT.json' className="playerLotie" loop autoplay/>
          </div>
          <div className="cardTextWrapper"><Link className='LinkNav' to="/menu/CountriesData">{t('Data_of_Countries')}</Link></div>
          </Link>
        </div>

        <div className="cardType">
        <Link className='LinkNav' to="/menu/AgentData">
          <div className="lotiWrapper d-flex">
          <Player style={{ height: 130 }} src='https://assets10.lottiefiles.com/packages/lf20_XkxGQrgaqp.json' className="playerLotie" loop autoplay/>
          </div>
          <div className="cardTextWrapper"> <Link className='LinkNav' to="/menu/AgentData">{t('Data_of_Agents')}</Link></div>
          </Link>
        </div>

        <div className="cardType">
        <Link className='LinkNav' to="/menu/PortsData">
          <div className="lotiWrapper d-flex">
          <Player style={{ height: 140 }} src='https://assets10.lottiefiles.com/packages/lf20_fi0ty9ak.json' className="playerLotie" loop autoplay/>
          </div>
          <div className="cardTextWrapper"><Link className='LinkNav' to="/menu/PortsData">{t('Data_of_Ports')}</Link></div>
          </Link>
        </div>

        <div className="cardType">
        <Link className='LinkNav' to="/menu/DataofShips">
          <div className="lotiWrapper d-flex">
          <Player
   style={{ height: 140 }}
  src='https://assets10.lottiefiles.com/packages/lf20_XbQM55.json'
  className="playerLotie"
  loop
  autoplay/>
          </div>
          <div className="cardTextWrapper"><Link className='LinkNav' to="/menu/DataofShips">{t('Main_Data_of_Ships')}</Link></div>
          </Link>
        </div>


        </div>
      </motion.div>
      </div>
      <div className= "secondShipDate mainStyleWrapper clickedOnItTitle trans"  onClick={ChangeSecond}>
       <div className="titleMenu titleWidthOnClick d-flex">
      <span className='titleMenuspan d-flex'>{t('Ships_Movement')}</span></div>
      <motion.div layout
       animate={{
          height: secondClass ? "auto" : '0' ,
          display :secondClass ? "flex" : 'none',
          transition: {
                  type: "tween",
                  duration: 0.15
                },
        }}
     className={secondClass? "btnMenuContainer d-flex" : "displayNone" }>
      <div className="unorderWrapper">
        <div className="cardType">
        <Link className='LinkNav' to="/menu/DataofArrivingships">
          <div className="lotiWrapper d-flex">
          <Player
   style={{ height: 140 }}
  src='https://assets10.lottiefiles.com/packages/lf20_er1ktu3i.json'
  className="playerLotie"
  loop
  autoplay/>
          </div>
          <div className="cardTextWrapper"><Link className='LinkNav' to="/menu/DataofArrivingships">{t('Data_of_Arriving_ships')}</Link></div>
          </Link>
        </div>
        <div className="cardType">
        <Link className='LinkNav' to="/menu/DataofDepartingships">
          <div className="lotiWrapper d-flex">
          <Player style={{ height: 140 }} src='https://assets10.lottiefiles.com/packages/lf20_bjusnh4a.json' className="playerLotie" loop autoplay/>
          </div>
          <div className="cardTextWrapper"><Link className='LinkNav' to="/menu/DataofDepartingships">{t('Data_of_departing_ships')}</Link></div>
          </Link>
        </div>


        </div>
      </motion.div>
      </div>
      <div className= "reportDate mainStyleWrapper clickedOnItTitle trans" onClick={ChangeThird}>
       <div className="titleMenu titleWidthOnClick d-flex">
       <span className='titleMenuspan d-flex'>{t('Reports')}</span></div>
      <motion.div layout     animate={{
          height: thirdclass ? "auto" : '0' ,
          display :thirdclass ? "flex" : 'none',
          transition: {
                  type: "tween",
                  duration: 0.15
                },
        }} className={thirdclass? "btnMenuContainer d-flex" : "displayNone" } onClick={firstRepoCard}>
      <div className="unorderWrapper">
        <motion.button
        whileHover={{scale :1.1}}
        whileTap={{scale :0.9}}
        drag
        dragConstraints = {{left : 50 , top : 50 , bottom : 50  }}
         className="cardType"
         onClick={onClickONMAIN}
         >
          <div className="lotiWrapper d-flex">
          <Player style={{ height: 140 }}
  src='https://assets1.lottiefiles.com/packages/lf20_hSevJIQ2Wm.json'
  className="playerLotie"
  loop
  autoplay/>
          </div>
          <div className="cardTextWrapper">{t('Main_Sh_Data')}{t('Report')}</div>
        </motion.button>
        {/* disable any intial animations on children that
        are present when the component is first rendered */}


        <div className="cardType">
        <Link className='LinkNav' to="/menu/Shiptypes">
          <div className="lotiWrapper d-flex">
          <Player
   style={{ height: 140 }}
  src='https://assets1.lottiefiles.com/packages/lf20_h4th9ofg.json'
  className="playerLotie"
  loop
  autoplay/>
          </div>
          <div className="cardTextWrapper">{t('Ship_Types_Data')}{t('Report')}</div>
        </Link>
        </div>


        <div className="cardType">
        <Link className='LinkNav' to='/menu/CountriesRepo' >
          <div className="lotiWrapper d-flex">
          <Player
   style={{ height: 140 }}
  src='https://assets1.lottiefiles.com/private_files/lf30_bvfgrs5r.json'
  className="playerLotie"
  loop
  autoplay/>
          </div>
         <div className="cardTextWrapper">{t('Country_Data')}{t('Report')}</div>
         </Link>
        </div>



        <div className="cardType">
        <Link className='LinkNav' to='/menu/PortDataReport'>
          <div className="lotiWrapper d-flex">
          <Player
   style={{ height: 140 }}
  src='https://assets1.lottiefiles.com/packages/lf20_FvkSVCK5zm.json'
  className="playerLotie"
  loop
  autoplay/>
          </div>
          <div className="cardTextWrapper">{t('Port_Data')}{t('Report')}</div>
          </Link>
        </div>


        <div className="cardType">
        <Link className='LinkNav' to='/menu/AgentDataRepo'>
          <div className="lotiWrapper d-flex">
          <Player style={{ height: 140 }} src='https://assets1.lottiefiles.com/packages/lf20_kP6sKi50mK.json' className="playerLotie" loop autoplay/>
          </div>
          <div className="cardTextWrapper LinkNav">{t('Ag_Data')}{t('Report')}</div>
          </Link>
        </div>


        <motion.button
        whileHover={{scale :1.1}}
        whileTap={{scale :0.9}}
        drag
        dragConstraints = {{left : 50 , top : 50 , bottom : 50 , right : 50 }}
         className="cardType"
         onClick={onClickONArival}
         >
          <div className="lotiWrapper d-flex">
          <Player
   style={{ height: 140 }}
  src='https://assets1.lottiefiles.com/private_files/lf30_S84njj.json'
  className="playerLotie"
  loop
  autoplay/>
          </div>
          <div className="cardTextWrapper LinkNav">{t('Ship_Arrival')}{t('Report')}</div>
          </motion.button>


          <motion.button
        whileHover={{scale :1.1}}
        whileTap={{scale :0.9}}
        drag
        dragConstraints = {{left : 50 , top : 50 , bottom : 50  }}
         className="cardType"
         onClick={onClickONDeparture}
         >
          <div className="lotiWrapper d-flex">
          <Player
   style={{ height: 140 }}
  src='https://assets1.lottiefiles.com/packages/lf20_kq1c6sug.json'
  className="playerLotie"
  loop
  autoplay/>
          </div>
          <div className="cardTextWrapper LinkNav">{t('Ship_Dep')}{t('Report')}</div>
        </motion.button>

        <motion.button
        whileHover={{scale :1.1}}
        whileTap={{scale :0.9}}
        drag
        dragConstraints = {{left : 50 , top : 50 , bottom : 50 , right : 50 }}
         className="cardType"
         onClick={onClickONArivingPeriod}
         >
          <div className="lotiWrapper d-flex">
          <Player
   style={{ height: 140 }}
  src='https://assets1.lottiefiles.com/private_files/lf30_YlODxz.json'
  className="playerLotie"
  loop
  autoplay/>
          </div>
          <div className="cardTextWrapper LinkNav">{t('Arrival_Period')}{t('Report')}</div>
          </motion.button>



          <motion.button
        whileHover={{scale :1.1}}
        whileTap={{scale :0.9}}
        drag
        dragConstraints = {{left : 50 , top : 50 , bottom : 50 , right : 50 }}
         className="cardType"
         onClick={onClickONDepPeriod}
         >
          <div className="lotiWrapper d-flex">
          <Player
   style={{ height: 140 }}
  src='https://assets1.lottiefiles.com/packages/lf20_tcmtbsEfLD.json'
  className="playerLotie"
  loop
  autoplay/>
          </div>
          <div className="cardTextWrapper LinkNav">{t('Dep_Period')}{t('Report')}</div>
          </motion.button>


          <motion.button
        whileHover={{scale :1.1}}
        whileTap={{scale :0.9}}
        drag
        dragConstraints = {{left : 50 , top : 50 , bottom : 50 , right : 50 }}
         className="cardType"
         onClick={onClickONArivingPeriodFreq}
         >
          <div className="lotiWrapper d-flex">
          <Player
   style={{ height: 140 }}
  src='https://assets1.lottiefiles.com/packages/lf20_hpe0z2cm.json'
  className="playerLotie"
  loop
  autoplay/>
          </div>
          <div className="cardTextWrapper LinkNav">{t('Arrival_Frequent')}{t('Report')}</div>
          </motion.button>


          <motion.button
        whileHover={{scale :1.1}}
        whileTap={{scale :0.9}}
        drag
        dragConstraints = {{left : 50 , top : 50 , bottom : 50 , right : 50 }}
         className="cardType"
         onClick={onClickONDepPeriodFreq}
         >
          <div className="lotiWrapper d-flex">
          <Player style={{ height: 140 }} src='https://assets1.lottiefiles.com/private_files/lf30_rkzommaq.json' className="playerLotie" loop autoplay/>
          </div>
          <div className="cardTextWrapper LinkNav">{t('Dep_Frequent')}{t('Report')}</div>
          </motion.button>




        </div>


      </motion.div>
      </div>

      <div className=  "firstMainDate mainStyleWrapper trans" onClick={fourthChange}>
      <div className="titleMenu titleWidthOnClick d-flex">
      <span className='titleMenuspan '>  {t('Data_of_Signs')} </span>
      </div>
      <motion.div layout className={Forthclass? "btnMenuContainer d-flex" : "displayNone" }>
        <div className="unorderWrapper">
        <div className="cardType">
        <Link className='LinkNav' to="/menu/Signup">
          <div className="lotiWrapper d-flex">
          <Player style={{ height: 140 }} src='https://assets3.lottiefiles.com/packages/lf20_Yq91YlMa2M.json' className="playerLotie" loop autoplay/>
          </div>
          <div className="cardTextWrapper"> <Link className='LinkNav' to="/menu/Signup">{t('Sign_up')}</Link></div>
          </Link>
        </div>
        <div className="cardType">
        <Link className='LinkNav' to="/menu/EmployeeRepo">
          <div className="lotiWrapper d-flex">
          <Player style={{ height: 140 }} src='https://assets7.lottiefiles.com/private_files/lf30_hdiNFs.json' className="playerLotie" loop autoplay/>
          </div>
          <div className="cardTextWrapper"><Link className='LinkNav' to="/menu/EmployeeRepo">{t('Data_User')}</Link></div>
          </Link>
        </div>


        <div className="cardType">
        <Link className='LinkNav' to="/menu/UpdatePassword">
          <div className="lotiWrapper d-flex">
          <Player style={{ height: 140 }} src='https://assets4.lottiefiles.com/private_files/lf30_kj1v7uim.json' className="playerLotie" loop autoplay/>
          </div>
          <div className="cardTextWrapper"><Link className='LinkNav' to="/menu/UpdatePassword">Update Password</Link></div>
          </Link>
        </div>








        </div>
      </motion.div>
      </div>

      <div className=  "firstMainDate mainStyleWrapper trans" >
      <div className="titleMenu titleWidthOnClick d-flex">
      <span className='titleMenuspan '> <Link className='LinkNav' to='/Dashboard/Analysis'>{t('Dashboard')}</Link></span>
      </div>

      </div>



      <AnimatePresence initial = {false}
        // only render one component at a time.
        // the exiting component will finish its exit
        // animation before entering component is render
        mode="wait"
        // Fires When all exiting nodes have completed animating out
        onExitComplete={()=>null}
        >
      {mainDataOpen && <ModelIMO IMOField={imoField} mainDataOpen = {mainDataOpen} Arrivingfield={ArrivingField} DepratingField={departingField} handleClose = {()=>{setDataMainOpen(false)}}/>}
      {ArivalOpen && <ModelIMO IMOField={imoField} ArivalOpen = {ArivalOpen} Arrivingfield={ArrivingField} DepratingField={departingField} handleClose = {()=>{seArivalOpen(false)}}/>}
      {DepOpen && <ModelIMO IMOField={imoField} DepOpen = {DepOpen} Arrivingfield={ArrivingField} DepratingField={departingField} handleClose = {()=>{seDepOpen(false)}}/>}



      {ArrivingPeriodopen && <ModelIMO IMOField={imoField} ArrivingfieldStart={ArivingStart} ArrivingfieldEnd ={ArivingEnd}  handleClose = {()=>{setArrvingPeriodopen(false)}}/>}

      {departPeriodOpen && <ModelIMO IMOField={imoField} DepratingFieldEnd={DeparPerEnd} DepratingFieldStart ={DepartPerStart}  handleClose = {()=>{setdepPeriodOPen(false)}}/>}

      {ArivalFreqOpen && <ModelIMO IMOField={imoField} Arrivingfield={ArrivingField} ArrivingfieldStart={ArivingStart} ArrivingfieldEnd ={ArivingStart} DepratingFieldEnd={DeparPerEnd} DepratingFieldStart ={DepartPerStart}  handleClose = {()=>{setArrvalFreqOPen(false)}}/>}
       {departFreqOpen && <ModelIMO IMOField={imoField}  DepratingFieldEnd={DeparPerEnd} DepratingFieldStart ={DepartPerStart}  handleClose = {()=>{setdepFreqOPen(false)}}/>}

        </AnimatePresence>
    </div>
    </div>
  )
}

export default Menus
