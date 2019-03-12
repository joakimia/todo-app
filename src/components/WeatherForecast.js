import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { sGetWeather } from '../reducers/info';

import './styles/App.css';

export const WeatherForecast = ({ currentWeather }) => (
    <div className="weather-field">
        <h3>Current weather: Oslo</h3>
        {currentWeather && (
            <div className="weather-wrapper">
                <span>{`Description: ${currentWeather.description}`}</span>
                <span>{`Temperature: ${currentWeather.temperature} Celsius`}</span>
            </div>
        )}
    </div>
);


WeatherForecast.propTypes = {
    currentWeather: PropTypes.shape({
        description: PropTypes.string,
        temperature: PropTypes.number
    }),
};

const mapStateToProps = state => ({
    currentWeather: sGetWeather(state),
});

export default connect(
    mapStateToProps,
    null
)(WeatherForecast);