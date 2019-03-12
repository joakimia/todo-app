import React from 'react';
import { shallow } from 'enzyme';
import LeftPanel from '../LeftPanel';
import InputField from '../InputField';
import Xkcd from '../Xkcd';
import WeatherForecast from '../WeatherForecast';

let shallowLeftPanel;

const leftPanel = () => {
  if (!shallowLeftPanel) {
    shallowLeftPanel = shallow(<LeftPanel />)
  }
  return shallowLeftPanel;
}


describe('components -> LeftPanel: ', () => {
    beforeEach(() => {
      // clean up before each test
      shallowLeftPanel = undefined;
    });

    it('should render a div containing everything else', () => {
        const outerDiv = leftPanel().find('div').first();
        expect(outerDiv.children()).toEqual(leftPanel().children());
    });

    it('should render an InputField', () => {
        expect(leftPanel().find(InputField).length).toEqual(1);
    });

    it('should render an Xkcd component', () => {
        expect(leftPanel().find(Xkcd).length).toEqual(1);
    });

    it('should render a WeatherForecast component', () => {
        expect(leftPanel().find(WeatherForecast).length).toEqual(1);
    });
});