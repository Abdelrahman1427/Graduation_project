
import React, { useEffect, useState, useRef } from 'react';
import DataTable from "react-data-table-component";
import '../css/TableReport.css';
import ReactToPrint from 'react-to-print';
import { useReactToPrint } from 'react-to-print';
import useFetch from '../hooks/useFetch'
import axios from '../apis/arvShipReport';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';



const ArrivalFreq =()=>{
    const { t } = useTranslation();

    const location = useLocation();

    const dataSearchStrt = location.state?.dataSearchStrt;
    const dateSearchEnd = location.state?.dateSearchEnd;
    const imoSearch = location.state?.imoSearch;

    const [data, error, loading] = useFetch({
        axiosInstance: axios,
        method :'GET',
        url:'/',
        requestConfig :{}
      });

      var arr =data;
      const [dataNew , setDataNew] = useState([]);
      useEffect(()=>{
        arr.map((datas)=>{

            //  console.log(`hwa da el date ${date}`)
        if(datas.Arrival_Date_Actual){
        if( datas.IMO == imoSearch && datas.Arrival_Date_Actual.substring(0,datas.Arrival_Date_Actual.length-7) >= `${dataSearchStrt}:` && datas.Arrival_Date_Actual.substring(0,datas.Arrival_Date_Actual.length-7) <= `${dateSearchEnd}:` )
        {
            setDataNew(current => [...current, datas])
        }
    }

          })
        console.log(`hwa da el click ${arr}`)
},[data])


const columns = [

    {
        name: t('Voyage_Number'),
        id:"code",
        selector: (row) => row.Voyage_No //hn8yaro m3 eldata field
    },

    {
        name: t('Port_coming_from'),
        id:"Aname",
        selector: (row) => row.Port_of_Departure //hn8yaro m3 eldata field
    },


    {
        name: t('Ships_Cargo_upon_Arrival'),
        id:"Aname",
        selector: (row) => row.Cargo_Arrival //hn8yaro m3 eldata field
    },

    {
        name: t('Mooring_Date'),
        id:"Aname",
        selector: (row) => row.Berthing_Date //hn8yaro m3 eldata field
    },

    {
        name: t('Arrival_Berth'),
        id:"Aname",
        selector: (row) => row.Berth_No //hn8yaro m3 eldata field
    },

    {
        name: t('Expected_date_of_Arrival'),
        id:"Aname",
        selector: (row) => row.Arrival_Date_Plan //hn8yaro m3 eldata field
    }
    ,

    {
        name: t('Actual_date_of_Arrival'),
        id:"Aname",
        selector: (row) => row.Arrival_Date_Actual //hn8yaro m3 eldata field
    }
    ,

    {
        name: t('ship_Agent'),
        id:"Aname",
        selector: (row) => row.Agent_Name //hn8yaro m3 eldata field
    },
    {
        name: t('Operation_No'),
        id:"name",
        selector: (row) => row.Operation_nm //hn8yaro m3 eldata field
    }
]


    const ComponentRef = useRef();

    const HandlePrint = useReactToPrint({
        content: () => ComponentRef.current,
        documentTitle:"Arrival-data-report",
    });

    return (
        <div className='reportContainer'>
    <div className='WholeRepo' ref={ComponentRef}>

        <div>
            <h1>
                 {t('Arrival_Frequent')}<br/>
                {t('Report')}
            </h1>
        </div>
        <div className='wholeTable'>
        <DataTable
        columns={columns}
        data={dataNew}
        progressPending={loading}
        pagination
        />
        </div>
        </div>
        <div className='btnP'><button onClick={HandlePrint} className='printbtn'>{t('Print')}</button></div>
    </div>

    );


}

export default ArrivalFreq;