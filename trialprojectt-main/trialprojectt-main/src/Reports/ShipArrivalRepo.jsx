import  { useEffect, useState, useRef } from 'react';
import '../css/DepartingRepo.css';
import ReactToPrint from 'react-to-print';
import { useReactToPrint } from 'react-to-print';
import useFetch from '../hooks/useFetch';
import { useLocation } from 'react-router-dom';
import axios from '../apis/arvShipReport';
import moment from 'moment/moment';
import { useTranslation } from 'react-i18next';

const ShipArrivalRepo = () => {
    const { t } = useTranslation();
    const location = useLocation();
    const imoSearch = location.state?.imoSearch;
    const dateSearch = location.state?.dateSearch;
    console.log(imoSearch);
    const [voyage ,setVoyage] = useState();
    const [imo ,setImo] = useState();
    const [ExpDate ,setExDate] = useState();
    const [ActualArrival ,setActualArrival] = useState();
    const [MorDate ,setMoreDate] = useState();
    const [berth ,setBerth] = useState();
    const [cargo ,setCargo] = useState();
    const [operation ,setOperation] = useState();
    const [portComing ,setPortComing] = useState();
    const [shipAgent ,setShipAgent] = useState();
    const [note ,setNotes] = useState();

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
                if(imoSearch == datas.IMO &&  datas.Arrival_Date_Actual.substring(0,datas.Arrival_Date_Actual.length-7) == `${dateSearch}:` )
                {

                    console.log("ana matet")
                    console.log(`hwa da el searchvalue ${datas.IMO}`)
                    setImo(datas.IMO)
                     setVoyage(datas.Voyage_No);

                     setExDate(moment(date).format("YYYY-MM-DD:mm"))

                   var  dates = new Date(datas.Arrival_Date_Actual)
                     setActualArrival(moment(dates).format("YYYY-MM-DD:mm"))
                    var date = new Date(datas.Berthing_Date)
                     setMoreDate(moment(date).format("YYYY-MM-DD:mm"))
                     setBerth(datas.Berth_No)
                     setCargo(datas.Cargo_Arrival)
                     setOperation(datas.Op_Code)
                     setPortComing(datas.Port_of_Departure)
                     setShipAgent(datas.Agent_Name)
                     setNotes(datas.Arrival_Note)
                }

                  })
                console.log(`hwa da el click ${arr}`)
        },[data])





    const handleSub = (e)=>{
        // so the page won't reload and we don't lose our current state
    e.preventDefault();
    }
    /* Code el fetch b2a */

    const ComponentRef = useRef();

    const HandlePrint = useReactToPrint({
        content: () => ComponentRef.current,
        documentTitle:"Arrival-ships-report",
    });

    return(
        <div className='report-page' ref={ComponentRef}>
            <div className='side-img'></div>
            <div>
            <div className='report-title'>
                <h1>{t('Ship_Arrival')}<br/>
                {t('Report')}</h1>
            </div>
            <form onSubmit={handleSub}   className='report-body' >
            <div className='report-element'>
                    <label className="label-report" htmlFor='imo'> IMO </label>
                    <input type="text" name="imo" id='imo' className='txt-report'  value={imo}/>
            </div>

            <div className='report-element'>
                    <label className="label-report" htmlFor='Voyage_Number'> {t('Voyage_Number')} </label>
                    <input type="text" name="Voyage_Number" id='Voyage_Number' className='txt-report' value={voyage}/>
            </div>

            <div className='report-element'>
                    <label className="label-report" htmlFor='Expected_date_of_Arrival'> {t('Expected_date_of_Arrival')} </label>
                    <input type="text" name="Expected_date_of_Arrival" id='Expected_date_of_Arrival' className='txt-report' value={ExpDate} />
            </div>

            <div className='report-element'>
                    <label className="label-report" htmlFor='Actual_date_of_Arrival'> {t('Actual_date_of_Arrival')} </label>
                    <input type="text" name="Actual_date_of_Arrival" id='Actual_date_of_Arrival' className='txt-report'value={ActualArrival}/>
            </div>

            <div className='report-element'>
                    <label className="label-report" htmlFor='Mooring_Date'> {t('Mooring_Date')}</label>
                    <input type="text" name="Mooring_Date" id='Mooring_Date' className='txt-report'value={MorDate}/>
            </div>

            <div className='report-element'>
                    <label className="label-report" htmlFor='Arrival_Berth'> {t('Arrival_Berth')}</label>
                    <input type="text" name="Arrival_Berth" id='Arrival_Berth' className='txt-report txtun' value={berth}/>
            </div>

            <div className='report-element'>
                    <label className="label-report" htmlFor='Ships_Cargo_upon_Arrival'> {t('Ships_Cargo_upon_Arrival')} </label>
                    <input type="text" name="Ships_Cargo_upon_Arrival" id='Ships_Cargo_upon_Arrival' className='txt-report txtun'  value={cargo}/>
            </div>

            <div className='report-element'>
                    <label className="label-report" htmlFor='Operation_Type'> {t('Operation_Type')}</label>
                    <input type="text" name="Operation_Type" id='Operation_Type' className='txt-report txtun'value={operation}/>

            </div>

            <div className='report-element'>
                    <label className="label-report" htmlFor='Port_coming_from'> {t('Port_coming_from')}</label>
                    <input type="text" name="Port_coming_from" id='Port_coming_from' className='txt-report txtun' value={portComing}/>
            </div>

            <div className='report-element'>
                    <label className="label-report" htmlFor='ship_Agent'> {t('ship_Agent')}</label>
                    <input type="text" name="ship_Agent" id='ship_Agent' className='txt-report txtun' value={shipAgent}/>
            </div>
            <div className='report-element'>
                    <label className="label-report" htmlFor='notes'>{t('Notes')}</label>
                    <input id="notes" name="notes" className='txt-report' value={note}></input>
              </div>
                    </form>
              <div className='report-print-button'><button onClick={HandlePrint} className='print-btn'>{t('Print')}</button></div>
            </div>
        </div>
    );
}
export default ShipArrivalRepo;