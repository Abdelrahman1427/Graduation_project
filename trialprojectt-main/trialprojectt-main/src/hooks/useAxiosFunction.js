import { useState , useEffect } from "react";

const useAxiosFunction = () => {



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
        setResponse(res.data.allentries);
         console.log(res.data.allentries);

        }catch(err){
        setError(err.message);
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
    return [ reponse,error , loading, axiosFetch ];
}



export default useAxiosFunction;