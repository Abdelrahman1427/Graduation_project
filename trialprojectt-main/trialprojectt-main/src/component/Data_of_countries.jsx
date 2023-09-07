import React, { useEffect, useRef, useState } from 'react';
import '../css/form.css';
import { useTranslation } from 'react-i18next';
import useFetch from '../hooks/useFetch';
import axios from '../apis/countriesSearch.js';
import useAxios from '../hooks/useAxiosAdd';
import useAxiosAdd from '../hooks/useAxiosCountries';
import axiosDelete from '../apis/DeleteC.js';
import axiosAdd from '../apis/countriesAdd.js';
import axiosUpdate from '../apis/CountriesUpdate.js';
import MessageServer from './MessageServer';

const CountriesData = () => {
  const [CountryCode, setCCode] = useState('');
  const [CountryName, setCName] = useState('');
  const [responseText, setresponseText] = useState(false);

  const inputRef = useRef(null);
  const [reponse, errortwo, loadingtwo, axiosFetch] = useAxiosAdd();
  const [reponseOne, errorOne, loadingOne, axiosFetchOne] = useAxios();

  const clickApi = () => {
    axiosFetchOne({
      axiosInstance: axios,
      method: 'GET',
      url: '/',
      requestConfig: {},
    });
  };

  useEffect(() => {
    const searchValue = inputRef.current.value.toUpperCase();

    reponseOne.map((datas) => {
      if (searchValue === datas.Country_Code) {
        console.log(`Search Value: ${datas.Country_Code}`);
        setCCode(datas.Country_Code);
        setCName(datas.Country_Name);
      }
      if (searchValue === '') {
        setplaceValue(t('please_Target'));
      }
    });
  }, [reponseOne]);

  const handelOnchangeCCode = (e) => {
    setCCode(e.target.value);
  };
  const handelOnchangeCName = (e) => {
    setCName(e.target.value);
  };

  const clickDelete = () => {
    axiosFetch({
      axiosInstance: axiosDelete,
      method: 'DELETE',
      url: '/',
      requestConfig: {
        data: {
          code: CountryCode,
        },
      },
    });
    setresponseText(true);
    const timer = setTimeout(() => {
      setresponseText(false);
    }, 5000);
    setCCode('');
    setCName('');
  };

  const clickAdd = () => {
    axiosFetch({
      axiosInstance: axiosAdd,
      method: 'POST',
      url: '/',
      requestConfig: {
        code: CountryCode,
        name: CountryName,
      },
    });

       if(reponse )
   {
    setresponseText(true)
   }

   const timer = setTimeout(() => {
    setresponseText(false);
  }, 5000);
    setCCode('');
    setCName('');
  };

  const clickUpdate = (e) => {
    e.preventDefault();
    axiosFetch({
      axiosInstance: axiosUpdate,
      method: 'PUT',
      url: '/',
      requestConfig: {
        code: CountryCode,
        name: CountryName,
      },
    });
    if(reponse )
    {
     setresponseText(true)
    }

    const timer = setTimeout(() => {
     setresponseText(false);
   }, 5000);
    setCCode('');
    setCName('');
  };

  const { t } = useTranslation();
  const [placeValue, setplaceValue] = useState(t('Search_Here'));
  const requiredplace = t('required_place');

  return (
    <div className='wholeform'>
      {responseText && reponse && <MessageServer text={reponse.message} message={responseText} fadeDuration={30000} />}
      {errortwo&& reponse  && <MessageServer text={errortwo.message} message={responseText} fadeDuration={30000} />}
      <div className='titleSection'>
        <h>{t('Data_of_Countries')}</h>
      </div>
      <form className='midForm'>
        <div className='formSection'>
          <div className='d-flex inputFlex'>
            <label htmlFor='CntryCode' className='label-of-form'>
              <b>{t('Country_Code')}</b>
            </label>
            <input
              maxLength='2'
              ref={inputRef}
              value={CountryCode}
              type='text'
              onChange={handelOnchangeCCode}
              required
              id='CntryCode'
              name='CntryCode'
              className='txtStyle'
              placeholder={placeValue}
            />
          </div>
          <div className='d-flex inputFlex'>
            <label htmlFor='CntryName' className='label-of-form'>
              <b> {t('Country_Name')}</b>
            </label>
            <input
              value={CountryName}
              type='text'
              onChange={handelOnchangeCName}
              id='CntryName'
              name='CntryName'
              required
              className='txtStyle'
              placeholder={requiredplace}
            />
          </div>
          <div className='btnBarSoghyr'>
            <button type='button' className='btnSrch' onClick={clickApi}>
              {t('Search')}
            </button>
            <button className='btnSrch' type='button' onClick={clickAdd}>
              {t('Add')}
            </button>
            <button className='btnSrch' type='button' onClick={clickDelete}>
              {t('Delete')}
            </button>
            <button className='btnSrch' type='button' onClick={clickUpdate}>
              {t('Update')}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CountriesData;
