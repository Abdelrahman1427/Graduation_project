import { useState, useEffect } from "react";

const useFetchEmp = (configObj) => {
  const { axiosInstance, method, url, requestConfig = {} } = configObj;

  const [response, setResponse] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        const res = await axiosInstance[method.toLowerCase()](url, {
          ...requestConfig,
          signal: controller.signal,
        });
        setResponse(res.data.getemp);
        // console.log(res.data);
      } catch (err) {
        setError(err.message);
        console.log(err);
      } finally {
        setLoading(false);
      }
    }

fetchData();

    // useEffect clean up
    return () => {
      controller.abort();
    }
  }, []); // Add "loading" as a dependency

  console.log("da el response", response);
  return [response, error, loading];
};

export default useFetchEmp;