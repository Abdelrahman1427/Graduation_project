
import React, { useState,useEffect } from 'react'
import useFetch from '../hooks/useFetch';
import OPlimitDefault from '../apis/OPlimitDefault';
import oplimit from '../apis/oplimit'
import { Pie } from 'react-chartjs-2';
import { useTranslation } from 'react-i18next';
import moment from 'moment';
import useAxiosFunction from '../hooks/useAxiosFunction';

const OpDate = () => {
    const { t } = useTranslation();
    const currentDate = moment();
    const lastYear = currentDate.subtract(1, 'years');
    const lastYearValue = lastYear.year();
    const [dataFetch, error, loading] = useFetch({
        axiosInstance: OPlimitDefault,
        method :'GET',
        url:'/',
        requestConfig :{}
      });

    const [dataChart ,setDataChart] = useState({
        labels: [],
        datasets:[{
          label: "Number of operations",
          data: [],
          backgroundColor:["#54bebe", "#76c8c8", "#98d1d1", "#badbdb", "#dedad2", "#e4bcad", "#df979e", "#d7658b", "#c80064" ,"#337280"]
        }]
      });

      useEffect(() => {
        if (dataFetch) {
          setDataChart({
            labels: dataFetch.map((datas)=> datas.Operation_Name),
            datasets: [{
              label: "Number of operations",
              data: dataFetch.map((datas) => datas.Operation_Count),
              backgroundColor: ["#54bebe", "#76c8c8", "#98d1d1", "#badbdb", "#dedad2", "#e4bcad", "#df979e", "#d7658b", "#c80064" ,"#337280"]
            }]
          });
        }
      }, [dataFetch]);

      const [reponse,errortwo , loadingtwo ,axiosFetch] = useAxiosFunction();
const clickAdd = ()=>{
  axiosFetch({
  axiosInstance: oplimit,
  method :'GET',
  url:`?limit=${limitpass-1}&date=${dateArrivalRa}`,
  requestConfig :{}
 })
 setDataChart({
    labels: reponse.map((datas)=>datas.Operation_Name),
    datasets:[{
        labels: "Number of operations",
        data:reponse.map((datas)=>datas.Operation_Count),
        backgroundColor:["#54bebe", "#76c8c8", "#98d1d1", "#badbdb", "#dedad2", "#e4bcad", "#df979e", "#d7658b", "#c80064" ,"#337280"]

    }]
  })
}
const handelOnchangeDate=(e)=>{
    setdateArrivalR(e.target.value);
    console.log(dateArrivalRa);
    }

      const [dateArrivalRa , setdateArrivalR]= useState("2022-12-01");
      const [limitpass , setlimitPass]= useState(10);

  return (
    <>
    <div className='ChartMain charteltanya'>
    <Pie data={dataChart} />
    </div>
    <div className="inputdashWrapper search-flex">


    <div className='DateWrapper'>
        <input type="date"
        className='DateDash'
        value={dateArrivalRa}
            onChange={handelOnchangeDate}
        />
      </div>

      
 <div className="goBtn">
    <button onClick={ ()=>{ clickAdd();}}>{t('Go')}</button>
 </div>
</div>
</>
  )
}

export default OpDate
