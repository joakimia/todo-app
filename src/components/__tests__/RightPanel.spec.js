import React from 'react';
import { shallow } from 'enzyme';
import { RightPanel } from '../RightPanel';
import List from '../List';

const props = {
    inProgress: [
        'Ball out',
        'Get milk',
    ],
    completed: [
        'Take names'
    ],
    moveItem: jest.fn(),
};

let shallowRightPanel;

const rightPanel = () => {
  if (!shallowRightPanel) {
    shallowRightPanel = shallow(<RightPanel {...props} />)
  }
  return shallowRightPanel;
}


describe('components -> RightPanel: ', () => {
    beforeEach(() => {
      // clean up before each test
      shallowRightPanel = undefined;
    });

    it('should render two Lists', () => {
        expect(rightPanel().find(List).length).toEqual(2);
    });

    it('should call propMoveItem when onDrop is invoked', () => {
        const event = { preventDefault: () => jest.fn(), dataTransfer: { getData: id => '0,Stay woke' } };
        rightPanel().instance().onDrop(event, props.inProgress);
        expect(props.moveItem).toHaveBeenCalled();
    });
});