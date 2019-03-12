import React from 'react';
import { shallow } from 'enzyme';
import { NewsPanel } from '../NewsPanel';

const defaultProps = { news: [] };

const receivedProps = {
    news: [
        { description: "In other news" },
        { description: "There's stuff going on" },
        { description: "Meanwhile, winter is coming" },
    ]
};

let shallowNewsPanel;

const newsPanel = (partialProps = {}) => {
  if (!shallowNewsPanel) {
    const props = {...defaultProps, ...partialProps}
    shallowNewsPanel = shallow(<NewsPanel {...props} />)
  }
  return shallowNewsPanel;
}


describe('components -> NewsPanel: ', () => {
    beforeEach(() => {
      // clean up before each test
      shallowNewsPanel = undefined;
    });

    describe('when props news have length less than 1', () => {
        it('should only render one div tag and one h3 tag', () => {
            expect(newsPanel().find('div').length).toEqual(1)
            expect(newsPanel().find('h3').length).toEqual(1)
        });
    });

    describe('when props news have length greater than 1', () => {
        beforeEach(() => {
            newsPanel(receivedProps); 
        });
        it('should render the news starting with the first item in the array', () => {
            expect(newsPanel().childAt(1).text()).toEqual(receivedProps.news[0].description);
        });

        it('should render the next item in the array after 10 seconds', () => {
            setTimeout(() => {
                expect(newsPanel().childAt(1).text()).toEqual(receivedProps.news[1].description);
            }, 11000);
        });
    });

});