import React, { useEffect, useRef } from 'react';
import {useState} from 'react';
import '../css/form.css'
import { useTranslation } from 'react-i18next';
import useFetch from '../hooks/useFetch'
import axios from '../apis/ShipTypesSearch.js';
import axiosAdd from '../apis/ShipTypeAdd.js';
import useAxiosAdd from '../hooks/useAxiosAgent';
import axiosDelete from '../apis/DeleteShipTypes.js';
import axiosUpdate from '../apis/ShipTypeUpdate.js';
import MessageServer from './MessageServer';
import useAxios from '../hooks/useAxiosAdd';

const ShipTypeData =()=>{
    const [shipTypeCode, setShipTypeCode]= useState('');
    const [shipType, setShipType]= useState('');
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
        })
      }
      useEffect(()=>{
        const searchValue = inputRef.current.value.toUpperCase();

        reponseOne.map((datas)=>{
        if(searchValue == datas.Type_Code)
        {
        console.log(`Search Value: ${datas.Type_Code}`)
        setShipTypeCode(datas.Type_Code);
        setShipType(datas.Ship_type_nm);
        }
        if(searchValue ==""){
          setplaceValue(t('please_Target'))
          }
          })
    },[reponseOne])






        const handelOnchangeTypeCode =(e)=>{
            setShipTypeCode(e.target.value);
            }
        const handelOnchangeType =(e)=>{
            setShipType(e.target.value);
            }

            const clickAdd = ()=>{
                axiosFetch({
                  axiosInstance: axiosAdd,
                method :'POST',
                url:'/',
                requestConfig :{
                     name:shipType,
                    code:shipTypeCode


                  }
               })
               if(reponse )
              {
                setresponseText(true)
                }

                const timer = setTimeout(() => {
               setresponseText(false);
                  }, 5000);
               setShipTypeCode("");
               setShipType("");
              }

              const clickDelete= ()=>{
                axiosFetch({
                  axiosInstance: axiosDelete,
                method :'DELETE',
                url:'/',
                requestConfig :{
                    data:{
                        code:shipTypeCode
                    }
                  }
               })
               setShipTypeCode("");
               setShipType("");
               if(reponse )
               {
               setresponseText(true)
               }

                const timer = setTimeout(() => {
               setresponseText(false);
              }, 5000);
              setShipTypeCode("");
              setShipType("");

              }


      const clickUpdate = ()=>{
       axiosFetch({
       axiosInstance: axiosUpdate,
      method :'PUT',
      url:'/',
      requestConfig :{
      code:shipTypeCode,
      name:shipType
    }
 })
 if(reponse )
  {
   setresponseText(true)
  }

  const timer = setTimeout(() => {
   setresponseText(false);
 }, 5000);
 setShipTypeCode("");
 setShipType("");
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
            <h> {t('Data_of_Ship_Types')} </h>
            {/* {loading && <p>Loading...</p>}
            {!loading && error && <p className= "errMsg">{errortwo}</p>} */}
        </div>
        <form className='midForm'>
        <div className='formSection'>
                <div className='d-flex inputFlex'>
                    <label htmlFor='shipTCode' className='label-of-form'><b> {t('Ship_Type_Code')} </b></label>
                    <input ref={inputRef} maxLength="3" value={shipTypeCode} onChange={handelOnchangeTypeCode}  type='text' required id="shipTCode" name="shipTCode" className='txtStyle' placeholder={placeValue}/>
                </div>
                <div className='d-flex inputFlex'>
                    <label htmlFor='shipType' className='label-of-form'><b>{t('Ship_Type')}</b></label>
                    <input value={shipType} type='text' onChange={handelOnchangeType} id="shipType" name="shipType" className='txtStyle' placeholder={requiredplace}/>
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
export default ShipTypeData;