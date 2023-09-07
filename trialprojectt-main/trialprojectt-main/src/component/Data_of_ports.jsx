import React, { useEffect, useRef } from 'react';
import {useState} from 'react';
import '../css/form.css';
import { useTranslation } from 'react-i18next';
import useFetch from '../hooks/useFetch'
import axios from '../apis/PortsSearch';
import useAxios from '../hooks/useAxiosAdd';
import axiosAdd from '../apis/portsAdd.js';
import useAxiosAdd from '../hooks/useAxiosAgent.js';
import axiosDelete from '../apis/DeletePort.js';
import axiosUpdate from '../apis/PortsUpdate.js';
import MessageServer from './MessageServer';

const PortsData =()=>{

    const [portCode, setPortCode]= useState('');
    const [portName, setPortName]= useState('');
    const [Notes, setNotes]= useState('');
    const [responseText,setresponseText]=useState(false);


    const inputRef=useRef(null);

    const [reponse,errortwo , loadingtwo ,axiosFetch] = useAxiosAdd();

    const [reponseOne,errorOne , loadingOne ,axiosFetchOne] = useAxios();

      const clickApi = ()=>{
        axiosFetchOne({
          axiosInstance: axios,
            method :'GET',
            url:'/',
            requestConfig :{}
        })}
        useEffect(()=>{
          const searchValue = inputRef.current.value.toUpperCase();

          reponseOne.map((datas)=>{
          if(searchValue == datas.Port_Code)
          {
          console.log(`Search Value: ${datas.Port_Code}`)
          setPortCode(datas.Port_Code);
          setPortName(datas.Port_Name);
          }
          if(searchValue ==""){
            setplaceValue(t('please_Target'))
            }
            })
        },[reponseOne])




        const handelOnchangePortCode =(e)=>{
            setPortCode(e.target.value);
            }
        const handelOnchangePortName =(e)=>{
            setPortName(e.target.value);
            }
        const handelOnchangeNotes =(e)=>{
            setNotes(e.target.value);
            }

const clickAdd=()=>{
    axiosFetch({
      axiosInstance: axiosAdd,
    method :'POST',
    url:'/',
    requestConfig :{
        code:portCode,
        name:portName
      }
   })
   if(reponse )
   {
    setresponseText(true)
   }

   const timer = setTimeout(() => {
    setresponseText(false);
  }, 5000);
   setPortCode("");
   setPortName("");
  }

  const clickDelete= ()=>{
    axiosFetch({
      axiosInstance: axiosDelete,
    method :'DELETE',
    url:'/',
    requestConfig:{

            code:portCode
      }
   })
   setPortCode("");
   setPortName("");
   if(reponse )
   {
    setresponseText(true)
   }

   const timer = setTimeout(() => {
    setresponseText(false);
  }, 5000);
}

const clickUpdate = ()=>{
    axiosFetch({
      axiosInstance: axiosUpdate,
    method :'PUT',
    url:'/',
    requestConfig :{
        code:portCode,
        name:portName
      }
   })
   if(reponse )
   {
    setresponseText(true)
   }

   const timer = setTimeout(() => {
    setresponseText(false);
  }, 5000);
   setPortCode("");
   setPortName("");
  }


  const { t } = useTranslation();
  const [placeValue , setplaceValue]=useState(t('Search_Here'));
  const requiredplace = t('required_place');
  const Optional = t('optional');
       return(
        <div className='wholeform'>
      {responseText && !errortwo && reponse && <MessageServer text={reponse.message} message={responseText} fadeDuration={30000} />}
{errortwo && <MessageServer text={errortwo.message} message={responseText} fadeDuration={30000} />}
        <div className='titleSection'>
            <h>{t('Data_of_Ports')}</h>
            {/* {loading && <p>Loading...</p>} */}
            {/* {!loading && error && <p className= "errMsg">{errortwo}</p>} */}

        </div>
        <form className='midForm' >
        <div className='formSection'>
                <div className='d-flex inputFlex'>
                    <label htmlFor='portCode'  className='label-of-form'><b>{t('Port_Code')}</b></label>
                    <input maxLength="5" required value={portCode} ref={inputRef} onChange={handelOnchangePortCode} type='text' required id="portCode" name="portCode" className='txtStyle' placeholder={placeValue}/>
                </div>
                <div  className='d-flex inputFlex'>
                    <label htmlFor='portName'  className='label-of-form'><b>{t('Port_Name')}</b></label>
                    <input required value={portName} type='text' onChange={handelOnchangePortName} id="portName" name="portName" className='txtStyle' placeholder={requiredplace} />
                </div>
                <div  className='d-flex inputFlex'>
                    <label htmlFor='Notes' onChange={handelOnchangeNotes} className='lblTXTa label-of-form'><b>{t('Notes')}</b></label>
                    <textarea value={Notes} name="Notes" className='txtAStyle' placeholder='Optional'></textarea>
                </div>
                <div className='btnBarSoghyr'>
                <button type='button' className='btnSrch' onClick={ ()=>{ clickApi();}}> {t('Search')}</button>
                     <button className='btnSrch' type='button' onClick={ ()=>{clickAdd();}}> {t('Add')}</button>
                     <button className='btnSrch' type='button' onClick={ ()=>{ clickDelete();}}> {t('Delete')} </button>
                     <button className='btnSrch' type='button' onClick={ ()=>{ clickUpdate();}}> {t('Update')}</button>
             </div>
        </div>

        </form>
        </div>
    )
}
export default PortsData;