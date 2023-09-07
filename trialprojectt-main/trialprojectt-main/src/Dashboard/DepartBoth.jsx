import React, { useState ,useEffect } from 'react'
import useFetch from '../hooks/useFetch';
import DepartingLimitGraph from '../apis/DepartLimit.js';
import DepartingNoLimitGraph from '../apis/DepartToNoLimit.js';
import { Line } from 'react-chartjs-2';
import { useTranslation } from 'react-i18next';
import moment from 'moment';
import useAxiosFunction from '../hooks/useAxiosFunction';

const DepartBoth = () => {
    const { t } = useTranslation();
    const currentDate = moment();
    const lastYear = currentDate.subtract(1, 'years');
    const lastYearValue = lastYear.year();
    const [dataFetch, error, loading] = useFetch({
        axiosInstance: DepartingNoLimitGraph,
        method :'GET',
        url:'',
        requestConfig :{}
      });

    const [dataChart ,setDataChart] = useState({
        labels: [],
        datasets:[{
          label: "Departures",
          data: [],
          backgroundColor:["#54bebe", "#76c8c8", "#98d1d1", "#badbdb", "#dedad2", "#e4bcad", "#df979e", "#d7658b", "#c80064" ,"#337280"]
        }]
      });

      useEffect(() => {
        if (dataFetch) {
          setDataChart({
            labels: dataFetch.map((datas)=> datas.Destination_Port),
            datasets: [{
              label: "Departures",
              data: dataFetch.map((datas) => datas.Depart_Count),
              borderColor: 'rgb(30, 104, 233)',
              backgroundColor: ["#54bebe", "#76c8c8", "#98d1d1", "#badbdb", "#dedad2", "#e4bcad", "#df979e", "#d7658b", "#c80064" ,"#337280"]
            }]
          });
        }
      }, [dataFetch]);

      const [reponse,errortwo , loadingtwo ,axiosFetch] = useAxiosFunction();
const clickAdd = ()=>{
  axiosFetch({
  axiosInstance: DepartingLimitGraph,
  method :'GET',
  url:`?date=${dateDepart}&limit=${limitpass}&`,
  requestConfig :{}
 })
 setDataChart({
    labels: reponse.map((datas)=>datas.Destination_Port),
    datasets:[{
        labels: "Number of operations",
        data:reponse.map((datas)=>datas.Depart_Count),
        borderColor: 'rgb(30, 104, 233)',
        backgroundColor:["#54bebe", "#76c8c8", "#98d1d1", "#badbdb", "#dedad2", "#e4bcad", "#df979e", "#d7658b", "#c80064" ,"#337280"]

    }]
  })
}

const handelOnchangeDate=(e)=>{
  setDepartingdate(e.target.value);
    console.log(dateDepart);
    }
    const handelOnchangeLimit=(e)=>{
        setlimitPass(e.target.value);
        }


        const [dateDepart , setDepartingdate]= useState("2022-12-01");
        const [limitpass , setlimitPass]= useState(10);



  return (
    <>
    <div className='ChartMain'>
    <Line data={dataChart} />
    </div>
    <div className="inputdashWrapper search-flex depart-search">

    <div className='DateWrapper'>
        <input type="date"
        className='DateDash'
        value={dateDepart}
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

export default DepartBoth;
