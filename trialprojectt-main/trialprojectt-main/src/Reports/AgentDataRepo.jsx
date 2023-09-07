import React, { useEffect, useState, useRef } from 'react';
import DataTable from "react-data-table-component";
import '../css/TableReport.css';
import ReactToPrint from 'react-to-print';
import { useReactToPrint } from 'react-to-print';
import useFetch from '../hooks/useFetch'
import axios from '../apis/AgentSearch.js';
import { useTranslation } from 'react-i18next';


const AgentDataRepo =()=>{
    const { t } = useTranslation();

    const [data, error, loading] = useFetch({
        axiosInstance: axios,
        method :'GET',
        url:'/',
        requestConfig :{}
      });
      var arr =data;
      
    const columns = [
        {
            name: t('Agent_Code'),
            id:"code",
            selector: (row) => row.Agent_Code //hn8yaro m3 eldata field
        },

        {
            name: t('Agent_Name'),
            id:"Aname",
            selector: (row) => row.Agent_Name //hn8yaro m3 eldata field
        },

        {
            name: t('Permission_No'),
            id:"permno",
            selector: (row) => row.Perm_No //hn8yaro m3 eldata field
        },

        {
            name: t('Permission_Date'),
            id:"permdate",
            selector: (row) => row.Perm_dt_st //hn8yaro m3 eldata field
        },

        {
            name: t('Permission_Exp_Date'),
            id:"permexp",
            selector: (row) => row.Perm_dt_end //hn8yaro m3 eldata field
        },

    ]


    const ComponentRef = useRef();

    const HandlePrint = useReactToPrint({
        content: () => ComponentRef.current,
        documentTitle:"agent-data-report",
    });

    return (
        <div className='reportContainer'>
    <div className='WholeRepo' ref={ComponentRef}>

        <div>
            <h1>
            {t('Ag_Data')}<br/>
            {t('Report')} 
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
        <div className='btnP'><button onClick={HandlePrint} className='printbtn'>{t('Print')}</button></div>
    </div>

    );


}

export default AgentDataRepo;