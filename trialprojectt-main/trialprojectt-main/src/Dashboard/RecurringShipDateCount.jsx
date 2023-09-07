import React, { useState ,useEffect } from 'react'
import useFetch from '../hooks/useFetch';
import RecurringShipCount from '../apis/RecurringShipCount.js';
import RecuringDef from '../apis/RecuringDef';
import { useTranslation } from 'react-i18next';
import moment from 'moment';
import useAxiosFunction from '../hooks/useAxiosFunction';

const RecurringCount = () => {
    const { t } = useTranslation();
    const currentDate = moment();
    const lastYear = currentDate.subtract(1, 'years');
    const lastYearValue = lastYear.year();
    const [reponse,errortwo , loadingtwo ,axiosFetch] = useAxiosFunction();

    const [dataFetch, error, loading] = useFetch({
        axiosInstance: RecuringDef,
        method :'GET',
        url:'',
        requestConfig :{}
      });
      useEffect(() => {
        if (dataFetch) {
            dataFetch.map((datas)=> {setCounter(datas.Counter)})
         // setCounter(dataFetch.Counter);
           console.log(`yalahway ${count}`);
        }
      }, [dataFetch]);



    const clickAdd = ()=>{
        axiosFetch({
        axiosInstance: RecurringShipCount,
        method :'GET',
        url:`?fromdate=${fromDate}&todate=${toDate}&name=${name}&limit=${limitpass}`,
        requestConfig :{}
       })

      }

          const handelOnchangeFromDate=(e)=>{
                setfromDate(e.target.value);
              }
          const handelOnchangeToDate=(e)=>{
                settoDate(e.target.value);
              }
          const handelOnchangeName=(e)=>{
                setname(e.target.value);
              }
          const handelOnchangeLimit=(e)=>{
              setlimitPass(e.target.value);
              }

            const [fromDate , setfromDate]= useState("2022-12-01");
            const [toDate , settoDate]= useState("2023-01-01");
            const [name , setname]= useState("CENK S");
            const [limitpass , setlimitPass]= useState(1);
            const [count , setCounter] = useState(0);

            return (
                <>
              <div class="card-zeft">
             <div class="card-zzeft-details">
             <p class="text-zeft-title">{t('count_chart')}</p>
             <div className='DateWrapper'>
                    <input type="date"
                    className='input-name-count date-input'
                    value={fromDate}
                    onChange={handelOnchangeFromDate}
                    />
              </div>
              <div className='DateWrapper'>
                    <input type="date"
                    className='input-name-count date-input'
                    value={toDate}
                    onChange={handelOnchangeToDate}
                    />
              </div>
              <div className='limit'>
                    <input type="text"
                    className='input-name-count'
                    value={name}
                    onChange={handelOnchangeName}
                    />
                </div>
                <div className='Count-of-recurring'>
                    <span className='counter-label'>{count}</span>
                </div>
                </div>
                    <button class="card-button" onClick={ ()=>{clickAdd();}}>{t('Go')}</button>
                </div>
            </>
              )
}
export default RecurringCount;