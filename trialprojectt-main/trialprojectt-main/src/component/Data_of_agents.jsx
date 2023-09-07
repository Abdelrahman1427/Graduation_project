import { useEffect, useRef, useState } from 'react'
import useFetch from '../hooks/useFetch'
import axios from '../apis/AgentSearch.js';
import useAxiosAdd from '../hooks/useAxiosAgent';
import useAxios from '../hooks/useAxiosAdd';
import axiosAdd from '../apis/AgentAdd';
import axiosDelete from '../apis/AgentDelete'
import axiosUpdate from '../apis/AgentUpdate'
import '../css/form.css'
import { useTranslation } from 'react-i18next';
import moment from 'moment/moment';
import MessageServer from './MessageServer';

const AgentData =()=>{
    const [AgentCode, setAgentCode]= useState();
    const [AgentName, setAgentName]= useState('');
    const [Address, setAddress]= useState('');
    const [Phone, setPhone]= useState('');
    const [Email, setEmail]= useState('');
    const [PermNo, setPermNo]= useState('');
    const [PermDate, setPermDate]= useState('');
    const [PermExpDate, setPermExpDate]= useState('');
    const [Notes, setNotes]= useState('');
    const [responseText,setresponseText]=useState(false);
    const { t } = useTranslation();
    const [placeValue , setplaceValue]=useState(t('Search_Here'));
    const requiredplace = t('required_place');
    const Optional = t('optional');

    const [reponse,errortwo , loadingtwo ,axiosFetch] = useAxiosAdd();
    const [reponseOne,errorOne , loadingOne ,axiosFetchOne] = useAxios();
    const inputRef=useRef(null);
    // const [data, error, loading] = useFetch({
    //     axiosInstance: axios,
    //     method :'GET',
    //     url:'/',
    //     requestConfig :{}
    //   });
    //   var arr =data;

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
        if(searchValue == datas.Agent_Code)
        {
        console.log(`Search Value: ${datas.Agent_Code}`)
        setAgentCode(datas.Agent_Code);
        console.log(`Search Value: ${AgentCode}`)
        setAgentName(datas.Agent_Name);
        setAddress(datas.Address);
        setPhone(datas.Telephone);
        setEmail(datas.Email);
        setPermNo(datas.Perm_No);
        if(datas.Perm_dt_st == null)
        {
            setPermDate(null);
        }
        else{
         var date = new Date(datas.Perm_dt_st)
         setPermDate(moment(date).format("YYYY-MM-DDTkk:mm"))
        }
        if(datas.Perm_dt_end == null)
        {
            setPermExpDate(null);
        }
        else{
          date = new Date(datas.Perm_dt_end)
         setPermDate(moment(date).format("YYYY-MM-DDTkk:mm"))
        }

        setNotes(datas.notes);
        }
        if(searchValue ==""){
            setplaceValue(t('please_Target'))
          }
          })
    },[reponseOne])





        const handelOnchangeAgentCode =(e)=>{
            setAgentCode(e.target.value);
            console.log(AgentCode);
            }
        const handelOnchangeAgentName =(e)=>{
            setAgentName(e.target.value);
            }
        const handelOnchangeAddress =(e)=>{
            setAddress(e.target.value);
            }
        const handelOnchangePhone =(e)=>{
            setPhone(e.target.value);
            }
        const handelOnchangeEmail =(e)=>{
            setEmail(e.target.value);
            }
        const handelOnchangePermNo =(e)=>{
            setPermNo(e.target.value);
            }
        const handelOnchangePermDate =(e)=>{
            setPermDate(e.target.value);
            }
        const handelOnchangeDateExp =(e)=>{
            setPermExpDate(e.target.value);
            }
        const handelOnchangeNotes =(e)=>{
            setNotes(e.target.value);
            }




const clickAdd = ()=>{
  axiosFetch({
  axiosInstance: axiosAdd,
  method :'POST',
  url:'/',
  requestConfig :{
        Agent_Code:AgentCode,
        Perm_No: PermNo ,
        Perm_dt_st: PermDate,
        Perm_dt_end: PermExpDate ,
        Email: Email ,
        Telephone: Phone ,
        Address: Address,
        Agent_Name: AgentName
    }
 })
 if(reponse )
 {
  setresponseText(true)
 }

 const timer = setTimeout(() => {
  setresponseText(false);
}, 5000);
 setAgentCode("");
 setAgentName("");
 setAddress("")
 setPhone("")
 setEmail("")
 setPermNo("")
 setPermDate("")
 setPermExpDate("")
 setNotes("")
}
const clickUpdate= ()=>{
    axiosFetch({
    axiosInstance: axiosUpdate,
    method :'PUT',
    url:'/',
    requestConfig :{
          Agent_Code:AgentCode,
          Perm_No: PermNo ,
          Perm_dt_st: PermDate,
          Perm_dt_end: PermExpDate ,
          Email: Email ,
          Telephone: Phone ,
          Address: Address,
          Agent_Name: AgentName


      }
   })
   if(reponse )
   {
    setresponseText(true)
   }

   const timer = setTimeout(() => {
    setresponseText(false);
  }, 5000);
   setAgentCode("");
   setAgentName("");
   setAddress("")
   setPhone("")
   setEmail("")
   setPermNo("")
   setPermDate("")
   setPermExpDate("")
   setNotes("")
  }

const clickDelete= ()=>{
    axiosFetch({
      axiosInstance: axiosDelete,
    method :'DELETE',
    url:'/',
    requestConfig :{
        Agent_Code:AgentCode
      }
   })
   setAgentCode("");
   setAgentName("");
   setAddress("")
   setPhone("")
   setEmail("")
   setPermNo("")
   setPermDate("")
   setPermExpDate("")
   setNotes("")
   if(reponse )
   {
    setresponseText(true)
   }

   const timer = setTimeout(() => {
    setresponseText(false);
  }, 5000);

  }


       return(

        <div className='wholeform'>
        {responseText && !errortwo && reponse && <MessageServer text={reponse.message} message={responseText} fadeDuration={30000} />}
{errortwo && <MessageServer text={errortwo.message} message={responseText} fadeDuration={30000} />}
        <div className='titleSection'>
            <h>{t('Data_of_Agents')}</h>

        </div>

       <form>
        <div className='TwoColForm'>
            <div className='leftSide'>
                <div className='d-flex inputFlex'>
                    <label htmlFor='AgentCode' className='label-of-form twolbl'><b>{t('Agent_Code')} </b></label>
                    <input  ref={inputRef} onChange={handelOnchangeAgentCode} value={AgentCode} type='number' required id="AgentCode" name="AgentCode" className='txtStyleTWO txt' placeholder={placeValue} />
                </div>
                <div className='d-flex inputFlex'>
                    <label htmlFor='AgentName' className='label-of-form twolbl'><b>{t('Agent_Name')}</b></label>
                    <input value={AgentName} onChange={handelOnchangeAgentName} type='text'required id="AgentName" name="AgentName" className='txtStyleTWO txt' placeholder={requiredplace}/>
                </div>
                <div className='d-flex inputFlex'>
                    <label htmlFor='Address' className='label-of-form twolbl'><b>{t('Address')}</b></label>
                    <input value={Address} onChange={handelOnchangeAddress} type='text' required id="Address" name="Address" className='txtStyleTWO txt'  placeholder={requiredplace}/>
                </div>
                <div className='d-flex inputFlex'>
                    <label htmlFor='PhoneNo' className='label-of-form twolbl'><b>{t('Phone')}</b></label>
                    <input value={Phone} onChange={handelOnchangePhone} type='text' required id="PhoneNo" name="PhoneNo" className='txtStyleTWO txt'  placeholder={requiredplace}/>
                </div>
                <div className='d-flex inputFlex'>
                    <label htmlFor='Email' className='label-of-form twolbl'><b>{t('E_mail')}</b></label>
                    <input value={Email} onChange={handelOnchangeEmail} type='text' required id="Email" name="Email" className='txtStyleTWO txt'   placeholder={requiredplace}/>
                </div>
            </div>
            <div className='rightSide'>
                <div className='d-flex inputFlex'>
                    <label htmlFor='PermNo' className='label-of-form twolbl'><b>{t('Permission_No')}</b></label>
                    <input value={PermNo} type='text' onChange={handelOnchangePermNo} required id="PermNo" name="PermNo" className='txtStyleTWO txt' placeholder={requiredplace}/>
                </div>
                <div className='d-flex inputFlex'>
                    <label htmlFor='PermDate' className='label-of-form twolbl'><b>{t('Permission_Date')}</b></label>
                    <input value={PermDate} type="datetime-local" onChange={handelOnchangePermDate} required id="PermDate" name="PermDate" className='txtStyleTWO txt'  placeholder={requiredplace}/>
                </div>

                <div className='d-flex inputFlex'>
                    <label htmlFor='PermExp' className='label-of-form twolbl'><b> {t('Permission_Exp_Date')}</b></label>
                    <input value={PermExpDate} type="datetime-local" onChange={handelOnchangeDateExp} required id="PermExp" name="PermExp" className='txtStyleTWO'  placeholder={requiredplace} />
                </div>
                <div className='d-flex inputFlex'>
                    <label htmlFor='Notes' className='lblTXTa label-of-form twolblN'><b>{t('Notes')}&nbsp;</b></label>
                    <textarea value={Notes} name="Notes" onChange={handelOnchangeNotes} className='txtAStyleTwo'  placeholder={Optional}></textarea>
                </div>
            </div>
        </div>
        <div className='btnBar'>
                     <button type='button' className='btnSrchA' onClick={ ()=>{ clickApi();}}> {t('Search')} </button>
                     <button className='btnSrchA' type='button' onClick={ ()=>{clickAdd();}}> {t('Add')} </button>
                     <button className='btnSrchA' type='button' onClick={ ()=>{ clickDelete();}}> {t('Delete')}  </button>
                     <button className='btnSrchA' type='button' onClick={ ()=>{ clickUpdate();}}> {t('Update')} </button>
            </div>
        </form>
     </div>
    )
}
export default AgentData;
