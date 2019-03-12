export const SET_WEATHER_INFO = 'SET_WEATHER';
export const SET_XKCD_LINK = 'SET_XKCD_LINK';
export const SET_NEWS = 'SET_NEWS';

export const acSetCurrentWeather = value => ({
    type: SET_WEATHER_INFO,
    value,
});

export const acSetXkcdLink = value => ({
    type: SET_XKCD_LINK,
    value,
});

export const acSetNews = value =>  ({
    type: SET_NEWS,
    value,
});