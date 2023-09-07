import React, { useEffect, useState, useRef } from 'react';
import '../css/MainDataRepo.css';
import ReactToPrint from 'react-to-print';
import { useReactToPrint } from 'react-to-print';
import useFetch from '../hooks/useFetch';
import { useLocation } from 'react-router-dom';
import axios from '../apis/dataShips.js';
import { useTranslation } from 'react-i18next';

const MainDataShipsRepo = () => {
    const { t } = useTranslation();
    const location = useLocation();
    const imoSearch = location.state?.imoSearch;
    console.log(imoSearch);
    const [IMO, setIMO]= useState('');
    const [Callsign, setCallsign]= useState('');
    const [ShipName, setShipName]= useState('');
    const [Flag, setFlag]= useState('');
    const [Type, setType]= useState('');
    const [GrossTon, setGrossTon]= useState('');
    const [Draft, setDraft]= useState('');
    const [Length, setLegnth]= useState('');
    const [Width, setWidth]= useState('');
    const [Notes, setNotes]= useState('');

    const inputRef=useRef(null);

    console.log(`hwa da el imo ${imoSearch}`)

    const [data, error, loading] = useFetch({
        axiosInstance: axios,
        method :'GET',
        url:'/',
        requestConfig :{}
      });
      var arr =data;


        useEffect(()=>{
                arr.map((datas)=>{
                if(imoSearch == datas.IMO)
                {
                console.log(`Search Value: ${datas.IMO}`)
                setCallsign(datas.Call_sign);
                setShipName(datas.Ship_Name);
                setFlag(datas.Country_Name);
                setType(datas.Ship_Type_Code);
                setGrossTon(datas.Gross_Ton);
                setDraft(datas.Draft);
                setLegnth(datas.Length);
                setWidth(datas.Width);
                setNotes(datas.notes);
                }

                  })
                console.log(`hwa da el click ${arr}`)
        },[data])


        const handelOnchangeIMO =(e)=>{
            setIMO(e.target.value);
            }
        const handelOnchangeCallSign =(e)=>{
            setCallsign(e.target.value);
            }
        const handelOnchangeShipName =(e)=>{
            setShipName(e.target.value);
            }
        const handelOnchangeFlag =(e)=>{
            setFlag(e.target.value);
            }
        const handelOnchangeType =(e)=>{
            setType(e.target.value);
            }
        const handelOnchangeGrossTon =(e)=>{
            setGrossTon(e.target.value);
            }
        const handelOnchangeDraft =(e)=>{
            setDraft(e.target.value);
            }
        const handelOnchangeLength =(e)=>{
            setLegnth(e.target.value);
            }
        const handelOnchangeWidth =(e)=>{
            setWidth(e.target.value);
            }
        const handelOnchangeNotes =(e)=>{
            setNotes(e.target.value);
            }



    const handleSub = (e)=>{
        // so the page won't reload and we don't lose our current state
    e.preventDefault();
    }
    /* Code el fetch b2a */

    const ComponentRef = useRef();

    const HandlePrint = useReactToPrint({
        content: () => ComponentRef.current,
        documentTitle:"Main-data-of-ships-report",
    });

    return(
        <div className='RepPage' ref={ComponentRef}>
            <div className='side-img'></div>
            <div>
            <div className='RepoTitle'>
                <h1>{t('Main_Sh_Data')}<br/>
                {t('Report')}</h1>
            </div>
            <form onSubmit={handleSub}  className='RepoBody' >
            <div className='elmnt'>
                    <label className="labelSt" htmlFor='imo'> IMO </label>
                    <input type="text" name="imo" id='imo' className='txtSt'  value={IMO}/>
            </div>

            <div className='elmnt'>
                    <label className="labelSt" htmlFor='call_sign'> {t('Call_Sign')} </label>
                    <input type="text" name="call_sign" id='call_sign' className='txtSt' value={Callsign}/>
            </div>

            <div className='elmnt'>
                    <label className="labelSt" htmlFor='ship_name'> {t('Ship_Name')} </label>
                    <input type="text" name="ship_name" id='ship_name' className='txtSt' value={ShipName} />
            </div>

            <div className='elmnt'>
                    <label className="labelSt" htmlFor='ship_flag'>{t('Country_Flag_of_the_Ship')}</label>
                    <input type="text" name="ship_flag" id='ship_flag' className='txtSt'value={Flag}/>
            </div>

            <div className='elmnt'>
                    <label className="labelSt" htmlFor='ship_type'> {t('Ship_Type')}</label>
                    <input type="text" name="ship_type" id='ship_type' className='txtSt'value={Type}/>
            </div>

            <div className='elmnt'>
                <div className='unitelem'>
                    <label className="labelSt" htmlFor='gross_ton'>{t('Gross_Ton')}</label>
                    <input type="text" name="gross_ton" id='gross_ton' className='txtSt txtun' value={GrossTon}/>
                </div>
                <div><label type='text' className='unitlbl Tonlbl'>{t('Tons')}</label></div>
            </div>

            <div className='elmnt'>
                <div className='unitelem'>
                    <label className="labelSt" htmlFor='draft'> {t('Draft')} </label>
                    <input type="text" name="draft" id='draft' className='txtSt txtun'  value={Draft}/>
                </div>
                <div><label type='text' className='unitlbl'>{t('Meters')} </label></div>
            </div>

            <div className='elmnt'>
                <div className='unitelem'>
                    <label className="labelSt" htmlFor='ship_length'>  {t('Ship_Length')}</label>
                    <input type="text" name="ship_length" id='ship_length' className='txtSt txtun'value={Length}/>
                </div>
                <div><label type='text' className='unitlbl'>{t('Meters')} </label></div>
            </div>

            <div className='elmnt'>
              <div className='unitelem'>
                    <label className="labelSt" htmlFor='ship_width'> {t('Ship_Width')}</label>
                    <input type="text" name="ship_width" id='ship_width' className='txtSt txtun' value={Width}/>
              </div>
              <div><label type='text' className='unitlbl'>{t('Meters')} </label></div>
            </div>

              <div className='elmnt'>
                    <label className="labelSt" htmlFor='notes'> {t('Notes')} </label>
                    <input id="notes" name="notes" className='txtSt' value={Notes}></input>
              </div>
              </form>
              <div className='WhitbtnP'><button onClick={HandlePrint} className='printbtnwhite'>{t('Print')}</button></div>
            </div>
        </div>
    );
}
export default MainDataShipsRepo;