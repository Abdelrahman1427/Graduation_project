
import React, { useEffect, useState, useRef } from 'react';
import DataTable from "react-data-table-component";
import '../css/TableReport.css';
import ReactToPrint from 'react-to-print';
import { useReactToPrint } from 'react-to-print';
import useFetch from '../hooks/useFetch'
import axios from '../apis/logsapi';
import { useTranslation } from 'react-i18next';


const Logs = () => {
    const { t } = useTranslation();

    const [data, error, loading] = useFetch({
      axiosInstance: axios,
      method: 'GET',
      url: '/',
      requestConfig: {}
    });

    const columns = [
      {
        name: t('Employee_Name'),
        id: 'code',
        selector: (row) => row.name //hn8yaro m3 eldata field
      },
      {
        name: t('date_Change'),
        id: 'Aname',
        selector: (row) => row.log_date //hn8yaro m3 eldata field
      },
      {
        name: t('Changes'),
        id: 'name',
        selector: (row) => row.message //hn8yaro m3 eldata field
      }
    ];

    const sortedData = [...data].sort((a, b) => {
      // Compare the log_date fields in descending order
      return new Date(b.log_date) - new Date(a.log_date);
    });

    const ComponentRef = useRef();

    const HandlePrint = useReactToPrint({
      content: () => ComponentRef.current,
      documentTitle: 'Changes-data-report'
    });

    return (
      <div className='reportContainer-logs'>
        <div className='WholeRepo' ref={ComponentRef}>
          <div>
            <h1>
              {t('logs')}
            </h1>
          </div>
          <div className='wholeTable'>
            <DataTable columns={columns} data={sortedData} progressPending={loading} pagination />
          </div>
        </div>
      </div>
    );
  };

  export default Logs;
