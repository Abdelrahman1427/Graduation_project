import { useState , useEffect } from "react";
import React from 'react'


const useAxiosShip = () => {
    const [response, setResponse] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [controller, setController] = useState();

    const axiosFetch = async (configObj) => {
      const {
        axiosInstance,
        method,
        url,
        requestConfig = {}
      } = configObj;
      try {
        setLoading(true);
        const ctrl = new AbortController();
        setController(ctrl);
        const res = await axiosInstance[method.toLowerCase()](url, {
          ...requestConfig,
          signal: ctrl.signal
        });
        setResponse(res.data);
        console.log(res.data);
      } catch (err) {
        setError(err.response.data);
        console.log(err.response.data);
      } finally {
        setLoading(false);
      }
    }

    useEffect(() => {
      return () => controller && controller.abort();
    }, [controller])

    return [response, error, loading, axiosFetch];
  }

  export default useAxiosShip;