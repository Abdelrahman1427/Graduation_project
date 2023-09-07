import { useState , useEffect } from "react";

const useAxiosAgent = () => {
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
        console.log(err.response);
      } finally {
        setLoading(false);
      }
    }


    return [response, error, loading, axiosFetch];
  }

  export default useAxiosAgent;