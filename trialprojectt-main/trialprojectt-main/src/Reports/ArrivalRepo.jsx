import React, { useEffect, useState, useRef } from 'react';
import DataTable from "react-data-table-component";
import '../css/TableReport.css';
import useFetch from '../hooks/useFetch';
import axios from '../apis/arvShipReport';
import ReactToPrint from 'react-to-print';
import { useReactToPrint } from 'react-to-print';
import { useTranslation } from 'react-i18next';
const ArrivalRepo =()=>{


    const [data, error, loading ] = useFetch({
        axiosInstance: axios,
        method :'GET',
        url:'/',
        requestConfig :{}
      });


      const { t } = useTranslation();

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
                Data of Arrival<br/>
                <u>Rep</u>ort.
            </h1>
        </div>
        <div className='wholeTable'>
        <DataTable
        columns={columns}
        data={data}
        progressPending={loading}
        pagination
        />
        </div>

    </div>
    <div className='btnP'><button onClick={HandlePrint} className='printbtn'>Print</button></div>
    </div>
    );


}

export default ArrivalRepo;