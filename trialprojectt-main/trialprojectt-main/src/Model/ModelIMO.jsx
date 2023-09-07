import React, { useRef, useState } from 'react'
import {motion} from "framer-motion"
import { Player } from '@lottiefiles/react-lottie-player';
import ExitLogo from '../imgs/exit.png'
import DropDownbyIMO from '../Backdrop/DropDownbyIMO';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
const dropIn ={
    hidden : {
        y: "-100vh",
        opacity : 0,
    },
    visible :{
        y :"0",
        opacity : 1,
        transition : {
            duration:0.1,
            type:"spring",
            damping :25 ,
            stiffiness : 500,
        }
    },
    exit :{

        y: "100vh",
        opacity :0,
    },
};



const ModelIMO = ({handleClose ,text , Arrivingfield , DepratingField ,IMOField , DepratingFieldStart ,DepratingFieldEnd,ArrivingfieldStart ,ArrivingfieldEnd  }) => {
    const { t } = useTranslation();
  const [imoNumber , setImoNumber] = useState('');
  const [ArrivalFieldD , setArrivalFieldD] = useState();
  const [depFieldD , setDepFieldD] = useState();
  const [ArrivalStrt , setArrivalStrt]  = useState();
  const [ArrivalEnd , setArrivalEnd]  = useState();
  const [DepStrt , setDepStrt]  = useState();
  const [DepEnd , setDepEnd]  = useState();
  const [ValidInput , setValidInput] = useState();
  const [ValidDate , setValidDate] = useState();
  const [ValidDateTwo , setValidDateTwo] = useState();

  console.log(`imoabla ma yapass ${imoNumber}`)
  return (


    <DropDownbyIMO onClick={handleClose} >
      <motion.div
      drag
       className="chooseWrapper"
       onClick={(e) =>e.stopPropagation()}
       variants={dropIn}
       initial="hidden"
       animate = "visible"
       exit="exit"

       >
      <button onClick={handleClose} className='ExitDropDown'> <img src={ExitLogo} alt=""  /></button>
      <div className='titleCardSearch d-flex'><span>{t('Search')}</span></div>
      <div className={Arrivingfield || DepratingField|| ArrivingfieldStart || DepratingFieldStart ? "chooseWrapper ImoLable" :"offscreen" }>
      <label >{t('from')}</label>
      </div>
      <input className={Arrivingfield ? "" :"offscreen" } required type="datetime-local" name="dateArrival" id="dateArrival"  onChange={event => setArrivalFieldD(event.target.value)} value={ArrivalFieldD}/>
      <input className={DepratingFieldStart ? "" :"offscreen" } required type="datetime-local" name="DepratingFieldStart" id="DepratingFieldStart"  onChange={event => setDepStrt(event.target.value)} value={DepStrt}/>
      <input className={DepratingField ? "" :"offscreen" } required type="datetime-local" name="DepratingField" id="DepratingField" placeholder='Write Date Arrival' onChange={event => setDepFieldD(event.target.value)} value={depFieldD}/>
      <input className={ArrivingfieldStart ? "" :"offscreen" } required type="datetime-local" name="ArrivingfieldStart" id="ArrivingfieldStart"  onChange={event => setArrivalStrt(event.target.value)} value={ArrivalStrt}/>
      <div className={ArrivingfieldEnd || DepratingFieldEnd ? " chooseWrapper ImoLable" :"offscreen" }>
      <label>{t('to')}</label>
      </div>
      <input className={ArrivingfieldEnd ? "" :"offscreen" } required type="datetime-local" name="ArrivingfieldEnd" id="ArrivingfieldEnd" onChange={event => setArrivalEnd(event.target.value)} value={ArrivalEnd} />
      <input className={DepratingFieldEnd ? "" :"offscreen" } required type="datetime-local" name="DepratingFieldEnd" id="DepratingFieldEnd"  onChange={event => setDepEnd(event.target.value)} value={DepEnd} />
       <input type="text" className={IMOField ? "" :"offscreen" } required name="IMOsearch" id="imoSearch" placeholder='Search With IMO'  onChange={event => setImoNumber(event.target.value)}  value={imoNumber}/>


       <button className={ IMOField && !Arrivingfield  && !DepratingField && !ArrivingfieldStart  && ! DepratingFieldStart? "GoDropDown" : "offscreen" }>
      <Link to='/menu/MainDataRepo' state= {{
          imoSearch : imoNumber
      }}><Player style={{ height: 50 }} src='https://assets5.lottiefiles.com/packages/lf20_A2xUJoCwKm.json' className="playerLotie" loop autoplay/>
      </Link> </button>

       <button className={ IMOField && Arrivingfield  && !DepratingField ? "GoDropDown" : "offscreen" }>
       <Link to='/menu/ShipArrivalRepo' state= {{
          imoSearch : imoNumber ,
          dateSearch : ArrivalFieldD
      }}><Player style={{ height: 50 }} src='https://assets5.lottiefiles.com/packages/lf20_A2xUJoCwKm.json' className="playerLotie" loop autoplay/>
      </Link> </button>


        <button className={ IMOField && !Arrivingfield  && DepratingField ? "GoDropDown" : "offscreen" }>
        <Link to='/menu/DepartingRepo' state= {{
          imoSearch : imoNumber ,
          dateSearch : depFieldD
      }}><Player style={{ height: 50 }} src='https://assets5.lottiefiles.com/packages/lf20_A2xUJoCwKm.json' className="playerLotie" loop autoplay/>
      </Link> </button>


      {/* da 3shan el arrival for a period */}
        <button className={ !IMOField && ArrivingfieldStart  && ArrivingfieldEnd ? "GoDropDown" : "offscreen" }>
        <Link to='/menu/ShipsArrivalPeriod' state= {{
          dataSearchStrt : ArrivalStrt ,
          dateSearchEnd : ArrivalEnd
      }}><Player style={{ height: 50 }} src='https://assets5.lottiefiles.com/packages/lf20_A2xUJoCwKm.json' className="playerLotie" loop autoplay/>
      </Link> </button>

     {/* da 3shan el departing for a period */}
      <button className={ !IMOField && DepratingFieldStart  && DepratingFieldEnd ? "GoDropDown" : "offscreen" }>
      <Link to='/menu/DepartingRepoPeriod' state= {{
          dataSearchStrt : DepStrt ,
          dateSearchEnd : DepEnd
      }}><Player style={{ height: 50 }} src='https://assets5.lottiefiles.com/packages/lf20_A2xUJoCwKm.json' className="playerLotie" loop autoplay/>
      </Link> </button>

 {/* da 3shan el arrival frq */}
      <button className={ IMOField && ArrivingfieldStart  && ArrivingfieldEnd ? "GoDropDown" : "offscreen" }>
      <Link to='/menu/ArrivalFrequent' state= {{
           imoSearch : imoNumber ,
          dataSearchStrt : ArrivalStrt ,
          dateSearchEnd : ArrivalEnd
      }}><Player style={{ height: 50 }} src='https://assets5.lottiefiles.com/packages/lf20_A2xUJoCwKm.json' className="playerLotie" loop autoplay/>
      </Link> </button>

       {/* da 3shan el departing frq */}

       <button className={ IMOField && DepratingFieldStart  && DepratingFieldEnd  && !ArrivingfieldStart  && !ArrivingfieldEnd ? "GoDropDown" : "offscreen" }>
       <Link to='/menu/DepartingRepoFreq' state= {{
           imoSearch : imoNumber ,
          dataSearchStrt : DepStrt ,
          dateSearchEnd : DepEnd
      }}><Player style={{ height: 50 }} src='https://assets5.lottiefiles.com/packages/lf20_A2xUJoCwKm.json' className="playerLotie" loop autoplay/>
      </Link> </button>

      </motion.div>
</DropDownbyIMO>

  )
}

export default ModelIMO
