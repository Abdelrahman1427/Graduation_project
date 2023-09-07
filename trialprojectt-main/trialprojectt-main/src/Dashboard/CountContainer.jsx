import React, { useEffect, useState } from 'react';
import '../cssDashBoard/dashboardContainer.css';
import adminWall from '../imgs/DashboardIcons/admin.png';
import viewWall from '../imgs/DashboardIcons/vision.png';
import empWall from '../imgs/DashboardIcons/owner.png';
import useFetchEmp from '../hooks/useFetchEmp';
import EmpFetch from '../apis/EmpFetch';
import Counts from './Counts';
import { useTranslation } from 'react-i18next';
import moment from 'moment';
import axios from 'axios';
import TimeCard from './TimeCard';

const CountContainer = () => {
  const { t } = useTranslation();
  const [countAdmin, setCountAdmin] = useState(0);
  const [countEmployee, setCountEmployee] = useState(0);
  const [date, setDate] = useState(moment().format('MMMM Do YYYY, h:mm:ss a'));

  const [data, error, loading] = useFetchEmp({
    axiosInstance: EmpFetch,
    method: 'GET',
    url: '/',
    requestConfig: {},
  });

  useEffect(() => {
    let adminCount = 0;
    let employeeCount = 0;

    data.forEach((datas) => {
      if (datas.Role === 'admin') {
        adminCount += 1;
      } else if (datas.Role === 'other') {
        employeeCount += 1;
      }
    });

    setCountAdmin(adminCount);
    setCountEmployee(employeeCount);
  }, [data]);

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(moment().format('h:mm:ss A'));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <Counts text={t('NumberEmp')} Images={empWall} counts={countEmployee} />
      <Counts text={t('NumberAdmin')} Images={adminWall} counts={countAdmin} />
      <TimeCard Images={viewWall} counts={date} />
    </>
  );
};

export default CountContainer;
