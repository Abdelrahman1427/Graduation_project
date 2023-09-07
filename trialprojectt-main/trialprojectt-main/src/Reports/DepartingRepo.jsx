import  { useEffect, useState, useRef } from 'react';
import '../css/DepartingRepo.css';
import ReactToPrint from 'react-to-print';
import { useReactToPrint } from 'react-to-print';
import useFetch from '../hooks/useFetch';
import { useLocation } from 'react-router-dom';
import axios from '../apis/departingSearch.js';
import moment from 'moment/moment';
import { useTranslation } from 'react-i18next';
import React from 'react';

const DepartingRepo = () => {
    const { t } = useTranslation();
    const location = useLocation();
    const imoSearch = location.state?.imoSearch;
    const dateSearch = location.state?.dateSearch;
    console.log(imoSearch);
    const [voyage ,setVoyage] = useState("");
    const [ExpDate ,setExDate] = useState("");
    const [ActualDepart ,setActualDepartl] = useState("");
    const [shipCrago ,setShipCrago] = useState("");
    const [Departure_Berth ,setDepartureBerth] = useState("");
    const [Destination_Port ,setDestinationPort] = useState("");
    const [shipAgent ,setShipAgent] = useState("");
    const [note ,setNotes] = useState("");
    const [Egyptian_Health_and_Safety_Department ,setEgyptian_Health_and_Safety_Department] = useState("");
    const [Port_Authority ,setPort_Authority] = useState("");
    const [Customs_Authority ,setCustoms_Authority] = useState("");
    const [Police ,setPolice] = useState("");
    const [imoInput ,setImo] = useState("");

    const inputRef=useRef(null);

    console.log(`hwa da el imo ${imoSearch}`)
    console.log(`hwa da el dateablsearch ${dateSearch}`)


    const [data, error, loading] = useFetch({
        axiosInstance: axios,
        method :'GET',
        url:'/',
        requestConfig :{}
      });
      var arr =data;

        useEffect(()=>{
                arr.map((datas)=>{

                    //  console.log(`hwa da el date ${date}`)
                     console.log(`${dateSearch}:`)
                if(imoSearch == datas.IMO &&  datas.Departure_Date_Actual.substring(0,datas.Departure_Date_Actual.length-7) == `${dateSearch}:` )
                {

                    console.log("ana matet")
                    console.log(`hwa da el searchvalue ${datas.IMO}`)
                    setImo(datas.IMO)
                    setVoyage(datas.Voyage_No);
                    var date = new Date(datas.Departure_Date_Plan)
                    setExDate(moment(date).format("YYYY-MM-DD:mm"))
                    date = new Date(datas.Departure_Date_Actual)
                    setActualDepartl(moment(date).format("YYYY-MM-DD:mm"))
                    setShipCrago(datas.cargo_capacity)
                    setDepartureBerth(datas.Berth_No_Depth)
                    setDestinationPort(datas.Destination_Port)
                    setShipAgent(datas.Agent_Name)
                    setNotes(datas.Cargo_departure)
                    if(datas.Maritime_Safety ==0){setEgyptian_Health_and_Safety_Department('Not Approved')}
                    else
                    {setEgyptian_Health_and_Safety_Department('Approved')}


                    if(datas.Port_Authority == 0){setPort_Authority('Not Approved')}
                    else{setPort_Authority('Approved')}


                    if(datas.Customs == 0){setCustoms_Authority('Not Approved')}
                    else{setCustoms_Authority('Approved')}


                    if(datas.Police == 0){setPolice('Not Approved')}
                 else{setPolice('Approved')}
                }

                  })

        },[data])





    const handleSub = (e)=>{
        // so the page won't reload and we don't lose our current state
    e.preventDefault();
    }
    /* Code el fetch b2a */

    const ComponentRef = useRef();

    const HandlePrint = useReactToPrint({
        content: () => ComponentRef.current,
        documentTitle:"Departing-ships-report",
    });

    return(
        <div className='report-page' ref={ComponentRef}>
            <div className='side-img'></div>
            <div>
            <div className='report-title'>
                <h1>{t('Ship_Dep')}<br/>
                {t('Report')}</h1>
            </div>
            <form onSubmit={handleSub}  className='report-body' >
            <div className='report-element'>
                    <label className="label-report" htmlFor='imo'> IMO </label>
                    <input type="text" name="imo" id='imo' className='txt-report' value={imoInput}/>
            </div>

            <div className='report-element'>
                    <label className="label-report" htmlFor='Voyage_Number'> {t('Voyage_Number')} </label>
                    <input type="text" name="Voyage_Number" id='Voyage_Number' className='txt-report' value={voyage}/>
            </div>

            <div className='report-element'>
                    <label className="label-report" htmlFor='Expected_Date_of_Departure'> {t('Expected_Date_of_Departure')} </label>
                    <input type="text" name="Expected_Date_of_Departure" id='Expected_Date_of_Departure' className='txt-report' value={ExpDate} />
            </div>

            <div className='report-element'>
                    <label className="label-report" htmlFor='Actual_date_of_Departure'> {t('Actual_date_of_Departure')} </label>
                    <input type="text" name="Actual_date_of_Departure" id='Actual_date_of_Departure' className='txt-report'value={ActualDepart}/>
            </div>

            <div className='report-element'>
                    <label className="label-report" htmlFor='Ships_Cargo_Upon_Departure'> {t('Ships_Cargo_Upon_Departure')}</label>
                    <input type="text" name="Ships_Cargo_Upon_Departure" id='Ships_Cargo_Upon_Departure' className='txt-report'value={shipCrago}/>
            </div>

            <div className='report-element'>
                    <label className="label-report" htmlFor='Departure_Berth'> {t('Departure_Berth')}</label>
                    <input type="text" name="Departure_Berth" id='Departure_Berth' className='txt-report txtun' value={Departure_Berth}/>
            </div>

            <div className='report-element'>
                    <label className="label-report" htmlFor='Ships_Cargo_upon_Arrival'> {t('Destination_Port')} </label>
                    <input type="text" name="Ships_Cargo_upon_Arrival" id='Ships_Cargo_upon_Arrival' className='txt-report txtun'  value={Destination_Port}/>
            </div>

            <div className='report-element'>
                    <label className="label-report" htmlFor='Operation_Type'> {t('ship_Agent')}</label>
                    <input type="text" name="Operation_Type" id='Operation_Type' className='txt-report txtun'value={shipAgent}/>
            </div>

            <div className='report-element'>
                    <label className="label-report" htmlFor='Egyptian_Health_and_Safety_Department'> {t('Egyptian_Health_and_Safety_Department')}</label>
                    <input type="text" name="Egyptian_Health_and_Safety_Department" id='Egyptian_Health_and_Safety_Department' className='txt-report txtun'value={Egyptian_Health_and_Safety_Department}/>
            </div>


            <div className='report-element'>
                    <label className="label-report" htmlFor='Port_Authority'> {t('Port_Authority')}</label>
                    <input type="text" name="Port_Authority" id='Port_Authority' className='txt-report txtun'value={Port_Authority}/>

            </div>

            <div className='report-element'>

                    <label className="label-report" htmlFor='Operation_Type'> {t('Customs_Authority')}</label>
                    <input type="text" name="Customs_Authority" id='Customs_Authority' className='txt-report txtun'value={Customs_Authority}/>


            </div>

            <div className='report-element'>

                    <label className="label-report" htmlFor='Police'> {t('Police')}</label>
                    <input type="text" name="Police" id='Police' className='txt-report txtun'value={Police}/>


            </div>

              <div className='report-element'>
                    <label className="label-report" htmlFor='notes'> {t('Notes')} </label>
                    <input id="notes" name="notes" className='txt-report' value={note}></input>
              </div>
              </form>
              <div className='report-print-button'><button onClick={HandlePrint} className='print-btn'>{t('Print')}</button></div>
            </div>
        </div>
    );
}
export default DepartingRepo;