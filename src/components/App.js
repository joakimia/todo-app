import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';
import { apiFetchWeather } from '../api/weather';
import { apiFetchXkcdLink } from '../api/xkcd';
import { apiFetchNews } from '../api/googleNews';
import { 
  acSetCurrentWeather,
  acSetXkcdLink,
  acSetNews 
} from '../actions/info';

import './styles/App.css';

export class App extends Component {
  async componentDidMount() {
    const weatherInfo = await apiFetchWeather();
    const xkcdImg = await apiFetchXkcdLink();
    const newsHeadlines = await apiFetchNews();
    
    this.props.setWeather(weatherInfo);
    this.props.setXkcdLink(xkcdImg);
    this.props.setNews(newsHeadlines);
  };

  render() {
    return (
      <div className="app">
        <header className="app-header">Joakim's To-Do list</header>
        <div className="section-main">
          <LeftPanel />
          <RightPanel />
        </div>
      </div>
    );
  }
};

App.propTypes = {
  setWeather: PropTypes.func.isRequired,
  setXkcdLink: PropTypes.func.isRequired,
  setNews: PropTypes.func.isRequired,
};

export default connect(
  null,
  {
    setWeather: acSetCurrentWeather,
    setXkcdLink: acSetXkcdLink,
    setNews: acSetNews,
  }
)(App);
