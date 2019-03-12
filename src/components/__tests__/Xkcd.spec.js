import React from 'react';
import { shallow } from 'enzyme';
import { Xkcd } from '../Xkcd';

const props = {
    xkcdImg: {
        src: 'http://src-xkcd-link',
        alt: 'a-string',
        title: 'g-string',
    }
};

let shallowXkcd;

const xkcd = (passedProps = {}) => {
  if (!shallowXkcd) {
    shallowXkcd = shallow(<Xkcd {...passedProps} />)
  }
  return shallowXkcd;
}


describe('components -> Xkcd: ', () => {
    beforeEach(() => {
      // clean up before each test
      shallowXkcd = undefined;
    });

    describe('when prop xkcdImg is falsy', () => {
        it('should not render a img tag', () => {
            expect(xkcd().find('img').length).toEqual(0);
        });
    });

    describe('when prop xkCd is truthy', () => {
        beforeEach(() => {
            xkcd(props);
        });

        it('should render a img tag', () => {
            expect(xkcd().find('img').length).toEqual(1);
        });
    });

    describe('when state dialogIsOpen is false', () => {
        it('should not render a dialog', () => {
            expect(xkcd().find('dialog').length).toEqual(0);
        });
    });

    describe('when state dialogIsOpen is true', () => {
        beforeEach(() => {
            xkcd(props).setState({ dialogIsOpen: true }); 
        });

        it('should render a dialog', () => {
            expect(xkcd().find('dialog').length).toEqual(1);
        });
    });
});