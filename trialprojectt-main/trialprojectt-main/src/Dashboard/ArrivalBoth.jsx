import React, { useState ,useEffect } from 'react'
import useFetch from '../hooks/useFetch';
import ArrivingGraphLimit from '../apis/ArrivingGraphLimit';
import ArrivalNoLimitGraph from '../apis/ArrivalNoLimitGraph';
import { Line } from 'react-chartjs-2';

import { useTranslation } from 'react-i18next';
import moment from 'moment';
import useAxiosFunction from '../hooks/useAxiosFunction';

const ArrivalBoth = () => {
    const { t } = useTranslation();
    const currentDate = moment();
    const lastYear = currentDate.subtract(1, 'years');
    const lastYearValue = lastYear.year();
    const [dataFetch, error, loading] = useFetch({
        axiosInstance: ArrivalNoLimitGraph,
        method :'GET',
        url:'',
        requestConfig :{}
      });

    const [dataChart ,setDataChart] = useState({
        labels: [],
        datasets:[{
          label: "Arrivals",
          data: [],
          backgroundColor:["#54bebe", "#76c8c8", "#98d1d1", "#badbdb", "#dedad2", "#e4bcad", "#df979e", "#d7658b", "#c80064" ,"#337280"]
        }]
      });

      useEffect(() => {
        if (dataFetch) {
          setDataChart({
            labels: dataFetch.map((datas)=> datas.Port_of_Departure),
            datasets: [{
              label: "Arrivals",
              data: dataFetch.map((datas) => datas.Arriving_Count),
              borderColor: 'rgb(30, 104, 233)',
              backgroundColor: ["#54bebe", "#76c8c8", "#98d1d1", "#badbdb", "#dedad2", "#e4bcad", "#df979e", "#d7658b", "#c80064" ,"#337280"]
            }]
          });
        }
      }, [dataFetch]);

      const [reponse,errortwo , loadingtwo ,axiosFetch] = useAxiosFunction();
const clickAdd = ()=>{
  axiosFetch({
  axiosInstance: ArrivingGraphLimit,
  method :'GET',
  url:`?date=${dateArrivalRa}&limit=${limitpass}&`,
  requestConfig :{}
 })
 setDataChart({
    labels: reponse.map((datas)=>datas.Port_of_Departure),
    datasets:[{
        labels: "Arrivals",
        data:reponse.map((datas)=>datas.Arriving_Count),
        borderColor: 'rgb(30, 104, 233)',
        backgroundColor:["#54bebe", "#76c8c8", "#98d1d1", "#badbdb", "#dedad2", "#e4bcad", "#df979e", "#d7658b", "#c80064" ,"#337280"]

    }]
  })
}

const handelOnchangeDate=(e)=>{
    setdateArrivalR(e.target.value);
    console.log(dateArrivalRa);
    }
    const handelOnchangeLimit=(e)=>{
        setlimitPass(e.target.value);
        }


      const [dateArrivalRa , setdateArrivalR]= useState("2022-12-01");
      const [limitpass , setlimitPass]= useState(10);



  return (
    <>
    <div className='ChartMain arrivalbothchart'>
    <Line data={dataChart} />
    </div>
    <div className="inputdashWrapper search-flex arrivingdatesearch">

    <div className='DateWrapper'>
        <input type="date"
        className='DateDash'
        value={dateArrivalRa}
            onChange={handelOnchangeDate}
        />
      </div>

<div className="limit">
<input type='number'
value={limitpass}
className='limitClass'
placeholder={t('Limit')}
onChange={handelOnchangeLimit}
 />
  </div>
 <div className="goBtn">
    <button onClick={ ()=>{ clickAdd();}}>{t('Go')}</button>
 </div>
</div>
</>
  )
}

export default ArrivalBoth;
