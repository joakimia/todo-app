import React from 'react';
import { shallow } from 'enzyme';
import { WeatherForecast } from '../WeatherForecast';

const passedProps = {
    currentWeather: {
        description: "In other news" ,
        temperature: 9001,
    }
};

let shallowWeather;

const weather = (partialProps = {}) => {
  if (!shallowWeather) {
    shallowWeather = shallow(<WeatherForecast {...partialProps} />)
  }
  return shallowWeather;
}


describe('components -> WeatherForecast: ', () => {
    beforeEach(() => {
      // clean up before each test
      shallowWeather = undefined;
    });

    describe('when prop currentWeather is falsy', () => {
        it('should only render one div tag and one h3 tag', () => {
            expect(weather().find('div').length).toEqual(1)
            expect(weather().find('h3').length).toEqual(1)
        });
    });

    describe('when props currentWeather is truthy', () => {
        beforeEach(() => {
            weather(passedProps); 
        });
        it('should render the current weather forecast', () => {
            expect(weather().find('span').length).toEqual(2);
        });
    });

});