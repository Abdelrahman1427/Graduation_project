import React, { useEffect, useMemo, useRef, useState } from 'react'
import useFetch from '../hooks/useFetch'
import axios from '../apis/dataShips.js';
import dataShipAdd from '../apis/dataShipAdd';
import useAxiosAdd from '../hooks/useAxiosAgent';
import axiosDelete from '../apis/ShipDesDelete.js'
import axiosUpdate from '../apis/ShipDescUpdate.js'
import '../css/style.css'
import '../css/titleforms.css'
import '../css/data_of_Arriving.css';
import '../css/data_of_departing.css';
import '../css/data_of_ships.css' ;
import moment from 'moment';
import useAxios from '../hooks/useAxiosAdd';
import { useTranslation } from 'react-i18next';
import MessageServer from './MessageServer';

const Data_of_Ships = () => {



  const { t } = useTranslation();

  const requiredplace = t('required_place');

  const [placeValue , setplaceValue]=useState(t('Search_Here'));
  const [imo ,setImo] = useState();
  const [callSign ,setCallSign] = useState("");
  const [shipName ,setshipName] = useState("");
  const [countryFlag ,setCountryFlag] = useState("");
  const [shipType ,setShipType] = useState("");
  const [responseText,setresponseText]=useState(false);

  const [dateCreated ,setdateCreated] = useState("");
  const [NoPassenger ,setNoPassenger] = useState("");
  const [NoCrew ,setNoCrew] = useState("");
  const [deadWeight ,setdeadWeight] = useState("");
  const [grossTon ,setgrossTon] = useState("");
  const [draft ,setDraft] = useState("");
  const [shipLength ,setshipLength] = useState("");
  const [shipWidth ,setshipWidth] = useState("");
  const [note ,setNotes] = useState("");




  const inputRef = useRef(null);
  const CallRef = useRef(null);
  const ShipNameRef = useRef(null);
  const CountryFlagRef = useRef(null);
  const shipTypeRef = useRef(null);
  const dateCreatedRef = useRef(null);
  const NoPassRef = useRef(null);
  const NocrewRef = useRef(null);
  const deadWeightRef = useRef(null);
  const grossTonRef = useRef(null);
  const DraftRef = useRef(null);
  const ShipLengthRef = useRef(null);
  const shipWidthRef = useRef(null);
  const NoteRef = useRef(null);

  const [reponse,errortwo , loadingtwo ,axiosFetch] = useAxiosAdd();
  const [reponseOne,errorOne , loadingOne ,axiosFetchOne] = useAxios();

  const clickApi = ()=>{

    axiosFetchOne({
      axiosInstance: axios,
        method :'GET',
        url:'/',
        requestConfig :{}
    })
  }

  useEffect(()=>{
    const searchValue = inputRef.current.value.toUpperCase();
    console.log(searchValue);

     reponseOne.map((datas)=>{
   if(searchValue == datas.IMO)
    {
     setImo(datas.IMO);
     setCallSign(datas.Call_sign);
     setshipName(datas.Ship_Name);
     setCountryFlag(datas.Ship_Country_Code);
     setShipType(datas.Ship_Type_Code);

     var date = new Date(datas.Build_Date)
     setdateCreated(moment(date).format("YYYY-MM-DDTkk:mm"));
     setNoPassenger(datas.Passar_No);
     setNoCrew(datas.Crew_No);
     setdeadWeight(datas.Dead_Weight);
     setgrossTon(datas.Gross_Ton);
     setDraft(datas.Draft);
     setshipLength(datas.Length);
     setshipWidth(datas.Width);
     setNotes(datas.Ship_type_nm);
   }
   if(searchValue ==""){
     setplaceValue(t('please_Target'))
   }
    })
  }, [reponseOne])






  const handelOnchangeIMO =(e)=>{
    setImo(e.target.value);
  }

const handelOnchangeCall =(e)=>{
  setCallSign(e.target.value);
}
const handelOnchangeShipName =(e)=>{
  setshipName(e.target.value);
}
const handelOnchangeCountryFlag =(e)=>{
  setCountryFlag(e.target.value);
}
const handelOnchangeShipType =(e)=>{
  setShipType(e.target.value);
}
const handelOnchangeCreated =(e)=>{
  setdateCreated(e.target.value);
}
const handelOnchangePassenger =(e)=>{
  setNoPassenger(e.target.value);
}
const handelOnchangeCrew =(e)=>{
  setNoCrew(e.target.value);
}
const handelOnchangeDeadWeight =(e)=>{
  setdeadWeight(e.target.value);
}
const handelOnchangeGross =(e)=>{
  setgrossTon(e.target.value);
}
const handelOnchangeDraft =(e)=>{
  setDraft(e.target.value);
}
const handelOnchangeShipLength =(e)=>{
  setshipLength(e.target.value);
}
const handelOnchangeShipWidth =(e)=>{
  setshipWidth(e.target.value);
}
const handelOnchangeNote =(e)=>{
  setNotes(e.target.value);
}


const clickAdd = ()=>{
  axiosFetch({
    axiosInstance: dataShipAdd,
  method :'POST',
  url:'/',
  requestConfig :{
   IMO:imo ,
   Call_sign: callSign ,
   Ship_Name: shipName,
   Ship_Country_Code: countryFlag ,
   Ship_Type_Code: shipType ,
   Crew_No: NoCrew ,
   Passar_No: NoPassenger ,
   Dead_Weight: deadWeight,
   Gross_Ton: grossTon,
   Build_Date:dateCreated,
   Length:shipLength,
   Draft:draft,
   Width:shipWidth
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
 setCallSign("");
 setshipName("")
 setCountryFlag("")
 setShipType("")
 setdateCreated("")
 setNoPassenger("")
 setNoCrew("")
 setdeadWeight("")
 setgrossTon("")
 setDraft("")
 setshipLength("")
 setshipWidth("")
 setNotes("")
}


const clickUpdate= ()=>{
  axiosFetch({
    axiosInstance: axiosUpdate,
  method :'PUT',
  url:'/',
  requestConfig :{

   IMO:imo ,
   Call_sign: callSign ,
   Ship_Name: shipName,
   Ship_Country_Code: countryFlag ,
   Ship_Type_Code: shipType ,
   Crew_No: NoCrew ,
   Passar_No: NoPassenger ,
   Dead_Weight: deadWeight,
   Gross_Ton: grossTon,
   Build_Date:dateCreated,
   Length:shipLength,
   Draft:draft,
   Width:shipWidth


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
 setCallSign("");
 setshipName("")
 setCountryFlag("")
 setShipType("")
 setdateCreated("")
 setNoPassenger("")
 setNoCrew("")
 setdeadWeight("")
 setgrossTon("")
 setDraft("")
 setshipLength("")
 setshipWidth("")
 setNotes("")
}



const clickDelete= ()=>{
  axiosFetch({
    axiosInstance: axiosDelete,
  method :'DELETE',
  url:'/',
  requestConfig :{
    data :{
      IMO:imo

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
 setImo("")
 setCallSign("");
 setshipName("")
 setCountryFlag("")
 setShipType("")
 setdateCreated("")
 setNoPassenger("")
 setNoCrew("")
 setdeadWeight("")
 setgrossTon("")
 setDraft("")
 setshipLength("")
 setshipWidth("")
 setNotes("")

}



const Optional = t('optional');


    return (
  <div>

{responseText && !errortwo && reponse && <MessageServer text={reponse.message} message={responseText} fadeDuration={30000} />}
{errortwo && <MessageServer text={errortwo.message} message={responseText} fadeDuration={30000} />}

  <div className='menuWrapper' id='menuWrapperofarrship'>
  <div className='titleWrapper d-flex' id='titleWrapperofarrship'>
  <div className='menuText' id='menuTextofarrship'>
  {t('Main_Data_of_Ships')}

  </div>
  </div>




  <div className="data-form-wrapper-depart d-flex">
  <form className='formMain formShips d-flex'>
  <div className="formContainer formContainerShip">
  <div className="inputsWrapper ">

  <label className="labelWrapper labelWrapperShip d-flex" htmlFor='imo'> IMO </label>

  <div className="smlinputContainer smlinputContainerShip">
  <input type='text ' required name="imo_Number" id='imo_Number' placeholder={placeValue} onChange={handelOnchangeIMO} ref={inputRef} value={imo}/>
  </div>
  </div>

  <div className="inputsWrapper ">

  <label className="labelWrapper labelWrapperShip d-flex" htmlFor='Call_Sign'> {t('Call_Sign')} </label>

  <div className="smlinputContainer smlinputContainerShip">
  <input type="text"  required name="Call_Sign" id='Call_Sign' onChange={handelOnchangeCall}  placeholder={requiredplace} ref={CallRef} value={callSign}/>
  </div>
  </div>

  <div className="inputsWrapper">

  <label className="labelWrapper labelWrapperShip d-flex" htmlFor='Ship_Name'> {t('Ship_Name')} </label>

  <div className="inputContainer inputContainerShip">
  <input type="text" required name='Ship_Name' id='Ship_Name'  onChange={handelOnchangeShipName} placeholder={requiredplace} ref={ShipNameRef} value={shipName}/>
  </div>
  </div>

  <div className="inputsWrapper">

  <label className="labelWrapper labelWrapperShip d-flex" htmlFor='Country_Flag_of_the_Ship'> {t('Country_Flag_of_the_Ship')}</label>

  <div className="inputContainer inputContainerShip">
  <input type="text" required name='Country_Flag_of_the_Ship' id='Country_Flag_of_the_Ship' placeholder={requiredplace} onChange={handelOnchangeCountryFlag} ref={CountryFlagRef} value={countryFlag} />
  </div>
  </div>

  <div className="inputsWrapper">

  <label className="labelWrapper labelWrapperShip d-flex" htmlFor='Ship_Type'>{t('Ship_Type')}</label>

  <div className="inputContainer inputContainerShip">
  <input type="text" required name='Ship_Type' id='Ship_Type' onChange={handelOnchangeShipType} placeholder={requiredplace} value={shipType} ref={shipTypeRef}/>
  </div>
  </div>
  <div className="inputsWrapper">

  <label className="labelWrapper labelWrapperShip d-flex" htmlFor='Date_Created'>{t('Date_Created')}</label>

  <div className="inputContainer inputContainerShip">
  <input type="datetime-local" required name='Date_Created' id='Date_Created' onChange={handelOnchangeCreated} ref={dateCreatedRef} value={dateCreated} />
  </div>
  </div>

  <div className="inputsWrapper">
  <label className="labelWrapper labelWrapperShip d-flex" htmlFor='Number_of_passengers'>{t('Number_of_passengers')}</label>

  <div className="smlinputContainer smlinputContainerShip imomargin">
  <input type="text" required  id='Number_of_passengers' name='Number_of_passengers' onChange={handelOnchangePassenger} placeholder={requiredplace} value={NoPassenger} ref={NoPassRef} />
  </div>
  </div>

  <div className="inputsWrapper">

  <label className="labelWrapper labelWrapperShip d-flex" htmlFor='Number_of_crew_members'>{t('Number_of_crew_members')}</label>

  <div className="smlinputContainer smlinputContainerShip imomargin">
  <input type="text" required id='Number_of_crew_members' name='Number_of_crew_members' placeholder={requiredplace} onChange={handelOnchangeCrew} value={NoCrew} ref={NocrewRef}/>
  </div>
  </div>

  </div>
  <aside className='secondSection'>
  <div className="inputsWrapper">

  <label className="labelWrapper labelWrapperShip d-flex" htmlFor='ship_Agent'>{t('Dead_Weight')}</label>

  <div className="smlinputContainer smlinputContainerShip imomargin">
  <input type="number" required id='Dead_Weight' name='Dead_Weight' onChange={handelOnchangeDeadWeight} placeholder={requiredplace} value={deadWeight} ref={deadWeightRef}/>
  </div>
  <span className='decsription'> {t('Tons')}</span>
  </div>
  <div className="inputsWrapper">

  <label className="labelWrapper labelWrapperShip d-flex" htmlFor='Gross_Ton'>{t('Gross_Ton')}</label>

  <div className="smlinputContainer smlinputContainerShip imomargin">
  <input type="number" required id='Gross_Ton' name='Gross_Ton' onChange={handelOnchangeGross} placeholder={requiredplace} value={grossTon} ref={grossTonRef}/>
  </div>
  <span className='decsription'> {t('Tons')}</span>
  </div>

  <div className="inputsWrapper">

  <label className="labelWrapper labelWrapperShip d-flex" htmlFor='Draft'>{t('Draft')}</label>

  <div className="smlinputContainer smlinputContainerShip imomargin">
  <input type="number" required id='Draft' name='Draft'  onChange={handelOnchangeDraft} placeholder={requiredplace} value={draft} ref={DraftRef}/>
  </div>
  <span className='decsription'> {t('Meters')} </span>
  </div>

  <div className="inputsWrapper">

  <label className="labelWrapper labelWrapperShip d-flex" htmlFor='Ship_Length'> {t('Ship_Length')}</label>

  <div className="smlinputContainer smlinputContainerShip imomargin">
  <input type="number" required id='Ship_Length' name='Ship_Length' onChange={handelOnchangeShipLength} placeholder={requiredplace} value={shipLength} ref={ShipLengthRef} />
  </div>
  <span className='decsription'> {t('Meters')}</span>
  </div>

<div className="inputsWrapper">
<label className="labelWrapper labelWrapperShip d-flex" htmlFor='ship_Agent'> {t('Ship_Width')}</label>
<div className="smlinputContainer smlinputContainerShip imomargin">
  <input type="number" required id='Ship_Width' name='Ship_Width' onChange={handelOnchangeShipWidth} placeholder={requiredplace}  value={shipWidth} ref={shipWidthRef} />
  </div>
  <span className='decsription'> {t('Meters')}</span>
  </div>

  <div className="inputsWrapper noteShip">

  <label className="labelWrapper labelWrapperShip d-flex" htmlFor='Notes'> {t('Notes')}</label>

  <div className="lginputContainer lginputContainerdepart">
  <textarea id='Notes' name='Notes' onChange={handelOnchangeNote} placeholder={Optional} value={note} ref={NoteRef} >
  </textarea>
  </div>
  </div>
  </aside>

  <div className='btnWrapper d-flex'>
  <button type='button' className='btnSrchH' onClick={ ()=>{ clickApi();}}> {t('Search')}</button>
  <button className='btnSrchH' type='button' onClick={ ()=>{ clickAdd();}}> {t('Add')} </button>
  <button className='btnSrchH' type='button'  onClick={ ()=>{ clickDelete();}}> {t('Delete')} </button>
  <button className='btnSrchH'  type='button'  onClick={ ()=>{ clickUpdate();}}> {t('Update')}</button>

  </div>
  </form>
  </div>
  </div>
  </div>
    )
  }

export default Data_of_Ships;
