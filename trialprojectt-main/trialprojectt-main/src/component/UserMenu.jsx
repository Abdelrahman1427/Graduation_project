import React from 'react';
import logoInvert from '../imgs/image__5_-removebg-preview.png'
import '../css/UserMenu.css';
import { Player } from '@lottiefiles/react-lottie-player';
import arrowPic from '../imgs/userMenuIcons/left-arrow.png';
import { useState } from 'react';
import { motion ,AnimatePresence } from "framer-motion"
import ModelIMO from '../Model/ModelIMO';
import { useTranslation } from 'react-i18next';
import LanguageChanger from './LanguageChanger';
import { Link } from 'react-router-dom';


const UserMenu=()=>{

 const { t } = useTranslation();
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

   
    return(
        <section className='userMenu'>
             <LanguageChanger/>
            <div className='logo-coln'>
            <img src={logoInvert} alt='MainMenu' className='logo-inv'/>
            <a className='contact-btn-menu'>{t('contact-us-user')}</a>
            </div>
            <div className='MenuList'>
            <ul className="listelem">
                <h4>{t('main-usermenu')}</h4>


                    <li className='wh-menu-elem non-flipped'>
                        <div className='anim-elem'>

                            <div className='btn-desc left-col-menu'>
                            <h3>{t('Main_Data_usermenu')}</h3>
                            <motion.button
                                  drag
                                  dragConstraints = {{left : 50 , top : 50 , bottom : 50  }}
                                  className="cardTypeUser"
                                  onClick={onClickONMAIN}>

                            <a className='btn-proceed'>{t('Main_Data_btn')}<img src={arrowPic} className='arrow-style flip'/></a>
                            </motion.button>
                            <ul className='desc-list'>
                                <li>
                                {t('Search_with_IMO')}
                                </li>
                                <li>
                                {t('Includes_main_ship')}
                                </li>
                                <li>
                                {t('desc_ship')}
                                   
                                </li>
                            </ul>
                            <Link className='LinkNav' to="/menu/Shiptypes">
                            <a className='btn-proceed'>{t('Ship_Types_btn')}<img src={arrowPic} className='arrow-style flip'/></a>
                            </Link>
                            <ul className='desc-list'>
                                <li>
                                {t('Includes_ship_types')}
                                </li>
                            </ul>

                            </div>

                            <div className='pic-elem right-col-menu'>
                            <a  ><Player style={{ height: 200, width:200}} src='https://assets3.lottiefiles.com/packages/lf20_XkxGQrgaqp.json' speed={0.6} className="playerLotie" loop autoplay/></a>
                            </div>
                        </div>
                    </li>

                    

                    <li className='wh-menu-elem flipped'>
                        <div className='anim-elem'>
                            
                            <div className='pic-elem left-col-menu'>
                            <a  ><Player style={{ height: 200, width:200}} src='https://assets8.lottiefiles.com/packages/lf20_TXBESKCamC.json' speed={0.6} className="playerLotie" loop autoplay/></a>
                            </div>

                            <div className='btn-desc right-col-menu'>
                            <h3>{t('pc_Data_usermenu')}</h3>
                            <Link className='LinkNav' to='/menu/PortDataReport'>
                            <a className='btn-proceed'  >{t('Port_btn')}<img src={arrowPic} className='arrow-style flip'/></a>
                            </Link>
                            <ul className='desc-list'>
                                <li>
                                {t('Includes_port_code_name')}
                                </li>
                            </ul>
                            <Link className='LinkNav' to='/menu/CountriesRepo' >
                            <a className='btn-proceed'>{t('Cont_btn')}<img src={arrowPic} className='arrow-style flip'/></a>
                            </Link>
                            <ul className='desc-list'>
                                <li>
                                {t('Includes_contry_code_name')}                                </li>
                            </ul>
                            </div>
                        </div>
                    </li>



                   <li className='wh-menu-elem non-flipped'>
                        <div className='anim-elem'>
                            <div className='btn-desc left-col-menu'>
                            <h3>{t('AG_Data_usermenu')}</h3>
                            <Link className='LinkNav' to='/menu/AgentDataRepo'>
                            <a className='btn-proceed'>{t('ag_btn')}<img src={arrowPic} className='arrow-style flip'/></a>
                            </Link>
                            <ul className='desc-list'>
                                <li>
                                {t('Includes_ship_agent')}  
                                </li>
                                <li>
                                {t('Includes_perm_exp_valid')}  
                                </li>
                            </ul>
                            </div>

                            <div className='pic-elem right-col-menu'>
                            <a  ><Player style={{ height: 200, width:200}} src='https://assets2.lottiefiles.com/private_files/lf30_tbfowstj.json' speed={0.6} className="playerLotie" loop autoplay/></a>
                            </div>
                        </div>
                    </li>


                    <li className='wh-menu-elem flipped'>
                        <div className='anim-elem'>
                            
                            <div className='pic-elem left-col-menu'>
                            <a  ><Player style={{ height: 205, width:205}} src='https://assets3.lottiefiles.com/packages/lf20_Pq51ZX.json' speed={0.6} className="playerLotie" loop autoplay/></a>
                            </div>

                            <div className='btn-desc right-col-menu'>
                            <h3>{t('DA_Data_usermenu')}</h3>
                            
                                <motion.button
                                 drag
                                 dragConstraints = {{left : 50 , top : 50 , bottom : 50 , right : 50 }}
                                 className="cardTypeUser"
                                 onClick={onClickONArival}
                                >
                                    <a className='btn-proceed'>{t('Arriv_Data_usermenu')}<img src={arrowPic} className='arrow-style flip'/></a>
                                </motion.button>
                            <ul className='desc-list'>
                                <li>
                                {t('Search_IMO_Arriv')}
                                </li>
                                <li>
                                {t('Include_op_type')}
                                </li>
                            </ul>
                            <motion.button
                            drag
                            dragConstraints = {{left : 50 , top : 50 , bottom : 50  }}
                            className="cardTypeUser"
                            onClick={onClickONDeparture}
                            >
                            <a className='btn-proceed'  >{t('Depart_Data_usermenu')}<img src={arrowPic} className='arrow-style flip'/></a>
                            </motion.button>
                            <ul className='desc-list'>
                                <li>
                                {t('Search_IMO_Depart')}
                                </li>
                                <li>
                                {t('Include_cargo_type')}
                                </li>
                            </ul>
                            </div>
                        </div>
                    </li>

                    <li className='wh-menu-elem non-flipped'>
                        <div className='anim-elem'>

                            <div className='btn-desc left-col-menu'>
                            <h3>{t('DA_Data_usermenu_period')}</h3>
                            <motion.button
                            drag
                            dragConstraints = {{left : 50 , top : 50 , bottom : 50 , right : 50 }}
                            className="cardTypeUser"
                            onClick={onClickONArivingPeriod}
                            >
                                 <a className='btn-proceed'>{t('Arriv_usermenu')}<img src={arrowPic} className='arrow-style flip'/></a>
                            </motion.button>
                            <ul className='desc-list'>
                                <li>
                                {t('arriv_period')}
                                </li>
                            </ul>
                            <motion.button
                            drag
                            dragConstraints = {{left : 50 , top : 50 , bottom : 50 , right : 50 }}
                            className="cardTypeUser"
                            onClick={onClickONDepPeriod}
                            >
                            <a className='btn-proceed'>{t('Depart_usermenu')}<img src={arrowPic} className='arrow-style flip'/></a>
                            </motion.button>
                            <ul className='desc-list'>
                                <li>
                                {t('depart_period')}
                                </li>
                            </ul>
                            <motion.button
                            drag
                            dragConstraints = {{left : 50 , top : 50 , bottom : 50 , right : 50 }}
                            className="cardTypeUser"
                            onClick={onClickONArivingPeriodFreq}
                            >
                            <a className='btn-proceed'>{t('Arriv_Freq_usermenu')}<img src={arrowPic} className='arrow-style flip'/></a>
                            </motion.button>
                            <ul className='desc-list'>
                                <li>
                                {t('Search_IMO_Period')}
                                </li>
                                <li>
                                {t('Includes_Freq_Arrival')}
                                </li>
                            </ul>
                            
                            <motion.button
                            drag
                            dragConstraints = {{left : 50 , top : 50 , bottom : 50 , right : 50 }}
                            className="cardTypeUser"
                            onClick={onClickONDepPeriodFreq}
                            >
                            <a className='btn-proceed'>{t('Depart_Freq_usermenu')}<img src={arrowPic} className='arrow-style flip'/></a>
                            </motion.button>
                            <ul className='desc-list'>
                                <li>
                                {t('Search_IMO_Period')}
                                </li>
                                <li>
                                {t('Includes_Freq_Departure')}
                                </li>
                            </ul>


                            </div>

                            <div className='pic-elem right-col-menu'>
                            <a  ><Player style={{ height: 200, width:200}} src='https://assets7.lottiefiles.com/packages/lf20_bjusnh4a.json' speed={0.6} className="playerLotie" loop autoplay/></a>
                            </div>
                        </div>
                    </li>
                </ul>
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
        </section>
    );
}
export default UserMenu;