
import React, { useEffect, useState, useRef } from 'react';
import DataTable from "react-data-table-component";
import '../css/TableReport.css';
import ReactToPrint from 'react-to-print';
import { useReactToPrint } from 'react-to-print';
import useFetch from '../hooks/useFetch'
import axios from '../apis/arvShipReport';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';



const DepFreq =()=>{
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
        if(datas.Departure_Date_Actual){
        if(datas.IMO == imoSearch && datas.Departure_Date_Actual.substring(0,datas.Departure_Date_Actual.length-7) >= `${dataSearchStrt}:` && datas.Departure_Date_Actual.substring(0,datas.Departure_Date_Actual.length-7) <= `${dateSearchEnd}:` )
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
        name: "IMO",
        id:"Aname",
        selector: (row) => row.IMO //hn8yaro m3 eldata field
    },

    {
        name: t('ship_Agent'),
        id:"Aname",
        selector: (row) => row.Agent_Name //hn8yaro m3 eldata field
    },

    {
        name: t('Expected_Date_of_Departure'),
        id:"Aname",
        selector: (row) => row.Departure_Date_Plan //hn8yaro m3 eldata field
    }
    ,

    {
        name: t('Actual_date_of_Departure'),
        id:"Aname",
        selector: (row) => row.Departure_Date_Actual //hn8yaro m3 eldata field
    }
    ,

    {
        name: t('Cargo_dep'),
        id:"Aname",
        selector: (row) => row.Cargo_departure //hn8yaro m3 eldata field
    },

    {
        name: t('DestinationPort'),
        id:"Aname",
        selector: (row) => row.Destination_Port //hn8yaro m3 eldata field
    },

    {
        name:  t('Mari_safety'),
        id:"Aname",

        selector: (row) => row.Maritime_Safety //hn8yaro m3 eldata field
    },

    {
        name: t('Police'),
        id:"Aname",
        selector: (row) => row.Police //hn8yaro m3 eldata field
    },
    {
        name: t('Customs_Authority'),
        id:"Aname",
        selector: (row) => row.Customs //hn8yaro m3 eldata field
    },
    {
        name: t('Port_Authority'),
        id:"Aname",
        selector: (row) => row.Port_Authority //hn8yaro m3 eldata field
    },
    {
        name:  t('Berth_depth'),
        id:"name",
        selector: (row) => row.Berth_No_Depth //hn8yaro m3 eldata field
    },

]



    const ComponentRef = useRef();

    const HandlePrint = useReactToPrint({
        content: () => ComponentRef.current,
        documentTitle:"Departing-ship-report",
    });

    return (
        <div className='reportContainer'>
    <div className='WholeRepo' ref={ComponentRef}>

        <div>
            <h1>
                {t('Dep_Frequent')}<br/>
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

export default DepFreq;