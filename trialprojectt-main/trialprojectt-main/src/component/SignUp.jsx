import '../css/signup.css'
import { useEffect, useRef, useState } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import {faCheck , faTimes , faInfoCircle} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';
import axiosAdd from '../apis/SignUpAdd';
import useAxiosAdd from '../hooks/useAxiosAgent';
import MessageServer from './MessageServer';

const USER_REGEX = /^[a-zA-Z]+( [a-zA-Z]+)+$/i;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$!]).{8,24}$/;
const PHONE_REGEX = /^01[0125]\d{8}$/;
const EMAIL_REGX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


const SignUp = () => {

  const { t } = useTranslation();
  const userRef = useRef();
  const errRef = useRef();

  const [user , setUser] = useState('');
  const [validName , setValidName] = useState(false);
  const [userFocus , setUserFocus] = useState(false);


  const [pwd , setPwd] = useState('');
  const [validPwd , setValidPwd] = useState(false);
  const [pwdFocus , setPwdFocus] = useState(false);


  const [matchPwd , setMatchPwd] = useState('');
  const [validMatch , setValidMatch] = useState(false);
  const [matchFocus , setMatchFocus] = useState(false);


  const [phoneNum , setphoneNum] = useState('');
  const [validphoneNum , setvalidphoneNum] = useState(false);
  const [phoneNumFocus , setphoneNumFocus] = useState(false);


  const [emailChan , setEmail] = useState('');
  const [validemail , setValidemail] = useState(false);
  const [emailFocus , setemailFocus] = useState(false);

  const [empChan , setEmp] = useState('');
  const [validEmp , setValidEmp] = useState(false);
  const [EmpFocus , setEmpFocus] = useState(false);

  const [responseText,setresponseText]=useState(false);



  const [errMsg , setErrMsg] = useState('');
  const [success , setSuccess] = useState(false);

  const [reponse,errortwo , loadingtwo ,axiosFetch] = useAxiosAdd();
  const clickApi = ()=>{
    axiosFetch({
      axiosInstance: axiosAdd,
    method :'POST',
    url:'/',
    requestConfig :{
      Employee_Name: user ,
      Employee_Password:pwd ,
      Telephone: phoneNum ,
      Email: emailChan,
      Role: empChan

      }

   })
   if(reponse)
   {
    setresponseText(true)
   }
   const timer = setTimeout(() => {
    setresponseText(false);
  }, 5000);

   setUser('');
   setPwd('');
   setMatchPwd('');
   setphoneNum('');
   setEmail('');
   setEmp('');


  }


  useEffect (()=>{
    const result = USER_REGEX.test(user);
    console.log(result);
    console.log(user);
    setValidName(result);
  },[user])

  useEffect (()=>{
    const result = PWD_REGEX.test(pwd);
    console.log(result);
    console.log(pwd);
    setValidPwd(result);
    const match = pwd === matchPwd;
    setValidMatch(match);
  },[pwd , matchPwd])

  useEffect (()=>{
    const result = PHONE_REGEX.test(phoneNum);
    console.log(result);
    console.log(phoneNum);
    setvalidphoneNum(result);
  },[phoneNum])

  useEffect (()=>{
    const result = EMAIL_REGX.test(emailChan);
    console.log(result);
    console.log(emailChan);
    setValidemail(result);
  },[emailChan])



  useEffect(()=>{
    setErrMsg('');
    //hwa 2ara el error 5alas fa haymasa7a l2an 7asal t3'yeer f dool
  },[user , pwd , matchPwd , phoneNum , emailChan])

  useEffect (()=>{
    setValidEmp(true);
    console.log(empChan);

  },[empChan])



  return (
    <div>
    {responseText && !errortwo && reponse && <MessageServer text={reponse.message} message={responseText} fadeDuration={30000} />}
    <div className="signUpContainer d-flex">
   <div className="lotiSiginWrapper d-flex">
   <Player style={{ height: 500 }} src='https://assets4.lottiefiles.com/packages/lf20_GtqlRg.json' className="playerLotie" loop autoplay/>
   </div>
   <div className="siginWrapper d-flex">

    <div className="signupFormContainer">
    <p ref={errRef} className={errMsg ? "errMsgClass" : "offscreen"}aria-live='assertive'>{errMsg}</p>
    {errortwo && <p>{errortwo}</p>}
        <div className="titlSignUp d-flex">
            <b>{t('Create_ACC')}</b>

        </div>
        <form action="">
        <div className="signUpFormWrapper">

        <div className="inputWrapperSign">
          <label htmlFor='fullname' className="labelNameSign">
          {t('Full_Name')}
            <span className={validName ? "valid" :"offscreen"}>  <FontAwesomeIcon icon={faCheck}/> </span>
            <span className={validName || !user ? "offscreen" :"invalid"}>  <FontAwesomeIcon icon={faTimes}/> </span>

          </label>
          <div className="inputSignUp">
            <input type="text" placeholder={t('Enter_NAME')}
            value={user}
              aria-placeholder={t('Enter_NAME')}
             id="fullname" ref = {userRef} autoComplete='off' onChange={(e)=> setUser(e.target.value)}
            required aria-invalid = {validName ? "false" : "true"} aria-describedby='uidnote'
            onFocus={()=> setUserFocus(true)}
            onBlur={()=> setUserFocus(false)}

            />
            <p id='uidnote'className={userFocus && user && !validName ? "instruction" : "offscreen"}>
              <FontAwesomeIcon icon={faInfoCircle} />
              {t('NameRuleOne')} <br/>
              {t('nameRuletwo')}   <br/>
              {t('nameRuleThree')}
            </p>
          </div>
        </div>

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
          <label id='phoneReader' className="labelNameSign">
          {t('Phone_Number')}
            <span className={validphoneNum ? "valid" :"offscreen"}>  <FontAwesomeIcon icon={faCheck}/> </span>
            <span className={validphoneNum || !phoneNum ? "offscreen" :"invalid"}>  <FontAwesomeIcon icon={faTimes}/> </span>
          </label>
          <div className="inputSignUp">
            <input type="number" maxLength="11" id='phoneReader'
            required
            value={phoneNum}
            autoComplete='off'
              aria-describedby='Phonenote'
              placeholder='01012364515'
              aria-placeholder='01012364515'
              aria-invalid = {validphoneNum ? "false" : "true"}
              onChange={(e)=> setphoneNum(e.target.value)}
              onFocus={()=> setphoneNumFocus(true)}
              onBlur={()=> setphoneNumFocus(false)}
             />
          </div>
          <p id='Phonenote' className={phoneNumFocus && !validphoneNum ? "instruction" : "offscreen"}>
          <FontAwesomeIcon icon={faInfoCircle} />  {t('phoneRuleone')}<br/>
          {t('phoneRuletwo')}
          </p>
        </div>

        <div className="inputWrapperSign">
          <label htmlFor='password'  className="labelNameSign">
          {t('Password')}
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
          {t('ConfirmPass')}
           <span className={validMatch && matchPwd ? "valid" :"offscreen"}>  <FontAwesomeIcon icon={faCheck}/> </span>
            <span className={validMatch || !matchPwd ? "offscreen" :"invalid"}>  <FontAwesomeIcon icon={faTimes}/> </span>
          </label>
          <div className="inputSignUp">
            <input type="password"
              id='Confirm'
              required
              placeholder={t('confirmplacePass')}
              aria-placeholder={t('confirmplacePass')}
              aria-describedby='Confirmnote'
              aria-invalid = {validMatch ? "false" : "true"}
              onChange={(e)=> setMatchPwd(e.target.value)}
              onFocus={()=> setMatchFocus(true)}
              onBlur={()=> setMatchFocus(false)}
            />
            <p id='Confirmnote'className={ matchFocus  && !validMatch ? "instruction" : "offscreen"}>
              <FontAwesomeIcon icon={faInfoCircle} />
              {t('matchPassw')} <br/>
            </p>
          </div>
        </div>


        <div className="inputWrapperSign d-flex marginZero">

        <div className="wrapper">

  <div className="option">
    <input className="input" type="radio" name="empType" value="admin"

              id='Admin'

              aria-describedby='adminnote'
              // checked={empChan === 'Admin'}

              aria-invalid = {validEmp ? "false" : "true"}
              onChange={(e)=> {setEmp(e.target.value);
                setValidEmp(true);
              }}
              onFocus={()=> setEmpFocus(true)}
              onBlur={()=> setEmpFocus(false)}
    />
    <div className="btnSign">
      <span className="span" id='adminnote' >{t('Admin')}
</span>
    </div>  </div>
  <div className="option">
    <input className="input" type="radio" name="empType" value="other"
            id='Other'

              aria-describedby='othernnote'
              // checked={empChan === 'Other'}

              aria-invalid = {validEmp ? "false" : "true"}
              onChange={(e)=> {setEmp(e.target.value);
                setValidEmp(true);
              }}
              onFocus={()=> setEmpFocus(true)}
              onBlur={()=> setEmpFocus(false)}

    />
    <div className="btnSign">
      <span id='othernnote' className="span">{t('Users')}</span>
    </div>
  </div>
</div>



        </div>
        <p id='othernnote' className={ EmpFocus  && !validEmp ? "instruction" : "offscreen"}>
              <FontAwesomeIcon icon={faInfoCircle} />
              {t('Choose_Role')} <br/>
            </p>

    <div className="submitSignUp d-flex">
    <button disabled={!validName || !validPwd || !validMatch || !validphoneNum || !validemail || !validEmp  ? true : false } onClick={ ()=>{ clickApi();}} className="button-27" role="button">{t('Sign_up')}</button>
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

export default SignUp
