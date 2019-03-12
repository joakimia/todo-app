import React from 'react';
import { shallow } from 'enzyme';
import { App } from '../App';
import LeftPanel from '../LeftPanel';
import RightPanel from '../RightPanel';

const props = {
  setWeather: jest.fn(),
  setXkcdLink: jest.fn(),
  setNews: jest.fn(),
}

let shallowApp;

const app = () => {
  if (!shallowApp) {
    shallowApp = shallow(<App {...props} />)
  }
  return shallowApp;
}

describe('components -> App: ', () => {
  beforeEach(() => {
    // clean up before each test
    shallowApp = undefined;
  });

  it('should render a header with the correct text', () => {
    const headerText = app().find('header').text();
    expect(headerText).toEqual("Joakim's To-Do list");
  });

  it('should render the Left Panel', () => {
    const leftPanel = app().exists(LeftPanel);
    expect(leftPanel).toEqual(true);
  });

  it('should render the Right Panel', () => {
    const leftPanel = app().exists(LeftPanel);
    expect(leftPanel).toEqual(true);
  });
});

