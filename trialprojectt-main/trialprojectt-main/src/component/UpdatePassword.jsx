import React from 'react';
import '../css/signup.css'
import { useEffect, useRef, useState } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import {faCheck , faTimes , faInfoCircle} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';
import axiosAdd from '../apis/UpdatePass';
import useAxiosAdd from '../hooks/useAxiosAgent';
import MessageServer from './MessageServer';


const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$!]).{8,24}$/;

const EMAIL_REGX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


const UpdatePassword = () => {

  const { t } = useTranslation();

  const errRef = useRef();



  const [pwd , setPwd] = useState('');
  const [validPwd , setValidPwd] = useState(false);
  const [pwdFocus , setPwdFocus] = useState(false);


  const [matchPwd , setMatchPwd] = useState('');
  const [validMatch , setValidMatch] = useState(false);
  const [matchFocus , setMatchFocus] = useState(false);



  const [emailChan , setEmail] = useState('');
  const [validemail , setValidemail] = useState(false);
  const [emailFocus , setemailFocus] = useState(false);


  const [responseText,setresponseText]=useState(false);



  const [errMsg , setErrMsg] = useState('');
  const [success , setSuccess] = useState(false);

  const [reponse,errortwo , loadingtwo ,axiosFetch] = useAxiosAdd();
  const clickApi = ()=>{
    axiosFetch({
      axiosInstance: axiosAdd,
    method :'PUT',
    url:'/',
    requestConfig :{
      email: emailChan,
      pass:pwd
      }

   })
   if(reponse)
   {
    setresponseText(true)
   }
   const timer = setTimeout(() => {
    setresponseText(false);
  }, 5000);


   setPwd('');
   setMatchPwd('');

   setEmail('');

  }
  const PassUser = localStorage.getItem("pass");

  useEffect (()=>{
    const result = PWD_REGEX.test(pwd);
    console.log(result);
    console.log(pwd);
    setValidPwd(result);
    const match = PassUser === matchPwd;
    setValidMatch(match);
  },[pwd , matchPwd])



  useEffect (()=>{
    const result = EMAIL_REGX.test(emailChan);
    console.log(result);
    console.log(emailChan);
    setValidemail(result);
  },[emailChan])



  useEffect(()=>{
    setErrMsg('');
    //hwa 2ara el error 5alas fa haymasa7a l2an 7asal t3'yeer f dool
  },[ pwd , matchPwd , emailChan])




  return (
    <div>
    {responseText && !errortwo && reponse && <MessageServer text={reponse.message} message={responseText} fadeDuration={30000} />}
    <div className="signUpContainer d-flex">
   <div className="lotiSiginWrapper d-flex">
   <Player style={{ height: 500 }} src='https://assets4.lottiefiles.com/packages/lf20_nc1bp7st.json' className="playerLotie" loop autoplay/>
   </div>
   <div className="siginWrapper d-flex">

    <div className="signupFormContainer">
    <p ref={errRef} className={errMsg ? "errMsgClass" : "offscreen"}aria-live='assertive'>{errMsg}</p>
    {errortwo && <p>{errortwo}</p>}
        <div className="titlSignUp d-flex">
            <b>Update Password</b>

        </div>
        <form action="">
        <div className="signUpFormWrapper">


        <div className="inputWrapperSign">
          <label htmlFor='emailin' className="labelNameSign">
          {t('E_mail')}
            <span className={validemail ? "valid" :"offscreen"}>  <FontAwesomeIcon icon={faCheck}/> </span>
            <span className={validemail || !emailChan ? "offscreen" :"invalid"}>  <FontAwesomeIcon icon={faTimes}/> </span>
          </label>
          <div className="inputSignUp">
            <input type='email' id='emailin'
               required
               value={emailChan}
               placeholder='example@example.com'
               aria-placeholder='example@example.com'
               autoComplete='off'
              aria-describedby='emailnote'
              aria-invalid = {validPwd ? "false" : "true"}
              onChange={(e)=> setEmail(e.target.value)}
              // onFocus={()=> setemailFocus(true)}
             // onBlur={()=> setemailFocus(false)}
            />
               {/* <p id='emailnote' className={emailFocus && !validemail ? "instruction" : "offscreen"}>
              <FontAwesomeIcon icon={faInfoCircle} /> Email must be Valid  <br/>
            </p> */}
          </div>
        </div>



        <div className="inputWrapperSign">
          <label htmlFor='password'  className="labelNameSign">
          New Password
            <span className={validPwd ? "valid" :"offscreen"}>  <FontAwesomeIcon icon={faCheck}/> </span>
            <span className={validPwd || !pwd ? "offscreen" :"invalid"}>  <FontAwesomeIcon icon={faTimes}/> </span>
          </label>
          <div className="inputSignUp">
            <input type="password" id='password'
              required
              value={pwd}
              placeholder=   {t('Enter_Valid_pass')}
              aria-placeholder=   {t('Enter_Valid_pass')}
              aria-describedby='pwdnote'
              aria-invalid = {validPwd ? "false" : "true"}
              onChange={(e)=> setPwd(e.target.value)}
              onFocus={()=> setPwdFocus(true)}
              onBlur={()=> setPwdFocus(false)}
            />
             <p id='pwdnote' className={pwdFocus && !validPwd ? "instruction" : "offscreen"}>
              <FontAwesomeIcon icon={faInfoCircle} /> {t('paswruleOne')} <br/>
              {t('passRuletwo')}     <br/>
              {t('passRuleThree')} <span aria-label='exclamation mark'> !</span>
              <span aria-label='at symbole'>@</span><span aria-label='hashtag'>#</span>
              <span aria-label="dollar sign"> $</span> <span aria-label ='perecent'>%</span>
            </p>

          </div>
        </div>

        <div className="inputWrapperSign">
          <label id = "Confirm" className="labelNameSign">
          Old Password
           <span className={validMatch && matchPwd ? "valid" :"offscreen"}>  <FontAwesomeIcon icon={faCheck}/> </span>
            <span className={validMatch || !matchPwd ? "offscreen" :"invalid"}>  <FontAwesomeIcon icon={faTimes}/> </span>
          </label>
          <div className="inputSignUp">
            <input type="password"
              id='Confirm'
              required
              placeholder='Write your old password'
              aria-placeholder={t('confirmplacePass')}
              aria-describedby='Confirmnote'
              aria-invalid = {validMatch ? "false" : "true"}
              onChange={(e)=> setMatchPwd(e.target.value)}
              onFocus={()=> setMatchFocus(true)}
              onBlur={()=> setMatchFocus(false)}
            />
            <p id='Confirmnote'className={ matchFocus  && !validMatch ? "instruction" : "offscreen"}>
              <FontAwesomeIcon icon={faInfoCircle} />
              Must be as same as your password <br/>
            </p>
          </div>
        </div>




    <div className="submitSignUp d-flex">
    <button disabled={ !validPwd || !validMatch || !validemail  ? true : false } onClick={ ()=>{ clickApi();}} className="button-27" role="button">Update</button>
    </div>
  {/* {errortwo ?<p>{errortwo}</p>  : "Done"} */}


   </div>
   </form>
    </div>
</div>
    </div>
    </div>
  )
}

export default UpdatePassword
