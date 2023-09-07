import { useState, useRef, useEffect } from 'react';
import useAuth from '../hooks/useAuth';
import useFetchLog from '../hooks/useFetchLog';
import axiosAdd from '../apis/Login';
import '../css/logPage.css';
import logoicon from '../imgs/image__5_-removebg-preview.png';
import { Player } from '@lottiefiles/react-lottie-player';
import { useLocation, useNavigate } from 'react-router-dom';
import MessageServer from './MessageServer';

const Login = () => {
  const { setAuth } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const fromAdmin = '/menu';
  const otherPath = '/Menuemployee';

  const userRef = useRef();
  const errRef = useRef();

  const [email, setemail] = useState('');
  const [user, setUser] = useState('');
  const [roles, setRole] = useState();
  const [pass, setPass] = useState('');
  const [errMsg, seterrMsg] = useState('');
  const [clicked, setClick] = useState(false);

  const [res, errortwo, loadingtwo, axiosFetch] = useFetchLog();
  const NameUser = useRef(null);
  const roleUser = useRef(null);

  const [responseText, setresponseText] = useState(false);

  const clickAdd = () => {
    // Email and password validation
    if (email.length < 8 || pass.length < 8) {
      seterrMsg('Email and password should be at least 8 characters long.');
      return;
    }

    axiosFetch({
      axiosInstance: axiosAdd,
      method: 'POST',
      url: '/',
      requestConfig: {
        Email: email,
        Employee_Password: pass,
      },
    });
    if (errortwo) {
      setresponseText(true);
    }

    const timer = setTimeout(() => {
      setresponseText(false);
    }, 5000);
    setClick(true);
  };

  useEffect(() => {
    if (res) {
      setUser(res.Employee_Name);
      setRole(res.Role);
      console.log(`name hwa da ${res.Employee_Name}`);
      console.log(res.Role);
      localStorage.setItem('NameUser', res.Employee_Name);
      localStorage.setItem('roleUser', res.Role);
      localStorage.setItem('pass', res.Employee_Password);
      setAuth({ user, pass, roles }); // access tokens here
      if (roles === 'other') {
        navigate(otherPath, { replace: true });
      }
      if (roles === 'admin') {
        navigate(fromAdmin, { replace: true });
      }

      // navigate (otherPath, { replace: true });
    }
  }, [res]);

  const [error, setError] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    const clearLocalStorage = () => {
      const hours = 0.0167; // Number of hours after which to clear the local storage
      const now = new Date().getTime();
      const setupTime = localStorage.getItem('setupTime');

      if (setupTime == null || now - setupTime > hours * 60 * 60 * 1000) {
        localStorage.clear();
        localStorage.setItem('setupTime', now);
      }
    };

    clearLocalStorage();
  }, []);

  useEffect(() => {
    seterrMsg('');
  }, [email, pass]);

  return (
    <>
      {errortwo && !res && <MessageServer text={errortwo} message={responseText} fadeDuration={30000} />}
      <section className="WholeLogInForm">
        <div className="img-of-login">
          <Player
            style={{ height: 900 }}
            src="https://assets8.lottiefiles.com/packages/lf20_uhIxIg.json"
            speed={0.6}
            className="playerLotie"
            loop
            autoplay
          />
        </div>
        <div className="LogPage">
          <p ref={errRef} className={errMsg ? 'errMsgClass' : 'offscreen'} aria-live="assertive">
            {errMsg}
          </p>
          <div className="Form-Container-sign">
            <form className="logform-itself">
              <div>
                <img src={logoicon} className="logoellogin" alt="Logo" />
                <h3 className="titlelog">Sign in</h3>
              </div>
              <div className="omrs-input-group">
                <label className="omrs-input-underlined">
                  <input
                    required
                    value={email}
                    type="text"
                    id="username"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setemail(e.target.value)}
                  />
                  <span className="omrs-input-label">E-mail</span>
                </label>
              </div>
              <div className="omrs-input-group">
                <label className="omrs-input-underlined">
                  <input
                    required
                    type="password"
                    value={pass}
                    id="password"
                    onChange={(e) => setPass(e.target.value)}
                  />
                  <span className="omrs-input-label">Password</span>
                </label>
              </div>
              <div className="logiBtn-container">
              <button
              type="button"
               className="logiBtn"
                onClick={clickAdd}
              disabled={pass.length < 8}
                >
                Sign in
                  </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
