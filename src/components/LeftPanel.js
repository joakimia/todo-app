import React from 'react';
import InputField from './InputField';
import WeatherForecast from './WeatherForecast';
import Xkcd from './Xkcd';

import './styles/App.css';

export const LeftPanel = () => (
    <div className="section-left">
        <div className="left-top">
            <InputField />
        </div>
        <div className="left-middle">
            <Xkcd />
        </div>
        <div className="left-bottom">
            <WeatherForecast />
        </div>
    </div>
);

export default LeftPanel;