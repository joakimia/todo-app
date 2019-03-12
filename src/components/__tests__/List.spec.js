import React from 'react';
import { shallow } from 'enzyme';
import List from '../List';
import Item from '../Item';

const props = {
    className: 'some-class-name',
    headerLabel: 'In Progress',
    onDragOver: jest.fn(),
    onDrop: jest.fn(),
    items: [
        'Stay woke',
        'Get Rich',
        'Take names',
    ],
};

let shallowList;

const list = () => {
  if (!shallowList) {
    shallowList = shallow(<List {...props} />)
  }
  return shallowList;
}


describe('components -> List: ', () => {
    beforeEach(() => {
      // clean up before each test
      shallowList = undefined;
    });

    it('should render a div containing everything else', () => {
        const outerDiv = list().find('div').first();
        expect(outerDiv.children()).toEqual(list().children());
    });

    describe('the outermost div', () => {
        it('should call prop onDrop with the correct args when event handler is invoked', () => {
            const event = {};
            list().find('div').simulate('drop', event);
            expect(props.onDrop).toHaveBeenCalledWith(event, props.className)
        });
    });

    it('should render a h3 tag with the correct label', () => {
        expect(list().find('h3').text()).toEqual(props.headerLabel);
    });

    it('should render an un-ordered list', () => {
        expect(list().find('ul').length).toEqual(1);
    });

    it('should pass the correct props to the list items', () => {
        let actualResult = false;

        list().find(Item).forEach(item => {
            if (props.items.includes(item.props().text)) {
                actualResult = true;
            }
        });
        
        expect(actualResult).toEqual(true);
    });
});