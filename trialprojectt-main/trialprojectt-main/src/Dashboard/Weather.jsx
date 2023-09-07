import '../css/weather.css';
import { useState, useEffect } from 'react';
import moment from 'moment';
import { useTranslation } from 'react-i18next';

const Weather = () => {
    const { t } = useTranslation();
  const currentDate = moment();
  const formattedDate = currentDate.format('YYYY-MM-DD');
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(
          'https://api.openweathermap.org/data/2.5/weather?lat=31.200092&lon=29.918739&appid=59937773368262dcada49cdf6d73c398'
        );
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.log('Error fetching weather data:', error);
      }
    };

    fetchWeatherData();
  }, []);

  const convertToCelsius = (temperature) => {
    const temp = temperature - 273.15;
    return String(temp).substring(0, 4);
  };

  return (
    <div className="CardWeatherContainer">
    <div className="cardWeatheer">
      <div className="container">
        <div className="cloud front">
          <span className="left-front"></span>
          <span className="right-front"></span>
        </div>
        <span className="sun sunshine"></span>
        <span className="sun"></span>
        <div className="cloud back">
          <span className="left-back"></span>
          <span className="right-back"></span>
        </div>
      </div>

      <div className="card-header">
        <span> {t('Alexandria')} <br /> {t('Egypt')}</span>
        <span>{formattedDate}</span>
      </div>

      {weatherData && (
        <>
          <span className="temp">{convertToCelsius(weatherData.main.temp)}</span>
          <div className="temp-scale">
            <span>{t('Celsius')}</span>
          </div>
        </>
      )}
    </div>
    </div>
  );
};

export default Weather;
