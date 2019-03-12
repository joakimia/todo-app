export const apiFetchWeather = async () => {
    const CITY = 'oslo';
    const API_KEY = 'bc18041a98741b1f55b6a9f4d9a32fbc';

    const URL = `http://api.openweathermap.org/data/2.5/weather?q=${CITY}&units=metric&APPID=${API_KEY}`
    
    const weatherResponse = await fetch(URL).then(response => response.json());

      return { 
          temperature: weatherResponse.main.temp,
          description: weatherResponse.weather[0].description
    };
};