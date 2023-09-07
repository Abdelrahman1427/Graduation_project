import React, { useState } from 'react'
import useFetch from '../hooks/useFetch';
import HighestOPNOlimit from '../apis/HighestOPNOlimit';
import { Pie } from 'react-chartjs-2';


const HopNoLimit = () => {
    const [dataFetch, error, loading] = useFetch({
        axiosInstance: HighestOPNOlimit,
        method :'GET',
        url:'/',
        requestConfig :{}
      });
      const dataChart ={
        labels: dataFetch.map((datas)=>datas.Operation_Name),
        datasets:[{
            labels: "Number of operations",
            data:dataFetch.map((datas)=>datas.Operation_Count),
            backgroundColor:["#54bebe", "#76c8c8", "#98d1d1", "#badbdb", "#dedad2", "#e4bcad", "#df979e", "#d7658b", "#c80064" ,"#337280"]

        }]
      }



  return (
    <div className='ChartMain chartelkbeera'>
    <Pie data={dataChart} />
    </div>
  )
}

export default HopNoLimit
