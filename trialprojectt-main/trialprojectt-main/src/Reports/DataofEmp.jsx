import React, { useEffect, useState, useRef } from 'react';
import DataTable from "react-data-table-component";
import '../css/TableReport.css';
import ReactToPrint from 'react-to-print';
import { useReactToPrint } from 'react-to-print';
import useAxiosEmp from '../hooks/useFetchEmp';
import axios from '../apis/EmpFetch';
import { useTranslation } from 'react-i18next';



const DataofEmp =()=>{
    const { t } = useTranslation();
    const [data, error, loading] = useAxiosEmp({
        axiosInstance: axios,
        method :'GET',
        url:'/',
        requestConfig :{}
      });

      const columns = [
        {
            name: t('Employee_Name'),
            id:"code",
            selector: (row) => row.Employee_Name //hn8yaro m3 eldata field
        },

        {
            name: t('Role'),
            id:"Aname",
            selector: (row) => row.Role //hn8yaro m3 eldata field
        },

        {
            name: t('E_mail'),
            id:"Aname",
            selector: (row) => row.Email //hn8yaro m3 eldata field
        }
        ,

        {
            name: t('Phone_Number'),
            id:"name",
            selector: (row) => row.Telephone //hn8yaro m3 eldata field
        }
    ]


    const ComponentRef = useRef();

    const HandlePrint = useReactToPrint({
        content: () => ComponentRef.current,
        documentTitle:"Employee-data-report",
    });


    return (
        <div className='reportContainer'>
    <div className='WholeRepo' ref={ComponentRef}>

        <div>
            <h1>
               {t('Data_of_Employee')}<br/>
                <u>{t('Rep')}</u>{t('ort')}.
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

export default DataofEmp;