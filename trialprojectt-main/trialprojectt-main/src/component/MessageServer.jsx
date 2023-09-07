import '../css/serverresponse.css';
import React, { useState, useEffect } from 'react';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'animate.css';
import useFetchLog from '../hooks/useFetchLog.js'
import axios from '../apis/LogsAdd';

const MessageServer = ({ text, message }) => {

  const [reponseOne,errorOne , loadingOne ,axiosFetchOne] = useFetchLog();

  const nameUser = localStorage.getItem("NameUser");

  const [fade, setFade] = useState(false);

  useEffect(() => {
    if (text) {
      setFade(true);
      const timer = setTimeout(() => {
        setFade(false);
      }, 4000);
      axiosFetchOne({
        axiosInstance: axios,
        method: 'POST',
        url: '/',
        requestConfig: {
          name: nameUser,
          message: text // Pass 'text' directly
        },
       })
      return () => clearTimeout(timer);
    } else {
      setFade(false);
    }
  }, [text]);

  return (

    <div className={`fade-out-box ${message ? 'fade' : 'opacityZero'}`}>
      <FontAwesomeIcon icon={faInfoCircle} /> {text}
    </div>
  );
};

export default MessageServer;
