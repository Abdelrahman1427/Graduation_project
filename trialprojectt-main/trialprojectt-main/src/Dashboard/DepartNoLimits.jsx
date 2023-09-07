
import React, { useState } from 'react'
import useFetch from '../hooks/useFetch';
import DepartingNoLimitGraph from '../apis/DepartToNoLimit.js';
import { Bar } from 'react-chartjs-2';


const DepartingNoLimit = () => {
    const [dataFetch, error, loading] = useFetch({
        axiosInstance: DepartingNoLimitGraph,
        method :'GET',
        url:'',
        requestConfig :{}
      });
      const dataChart ={
        labels: dataFetch.map((datas)=>datas.Destination_Port),
        datasets:[{
            labels: "Departures",
            data:dataFetch.map((datas)=>datas.Depart_Count),
            backgroundColor:["#54bebe", "#76c8c8", "#98d1d1", "#badbdb", "#dedad2", "#e4bcad", "#df979e", "#d7658b", "#c80064" ,"#337280"]

        }]
      }


  return (
    <div className='ChartMain bar-issue'>
    <Bar data={dataChart} />
    </div>
  )
}

export default DepartingNoLimit;
