import { useEffect, useRef, useState } from 'react'
import useAxiosAdd from '../hooks/useAxiosAgent';
import useFetch from '../hooks/useFetch';
import axios from '../apis/arvShipReport';
import useAxios from '../hooks/useAxiosAdd';
import axiosAdd from '../apis/arrivingAd.js';
import axiosDelete from '../apis/DeleteArrival.js'
import axiosUpdate from '../apis/ArrivalUpdate.js'
import '../css/style.css'
import '../css/titleforms.css'
import '../css/data_of_Arriving.css';
import moment from 'moment/moment';
import { useTranslation } from 'react-i18next';
import MessageServer from './MessageServer';

const Data_of_Arriving_ships = () => {


  const { t } = useTranslation();

const requiredplace = t('required_place');
const Optional = t('optional');

const [placeValue , setplaceValue]=useState(t('Search_Here'));
const [voyage ,setVoyage] = useState();
const [imo ,setImo] = useState();
const [ExpDate ,setExDate] = useState();
const [ActualArrival ,setActualArrival] = useState();
const [MorDate ,setMoreDate] = useState();
const [berth ,setBerth] = useState();
const [cargo ,setCargo] = useState();
const [operation ,setOperation] = useState();
const [portComing ,setPortComing] = useState();
const [shipAgent ,setShipAgent] = useState();
const [note ,setNotes] = useState();
const [idNum , setINum]= useState();
const [responseText,setresponseText]=useState(false);

const [reponse ,errortwo , loadingtwo ,axiosFetch] = useAxiosAdd();
const [reponseOne,errorOne , loadingOne ,axiosFetchOne] = useAxios();
const inputRef = useRef(null);

const imoref = useRef(null);
const Expectref = useRef(null);
const Actualref = useRef(null);
const Moringref = useRef(null);
const berthref = useRef(null);
const cargoref = useRef(null);
const operationref = useRef(null);
const portnref = useRef(null);
const Shipref = useRef(null);
const noteref = useRef(null);


const clickApi = ()=>{
  axiosFetchOne({
    axiosInstance: axios,
  method :'GET',
  url:'/',
  requestConfig :{}
})}
useEffect(()=>{
  const searchValue = inputRef.current.value;

reponseOne.map((datas)=>{
if(searchValue == datas.Voyage_No)
{
console.log("ana matet")
console.log(`hwa da el searchvalue ${datas.IMO}`)
setImo(datas.IMO)
 setVoyage(datas.Voyage_No);
 if(datas.Arrival_Date_Plan == null)
 {
  setExDate(null)
 }
 else{
  var date = new Date(datas.Arrival_Date_Plan)
  setExDate(moment(date).format("YYYY-MM-DDTkk:mm"))
 }

 if(datas.Arrival_Date_Actual == null)
 {
  setActualArrival(null)
 }
 else{
  date = new Date(datas.Arrival_Date_Actual)
  setActualArrival(moment(date).format("YYYY-MM-DDTkk:mm"))
 }
if(datas.Berthing_Date == null){
  setMoreDate(null)
}
else{
  date = new Date(datas.Berthing_Date)
  setMoreDate(moment(date).format("YYYY-MM-DDTkk:mm"))
}

 setBerth(datas.Berth_No)
 setCargo(datas.Cargo_Arrival)
 setOperation(datas.Operation_nm)
 setPortComing(datas.Port_of_Departure)
 setShipAgent(datas.Agent_Code)
 setNotes(datas.Arrival_Note)
 setINum(datas.Arrival_ID)

}

if(searchValue ==""){
  setplaceValue(t('please_Target'))
}

})
},[reponseOne])



console.log(`hwa da el id ${idNum}`);


const clickAdd = ()=>{
   axiosFetch({
     axiosInstance: axiosAdd,
   method :'POST',
   url:'/',
   requestConfig :{
    Voyage_No: voyage ,
    IMO:imo ,
     Arrival_Date_Plan: ExpDate ,
     Arrival_Date_Actual: ActualArrival,
    Berthing_Date: MorDate ,
     Berth_No: berth ,
     Cargo_Arrival: cargo ,
     Operation_nm: operation ,
      Port_of_Departure: portComing,
     Agent_Code: shipAgent,
    Arrival_Note:note

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
  setActualArrival("")
  setMoreDate("")
  setBerth("")
  setCargo("")
  setOperation("")
  setPortComing("")
  setShipAgent("")
  setNotes("")


 }


 const clickDelete= ()=>{
  axiosFetch({
    axiosInstance: axiosDelete,
  method :'DELETE',
  url:'/',
  requestConfig :{
    Arrival_ID:idNum
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
setActualArrival("")
setMoreDate("")
setBerth("")
setCargo("")
setOperation("")
setPortComing("")
setShipAgent("")
setNotes("")

}


const clickUpdate = ()=>{
  axiosFetch({
    axiosInstance: axiosUpdate,
  method :'PUT',
  url:'/',
  requestConfig :{
   Voyage_No: voyage ,
   IMO:imo ,
    Arrival_Date_Plan: ExpDate ,
    Arrival_Date_Actual: ActualArrival,
   Berthing_Date: MorDate ,
    Berth_No: berth ,
    Cargo_Arrival: cargo ,
    Operation_nm: operation ,
     Port_of_Departure: portComing,
    Agent_Code: shipAgent,
   Arrival_Note:note

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
 setActualArrival("")
 setMoreDate("")
 setBerth("")
 setCargo("")
 setOperation("")
 setPortComing("")
 setShipAgent("")
 setNotes("")


}




const handelOnchangeVoyage =(e)=>{
setVoyage(e.target.value);
}

const handelOnchangeExDate =(e)=>{
  setExDate(e.target.value);
}
const handelOnchangeActualArr =(e)=>{
  setActualArrival(e.target.value);
}
const handelOnchangeMore =(e)=>{
  setMoreDate(e.target.value);
  console.log(MorDate)
  }
const handelOnchangeBerth =(e)=>{
  setBerth(e.target.value);
}

const handelOnchangeCargo =(e)=>{
  setCargo(e.target.value);
}
const handelOnchangeOperation = (e) => {
  setOperation(e.target.value);
}
const handelOnchangePortC =(e)=>{
  setPortComing(e.target.value);
}
const handelOnchangeShipAgent =(e)=>{
  setShipAgent(e.target.value);
}
const handelOnchangeNote =(e)=>{
  setNotes(e.target.value);
}
const handelOnchangeImo =(e)=>{
  setImo(e.target.value);
}



  return (
<>
{responseText && reponse &&!errortwo && <MessageServer text={reponse.message} message={responseText} fadeDuration={30000} />}
{errortwo  && <MessageServer text={errortwo.message} message={responseText} fadeDuration={30000} />}
<div className='menuWrapper' id='menuWrapperofarrship'>
<div className='titleWrapper d-flex' id='titleWrapperofarrship'>
<div className='menuText' id='menuTextofarrship'>
{t('Data_of_Arriving_ships')}

{/* {loading && <p>Loading...</p>}
 {!loading && error && <p className= "errMsg">{errortwo}</p>} */}

</div>
</div>




<div className="data-form-wrapper d-flex">
<div className="formContainer">
<form id='formSelection'>
<div className="inputsWrapper ">

<label className="labelWrapper d-flex" htmlFor='Voyage_Number'>  {t('Voyage_Number')} </label>

<div className="inputContainer  userNone">
<input type="text" required name="Voyage_Number" id='Voyage_Number' onChange={handelOnchangeVoyage}  placeholder={placeValue} ref={inputRef}  value={voyage}/>
</div>
</div>

<div className="inputsWrapper ">

<label className="labelWrapper d-flex"  > IMO</label>

<div className="inputContainer  userNone">
<input type='number' required name="imo_Number" id='imo_Number' placeholder={requiredplace} onChange={handelOnchangeImo}  ref={imoref}  value={imo}/>
</div>
</div>

<div className="inputsWrapper">

<label className="labelWrapper d-flex" htmlFor='Expected_date_of_Arrival'>{t('Expected_date_of_Arrival')} </label>

<div className="inputContainer userNone">
<input type="datetime-local" required name='expected_Date_Arrival' placeholder={requiredplace} id='expected_Date_Arrival' onChange={handelOnchangeExDate} ref={Expectref}   value={ExpDate}/>
</div>
</div>

<div className="inputsWrapper">

<label className="labelWrapper d-flex" htmlFor='Actual_date_of_Arrival'>{t('Actual_date_of_Arrival')}</label>

<div className="inputContainer userNone">
<input type="datetime-local" required name='Actual_date_of_Arrival'  placeholder={requiredplace} id='Actual_date_of_Arrival'  onChange={handelOnchangeActualArr} ref={Actualref}  value={ActualArrival}/>
</div>
</div>

<div className="inputsWrapper imoWrapper">

<label required className="labelWrapper  d-flex" htmlFor='Mooring_Date'> {t('Mooring_Date')}</label>

<div className="inputContainer userNone">
<input required type="datetime-local" name='Mooring_Date'  placeholder={requiredplace} id='Mooring_Date' ref={Moringref} onChange={handelOnchangeMore}  value={MorDate} />
</div>

<label className="labelWrapper d-flex" htmlFor='Arrival_Berth'>{t('Arrival_Berth')}</label>

<div  className="inputContainer userNone">
<input required type="text" name='Arrival_Berth'  placeholder={requiredplace} id='Arrival_Berth' ref={berthref} onChange={handelOnchangeBerth}  value={berth} />
</div>
</div>
<div className="inputsWrapper">

<label className="labelWrapper d-flex" htmlFor='Ships_Cargo_upon_Arrival'>{t('Ships_Cargo_upon_Arrival')}</label>

<div className="inputContainer userNone">
<input required type="text" name='Ships_Cargo_upon_Arrival'  placeholder={requiredplace} id='Ships_Cargo_upon_Arrival'onChange={handelOnchangeCargo}  ref={cargoref} value={cargo} />
</div>
</div>

<div className="inputsWrapper">
  <label className="labelWrapper d-flex" htmlFor='Operation_Type'>{t('Operation_Type')}</label>
  <div className="inputContainer userNone">
    <select id='Operation_Type' name='Operation_Type' ref={operationref} onChange={handelOnchangeOperation} value={operation} className="selectBox">
      <option value="">{t('Select_an_operation_type')}</option>
      <option value="Bunkering">{t('Bunkering')}</option>
      <option value="Loading">{t('Loading')}</option>
      <option value="Loading and Unloading">{t('Loading_and_Unloading')}</option>
      <option value="LVD">LVD</option>
      <option value="LVU">LVU</option>
      <option value="Maintenance">{t('Maintenance')}</option>
      <option value="Loading and Unloading passengers">{t('Loading_and_Unloading_passengers')}</option>
      <option value="POL">POL</option>
      <option value="Supplying water">{t('Supplying_water')}</option>
      <option value="Unloading">{t('Unloading')}</option>
    </select>
  </div>
</div>



<div className="inputsWrapper">

<label className="labelWrapper d-flex" htmlFor='port_coming_from'>{t('Port_coming_from')}</label>

<div className="smlinputContainer imomargin userNone" >
<input type="text" id='port_coming_from'  required placeholder={requiredplace} name='port_coming_from' ref={portnref} onChange={handelOnchangePortC}  value={portComing} />
</div>
</div>

<div className="inputsWrapper">

<label className="labelWrapper d-flex" htmlFor='ship_Agent'>{t('ship_Agent')}</label>

<div className="smlinputContainer imomargin userNone">
<input type="text" id='ship_Agent' name='ship_Agent' required  placeholder={requiredplace} ref={Shipref} onChange={handelOnchangeShipAgent}  value={shipAgent}/>
</div>
</div>

<div className="inputsWrapper">
<label className="labelWrapper d-flex" htmlFor='Notes'>{t('Notes')}</label>
<div className="lginputContainer userNone">
<textarea id='Notes' name='Notes' onChange={handelOnchangeNote}  placeholder={Optional} ref={noteref}  value={note}>
</textarea>
</div>
</div>
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
</>
  )
}

export default Data_of_Arriving_ships
