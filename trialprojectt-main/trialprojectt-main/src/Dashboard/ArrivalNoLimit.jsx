import React, { useState , useEffect } from 'react'
import useFetch from '../hooks/useFetch';
import ArrivalNoLimitGraph from '../apis/ArrivalNoLimitGraph';
import { Bar } from 'react-chartjs-2';


const ArrivalNoLimit = () => {
    const [dataFetch, error, loading] = useFetch({
        axiosInstance: ArrivalNoLimitGraph,
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
            labels: dataFetch.map((datas)=> datas.Port_of_Departure),
            datasets: [{
              label: "",
              data: dataFetch.map((datas) => datas.Arriving_Count),
              backgroundColor: ["#54bebe", "#76c8c8", "#98d1d1", "#badbdb", "#dedad2", "#e4bcad", "#df979e", "#d7658b", "#c80064" ,"#337280"]
            }]
          });
        }
      }, [dataFetch]);


  return (
    <div className='ChartMain bar-issue'>
    <Bar data={dataChart} />
    </div>
  )
}

export default ArrivalNoLimit;
