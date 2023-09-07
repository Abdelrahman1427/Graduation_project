import React, { useEffect, useState, useRef } from 'react';
import DataTable from "react-data-table-component";
import '../css/TableReport.css';
import useFetch from '../hooks/useFetch';
import axios from '../apis/countriesSearch';
import ReactToPrint from 'react-to-print';
import { useReactToPrint } from 'react-to-print';
import { useTranslation } from 'react-i18next';

const CountriesRepo =()=>{

    const { t } = useTranslation();

    const [data, error, loading ] = useFetch({
        axiosInstance: axios,
        method :'GET',
        url:'/',
        requestConfig :{}
      });



    const columns = [

        {
            name: t('Country_Code'),
            id:"code",
            selector: (row) => row.Country_Code //hn8yaro m3 eldata field
        },

        {
            name:t('Country_Name'),
            id:"name",
            selector: (row) => row.Country_Name //hn8yaro m3 eldata field
        }
    ]



    const ComponentRef = useRef();

    const HandlePrint = useReactToPrint({
        content: () => ComponentRef.current,
        documentTitle:"countries-data-report",
    });

    return (
        <div className='reportContainer'>
    <div className='WholeRepo' ref={ComponentRef}>

        <div>
            <h1>
            {t('Country_Data')} <br/>
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

export default CountriesRepo;