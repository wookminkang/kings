import { useEffect, useState } from 'react';
import { getWeather } from '@/api/weather';

export type Weather = {
  forecastDate: string;   // 예: "20250429"
  forecastTime: string;   // 예: "1700"
  sky: string;            // 예: "1" (하늘 상태 코드)
  tmp: string;            // 예: "20" (온도)
  reh: string;            // 예: "20" (습도)
  vec: string;            // 예: "12" (풍향)
  vecName: string;        // 예: "서" (풍향 이름)
  wsd: string;            // 예: "2" (풍속)
};

export const Weather = () => {
  const [weather, setWeather] = useState<Weather>()
  console.log(`kikikifw24`,weather);

  useEffect(() => {
    fetchWeather();
  }, []);

  const fetchWeather = async () => {
    const res = await getWeather();
    if (res.data.result) {
      console.log(res.data.data[0]);
      setWeather(res.data.data[0].realWeather);
    }
  };

  return <div className="weather">
    <div className="weather-icon">
      <img src="/images/weather/sun.png" alt="sun" />
    </div>
    <div className="weather-temperature"> 20°C </div>
    <div className="weather-description"> 맑음 </div>
    <div className="weather-humidity"> 습도 60% </div>
    <div className="weather-wind"> 풍속 10m/s </div>  
    <div className="weather-rain"> 강수량 10mm </div>
    <div className="weather-cloud"> 구름 50% </div>
    <div className="weather-snow"> 눈 10mm </div>
    <div className="weather-thunder"> 번개 10% </div>
    <div className="weather-fog"> 안개 10% </div>
    <div className="weather-rain"> 비 10mm </div>
    
    
  </div>;
};
