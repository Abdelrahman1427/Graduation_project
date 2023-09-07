import { useState , useEffect } from "react";
import React from 'react'


const useAxiosEmp = () => {



const [reponse , setResponse] = useState([]);
const [error , setError] = useState('');
const [loading , setLoading] = useState(false);
const [controller ,setController] = useState();


const axiosFetch = async(configObj) =>{
    const {
        axiosInstance,
        method,
        url,
        requestConfig = {}
    } = configObj;
    try{
        setLoading(true);
        const ctrl = new AbortController();
        setController(ctrl);
        const res = await axiosInstance[method.toLowerCase()]( url,{
        ...requestConfig,
        signal:ctrl.signal
        });
        setResponse(res.data.getemp);
         console.log(res.data.getemp);

        }catch(err){
        setError(err);
        console.log(err)
        }
        finally {
        setLoading(false);
        }
}


   useEffect(()=>
   {
      //useEffect clean up
   return()=> controller&& controller.abort();


   },[controller])
    //console.log("da el response",reponse);
    return [ reponse ,error , loading, axiosFetch ];
}



export default useAxiosEmp