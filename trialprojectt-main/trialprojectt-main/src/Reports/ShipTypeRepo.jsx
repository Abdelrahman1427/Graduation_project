

import React, { useEffect, useState, useRef } from 'react';
import DataTable from "react-data-table-component"
import '../css/TableReport.css'
import ReactToPrint from 'react-to-print';
import { useReactToPrint } from 'react-to-print';
import useFetch from '../hooks/useFetch'
import axios from '../apis/ShipTypesSearch';
import { useTranslation } from 'react-i18next';
const ShipTypeRepo =()=>{


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
            name: t('Ship_Type_Code'),
            id:"code",
            selector: (row) => row.Type_Code //hn8yaro m3 eldata field
        },

        {
            name: t('Ship_Type'),
            id:"name",
            selector: (row) => row.Ship_type_nm //hn8yaro m3 eldata field
        }
    ]

    const ComponentRef = useRef();

    const HandlePrint = useReactToPrint({
        content: () => ComponentRef.current,
        documentTitle:"ship-types-data-report",
    });

    return (
        <div className='reportContainer'>
    <div className='WholeRepo'  ref={ComponentRef}>
        <div>
            <h1>
            {t('Ship_Types_Data')}<br />
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

export default ShipTypeRepo;