import React, { useState ,useEffect } from 'react'
import useFetch from '../hooks/useFetch';
import HighestNORLimitsGraph from '../apis/HighestNORlimit.js';
import HighestNORSnoLimitsGraph from '../apis/HighestNORSnoLimits';
import { Bar } from 'react-chartjs-2';
import { useTranslation } from 'react-i18next';
import moment from 'moment';
import useAxiosFunction from '../hooks/useAxiosFunction';

const RecurringDate = () => {
    const { t } = useTranslation();
    const currentDate = moment();
    const lastYear = currentDate.subtract(1, 'years');
    const lastYearValue = lastYear.year();
    const [dataFetch, error, loading] = useFetch({
        axiosInstance: HighestNORSnoLimitsGraph,
        method :'GET',
        url:'',
        requestConfig :{}
      });

    const [dataChart ,setDataChart] = useState({
        labels: [],
        datasets:[{
          label: "",
          data: [],
          backgroundColor:["#54bebe", "#76c8c8", "#98d1d1", "#badbdb", "#dedad2", "#e4bcad", "#df979e", "#d7658b", "#c80064" ,"#337280"]
        }]
      });

      useEffect(() => {
        if (dataFetch) {
          setDataChart({
            labels: dataFetch.map((datas)=> datas.Ship_Name),
            datasets: [{
              label: "",
              data: dataFetch.map((datas) => datas.Arrival_Count),
              backgroundColor: ["#54bebe", "#76c8c8", "#98d1d1", "#badbdb", "#dedad2", "#e4bcad", "#df979e", "#d7658b", "#c80064" ,"#337280"]
            }]
          });
        }
      }, [dataFetch]);

      const [reponse,errortwo , loadingtwo ,axiosFetch] = useAxiosFunction();
const clickAdd = ()=>{
  axiosFetch({
  axiosInstance: HighestNORLimitsGraph,
  method :'GET',
  url:`?date=${RecurringDate}&limit=${limitpass}&`,
  requestConfig :{}
 })
 setDataChart({
    labels: reponse.map((datas)=>datas.Ship_Name),
    datasets:[{
        labels: "",
        data:reponse.map((datas)=>datas.Arrival_Count),
        backgroundColor:["#54bebe", "#76c8c8", "#98d1d1", "#badbdb", "#dedad2", "#e4bcad", "#df979e", "#d7658b", "#c80064" ,"#337280"]

    }]
  })
}

const handelOnchangeDate=(e)=>{
  setRecurringDate(e.target.value);
    console.log(RecurringDate);
    }

      const [RecurringDate , setRecurringDate]= useState("2022-12-01");
      const [limitpass , setlimitPass]= useState(50);



  return (
    <>
    <div className='ChartMain'>
    <Bar data={dataChart} />
    </div>
    <div className="inputdashWrapper search-flex hnor-search">


    <div className='DateWrapper'>
        <input type="date"
        className='DateDash'
        value={RecurringDate}
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

export default RecurringDate;
