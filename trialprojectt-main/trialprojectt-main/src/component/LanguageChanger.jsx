import { useState , useEffect } from 'react';
import i18n from "i18next";
import '../css/langChange.css'
import { Player } from '@lottiefiles/react-lottie-player';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

const LanguageChanger = () => {
  const [toggled, setToggled] = useState(false);
  const { i18n } = useTranslation();

  const changeLanguage = () => {
    setToggled(prevToggled => {
      const newToggled = !prevToggled;
      const lang = newToggled ? 'ar' : 'en';
      i18n.changeLanguage(lang);
      localStorage.setItem('language', lang);
      return newToggled;
    });
  };

  useEffect(() => {
    // Retrieve the language from browser storage
    const storedLanguage = localStorage.getItem('language');

    // Set the language in i18next
    if (storedLanguage) {
      i18n.changeLanguage(storedLanguage);
    }
  }, [i18n]);

  return (
    <div>
   <div className="comboBox d-flex">
   <button className="langbtn" onClick={changeLanguage}> <Player
   style={{ height: 100 }}
  src='https://assets10.lottiefiles.com/packages/lf20_ggyfnp78.json'
  className="playerLotie"
  loop
  autoplay/></button>
   </div>

    </div>
  )
}

export default LanguageChanger
