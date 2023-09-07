import React, { useEffect, useMemo, useRef, useState } from 'react'
import useFetch from '../hooks/useFetch'
import axios from '../apis/departingSearch.js';
import axiosAdd from '../apis/departingAdd.js';
import axiosDelete from '../apis/DeleteDepart.js'
import moment from 'moment/moment';
import useAxios from '../hooks/useAxiosAdd';
import axiosUpdate from '../apis/DepartUpdate'
import useAxiosAdd from '../hooks/useAxiosAgent';
import '../css/style.css'
import '../css/titleforms.css'
import '../css/data_of_Arriving.css';
import'../css/data_of_departing.css'
import { useTranslation } from 'react-i18next';
import MessageServer from './MessageServer';

const Data_of_Departing = () => {



  const { t } = useTranslation();

  const requiredplace = t('required_place');

const [placeValue , setplaceValue]=useState(t('Search_Here'));
  const [voyage ,setVoyage] = useState("");
  const [ExpDate ,setExDate] = useState("");
  const [ActualDepart ,setActualDepartl] = useState("");
  const [responseText,setresponseText]=useState(false);
  const [Departure_Berth ,setDepartureBerth] = useState("");
  const [DestinationPort ,setDestinationPort] = useState("");
  const [shipAgent ,setShipAgent] = useState();
  const [note ,setNotes] = useState("");
  const [Egyptian_Health_and_Safety_Department ,setEgyptian_Health_and_Safety_Department] = useState();
  const [Port_Authority ,setPort_Authority] = useState();
  const [Customs_Authority ,setCustoms_Authority] = useState();
  const [Police ,setPolice] = useState();
  const [imoInput ,setImo] = useState("");
  const [idNum , setINum]= useState();

const [policeNum , setPoliceNum] =useState(0);
const [safetyNum , setsafetyum] =useState(0);
const [customNum , setCustomNum] =useState(0);
const [authNum , setauthNum] =useState(0);

  const [forKey,setForkey]=useState();


  const [reponse,errortwo , loadingtwo ,axiosFetch] = useAxiosAdd();
  const [reponseOne,errorOne , loadingOne ,axiosFetchOne] = useAxios();

  const inputRef = useRef(null);

  const IMOref = useRef(null);
  const Expectref = useRef(null);
  const Actualref = useRef(null);

  const depBerth = useRef(null);
  const destnationRef = useRef(null);
  const ShipAref = useRef(null);
  const noteref = useRef(null);
  const healthandSafe = useRef(null);
  const portAuthorityref = useRef(null);
  const customsAuthorityref = useRef(null);
  const policeref = useRef(null);


  const clickApi = ()=>{
    axiosFetchOne({
      axiosInstance: axios,
        method :'GET',
        url:'/',
        requestConfig :{}
    })
  }
useEffect(()=>{
  const searchValue = inputRef.current.value;

  reponseOne.map((datas)=>{
  if(searchValue == datas.Voyage_No)
  {
  console.log("ana matet")
  console.log(`hwa da el searchvalue ${datas.IMO}`)
  setImo(datas.IMO)
  setForkey(datas.Voyage_No)
   setVoyage(datas.Voyage_No);
   console.log(datas.Departure_Date_Plan);
   if(!datas.Departure_Date_Plan)
   {
    setExDate(null);
   }
   else{
    var date = new Date(datas.Departure_Date_Plan);
    console.log(date);
    setExDate(moment(date).format("YYYY-MM-DDTkk:mm"))
   }
   if(datas.Departure_Date_Actual == null)
   {
    setActualDepartl(null)
   }
   else{
    date = new Date(datas.Departure_Date_Actual)
    setActualDepartl(moment(date).format("YYYY-MM-DDTkk:mm"))
   }



   setDepartureBerth(datas.Berth_No_Depth)
   setDestinationPort(datas.Destination_Port)
   setShipAgent(datas.Agent_Code)
   setNotes(datas.Cargo_departure)
   if(datas.Maritime_Safety ==0){setEgyptian_Health_and_Safety_Department(false)}
   else
   {setEgyptian_Health_and_Safety_Department(true)}


   if(datas.Port_Authority == 0){setPort_Authority(false)}
   else{setPort_Authority(true)}


   if(datas.Customs == 0){setCustoms_Authority(false)}
   else{setCustoms_Authority(true)}


   if(datas.Police == 0){setPolice(false)}
else{setPolice(true)}
setINum(datas.Arrival_ID);

  }
  if(searchValue ==""){
    setplaceValue(t('please_Target'))
  }
  })

  console.log(`hwa da el id ${idNum}`);
},[reponseOne])



const handelOnchangeVoyage =(e)=>{
setVoyage(e.target.value);
}
const handelOnchangeExDate =(e)=>{
  setExDate(e.target.value);
}
const handelOnchangeActualDep =(e)=>{
  setActualDepartl(e.target.value);
}

const handelOnchangedeparBerth =(e)=>{
  setDepartureBerth(e.target.value);
}
const handelOnchangeDesrination =(e)=>{
  setDestinationPort(e.target.value);
}
const handelOnchangeShipAgent =(e)=>{
  setShipAgent(e.target.value);
}
const handelOnchangeNote =(e)=>{
  setNotes(e.target.value);
}
const handelOnchangeHealth =(e)=>{
  setEgyptian_Health_and_Safety_Department(e.target.checked);
  if(e.target.checked==true)
  {setsafetyum(1)}
}
const handelOnchangePortAuth =(e)=>{
  setPort_Authority(e.target.checked);
  if(e.target.checked==true)
  {setauthNum(1)}
}
const handelOnchangeCustoms =(e)=>{
  setCustoms_Authority(e.target.checked);
  if(e.target.checked==true)
  {setCustomNum(1)}
}
const handelOnchangePolice =(e)=>{
  setPolice(e.target.checked);
  if(e.target.checked==true)
  {setPoliceNum(1)}
}

const handelOnchangeImoChange =(e)=>{
  setImo(e.target.value);
}



const clickAdd = ()=>{
  axiosFetch({
    axiosInstance: axiosAdd,
  method :'POST',
  url:'/',
  requestConfig :{

    Voyage_No: voyage,
    IMO:imoInput,
    Departure_Date_Plan: ExpDate,
    Departure_Date_Actual: ActualDepart,
    Cargo_departure: note ,
    Destination_Port: DestinationPort,
   Agent_Code: shipAgent,
   Berth_No_Depth:Departure_Berth,
   Maritime_Safety:safetyNum,
    Police:policeNum,
    Customs:customNum,
  Port_Authority:authNum


    }

 })
  if(reponse )
  {
   setresponseText(true)
  }

  const timer = setTimeout(() => {
   setresponseText(false);
 }, 5000);
 setImo("")
 setVoyage("");
 setExDate("")
 setActualDepartl("")
 setDepartureBerth("")
 setDestinationPort("")
 setShipAgent("")
 setNotes("")
 setEgyptian_Health_and_Safety_Department(false)
 setPort_Authority(false)
 setCustoms_Authority(false)
 setPolice(false)
}




const clickDelete= ()=>{
  axiosFetch({
    axiosInstance: axiosDelete,
  method :'DELETE',
  url:'/',
  requestConfig :{
    data : {
    Arrival_ID:idNum
    }
  }

 })
  if(reponse )
  {
   setresponseText(true)
  }

  const timer = setTimeout(() => {
   setresponseText(false);
 }, 5000);

 setImo("");
 setVoyage("");
 setExDate("");
 setActualDepartl("")
 setDepartureBerth("")
 setDestinationPort("")
 setShipAgent("")
 setNotes("")
 setEgyptian_Health_and_Safety_Department(false)
 setPort_Authority(false)
 setCustoms_Authority(false)
 setPolice(false)
}


const clickUPDATE = ()=>{
  axiosFetch({
    axiosInstance: axiosUpdate,
  method :'PUT',
  url:'/',
  requestConfig :{

      Voyage_No: voyage,
      IMO:imoInput,
      Agent_Code: shipAgent,
      Departure_Date_Plan: ExpDate ,
      Departure_Date_Actual: ActualDepart,
      Cargo_departure: note,
      Destination_Port: DestinationPort,
     Maritime_Safety:safetyNum,
     Police:policeNum,
     Customs:customNum,
     Port_Authority:authNum,
     Berth_No_Depth:Departure_Berth

    }

 })

  if(reponse)
  {
   setresponseText(true)
  }

  const timer = setTimeout(() => {
   setresponseText(false);
 }, 5000);
 setImo("");
 setVoyage("");
 setExDate("");
 setActualDepartl("")
 setDepartureBerth("")
 setDestinationPort("")
 setShipAgent("")
 setNotes("")
 setEgyptian_Health_and_Safety_Department(false)
 setPort_Authority(false)
 setCustoms_Authority(false)
 setPolice(false)
}

const Optional = t('optional');
    return (
  <div>

{responseText && !errortwo && reponse && <MessageServer text={reponse.message} message={responseText} fadeDuration={30000} />}
{errortwo && <MessageServer text={errortwo.message} message={responseText} fadeDuration={30000} />}
  <div className='menuWrapper' id='menuWrapperofarrship'>
  <div className='titleWrapper d-flex' id='titleWrapperofarrship'>
  <div className='menuText' id='menuTextofarrship'>

  {t('Data_of_departing_ships')}


  </div>
  </div>




  <div className="data-form-wrapper-depart d-flex">
  <form className='formMain d-flex'>
  <div className="formContainer formContainerdepart">
  <div className="inputsWrapper ">
  <label className='labelWrapper labelWrapperdepart d-flex'  htmlFor='Voyage_Number'> {t('Voyage_Number')}</label>
  <div className="inputContainer inputContainerdepart">
  <input type="text" name="Voyage_Number" required id='Voyage_Number' onChange={handelOnchangeVoyage} ref={inputRef}  placeholder={placeValue} value={voyage}/>
  </div>
  </div>

  <div className="inputsWrapper ">
  <label className="labelWrapper labelWrapperdepart d-flex" htmlFor='IMO'> IMO</label>
  <div className="inputContainer inputContainerdepart">
  <input type='number' name="imo_Number" required id='imo_Number'  ref={IMOref} placeholder={requiredplace} onChange={handelOnchangeImoChange} value={imoInput }/>
  </div>
  </div>

  <div className="inputsWrapper">

  <label className="labelWrapper labelWrapperdepart d-flex" htmlFor='Expected_Date_of_Departure'>{t('Expected_Date_of_Departure')}</label>

  <div className="inputContainer inputContainerdepart userNone">

  <input type="datetime-local" required  name='Expected_Date_of_Departure' placeholder={requiredplace} id='Expected_Date_of_Departure' onChange={handelOnchangeExDate}  ref={Expectref} value={ExpDate}/>

  </div>
  </div>

  <div className="inputsWrapper">

  <label className="labelWrapper labelWrapperdepart d-flex" htmlFor='Actual_date_of_Departure'>{t('Actual_date_of_Departure')}</label>

  <div className="inputContainer inputContainerdepart userNone">

  <input type="datetime-local" required name='Actual_date_of_Departure' placeholder={requiredplace} id='Actual_date_of_Departure' onChange={handelOnchangeActualDep} ref={Actualref}  value={ActualDepart}/>
  </div>
  </div>


  <div className="inputsWrapper">

  <label className="labelWrapper labelWrapperdepart d-flex" htmlFor='Departure_Berth'>{t('Departure_Berth')}</label>

  <div className="inputContainer inputContainerdepart userNone">
  <input type="number" name='Departure_Berth' placeholder={requiredplace} id='Departure_Berth' onChange={handelOnchangedeparBerth} ref={depBerth} value={Departure_Berth}/>
  </div>
  </div>

  <div className="inputsWrapper">

  <label className="labelWrapper labelWrapperdepart d-flex" htmlFor='Operation_Type'>{t('DestinationPort')}</label>

  <div className="smlinputContainer smlinputContainerdepart userNone imomargin">
  <input type="number" required id='DestinationPort' placeholder={requiredplace} name='DestinationPort' onChange={handelOnchangeDesrination} ref={destnationRef} value={DestinationPort}/>
  </div>

  </div>

  <div className="inputsWrapper">

  <label className="labelWrapper labelWrapperdepart d-flex" htmlFor='ship_Agent'>{t('ship_Agent')}</label>

  <div className="smlinputContainer smlinputContainerdepart userNone imomargin">
  <input type="number" required id='ship_Agent' name='ship_Agent' placeholder={requiredplace}  onChange={handelOnchangeShipAgent}  ref={ShipAref} value={shipAgent}/>
  </div>
  </div>

  <div className="inputsWrapper">

  <label className="labelWrapper labelWrapperdepart d-flex" htmlFor='Notes'>{t('Notes')}</label>

  <div className="lginputContainer lginputContainerdepart userNone">
  <textarea id='Notes' name='Notes' placeholder={Optional} onChange={handelOnchangeNote}  ref={noteref} value={note}>
  </textarea>
  </div>
  </div>

  </div>
  <aside className='checkboxWrapper'>
    <h3>{t('Departure_Approval')}</h3>
    <div className='checkContainer'>
    <div className="checkbox-wrapper-27">
  <label className="checkbox">
    <input type="checkbox" checked={Egyptian_Health_and_Safety_Department} ref={healthandSafe} onChange={handelOnchangeHealth} />
    <span className="checkbox__icon"></span>
    {t('Egyptian_Health_and_Safety_Department')}
  </label>
</div>
<div className="checkbox-wrapper-27">
  <label className="checkbox">
    <input type="checkbox" checked={Port_Authority} ref={portAuthorityref} onChange={handelOnchangePortAuth}/>
    <span className="checkbox__icon"></span>
    {t('Port_Authority')}
  </label>
</div>

<div className="checkbox-wrapper-27">
  <label className="checkbox">
    <input type="checkbox" checked={Customs_Authority} ref={customsAuthorityref} onChange={handelOnchangeCustoms}/>
    <span className="checkbox__icon"></span>
    {t('Customs_Authority')}
  </label>
</div>

<div className="checkbox-wrapper-27">
  <label className="checkbox">
    <input type="checkbox" checked={Police} ref={policeref} onChange={handelOnchangePolice}/>
    <span className="checkbox__icon"></span>
    {t('Police')}
  </label>
</div>
    </div>
  </aside>

  <div className='btnWrapper d-flex'>

  <button type='button' className='btnSrchH' onClick={ ()=>{ clickApi();}}> {t('Search')}</button>
                     <button className='btnSrchH' type='button' onClick={ ()=>{clickAdd();}}> {t('Add')}</button>
                     <button className='btnSrchH' type='button' onClick={ ()=>{ clickDelete();}}> {t('Delete')} </button>
                     <button className='btnSrchH' type='button' onClick={ ()=>{ clickUPDATE();}}> {t('Update')}</button>

  </div>
  </form>
  </div>
  </div>
  </div>
    )
  }

export default Data_of_Departing
