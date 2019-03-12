import { 
    SET_WEATHER_INFO,
    SET_XKCD_LINK,
    SET_NEWS,
} from '../actions/info';

const defaultState = {
    currentWeather: null,
    xkcdLink: null,
    newsArticles: null,
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case SET_WEATHER_INFO:
            return {
                ...state,
                currentWeather: action.value,
            }
        case SET_XKCD_LINK: 
            return {
                ...state,
                xkcdLink: action.value,
            };
        case SET_NEWS:
            return {
                ...state,
                newsArticles: action.value,
            }
        default:
            return state;
    }
};

const sGetInfo = state => state.info;

export const sGetWeather = state => sGetInfo(state).currentWeather;

export const sGetXkcdLink = state => sGetInfo(state).xkcdLink;

export const sGetNewsArticles = state => sGetInfo(state).newsArticles;


