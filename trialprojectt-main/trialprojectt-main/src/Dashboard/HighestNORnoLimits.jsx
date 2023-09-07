import React, { useState } from 'react'
import useFetch from '../hooks/useFetch';
import HighestNORSnoLimitsGraph from '../apis/HighestNORSnoLimits';
import { Bar } from 'react-chartjs-2';


const HighestNORnoLimits = () => {
    const [dataFetch, error, loading] = useFetch({
        axiosInstance: HighestNORSnoLimitsGraph,
        method :'GET',
        url:'',
        requestConfig :{}
      });
      const dataChart ={
        labels: dataFetch.map((datas)=>datas.Ship_Name),
        datasets:[{
            labels: "",
            data:dataFetch.map((datas)=>datas.Arrival_Count),
            backgroundColor:["#54bebe", "#76c8c8", "#98d1d1", "#badbdb", "#dedad2", "#e4bcad", "#df979e", "#d7658b", "#c80064" ,"#337280"]

        }]
      }



  return (
    <div className='ChartMain'>
    <Bar data={dataChart} />
    </div>
  )
}

export default HighestNORnoLimits;
