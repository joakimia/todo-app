import React from 'react';
import { shallow } from 'enzyme';
import { Item } from '../Item';
import InputField from '../InputField';
import DropDownButton from '../DropDownButton';

const props = {
    className: 'class-name-string',
    text: 'text passed from props',
    index: 0,
    updateTodo: jest.fn(),
    removeTodo: jest.fn(),
}

let shallowItem;

const item = () => {
  if (!shallowItem) {
    shallowItem = shallow(<Item {...props} />)
  }
  return shallowItem;
}


describe('components -> Item: ', () => {
    beforeEach(() => {
      // clean up before each test
      shallowItem = undefined;
    });

    describe('when state isEditing is equal to false', () => {
        it('should display the text passed from prop', () => {
            expect(item().find('span').text()).toEqual(props.text);
        });

        it('should display a DropDownButton', () => {
            expect(item().find(DropDownButton).length).toEqual(1)
        });

        it('should not display an InputField', () => {
            expect(item().find(InputField).length).toEqual(0)
        });
    });

    describe('when state isEditing is equal to true', () => {
        beforeEach(() => {
            item().setState({ isEditing: true });
        });

        it('should display an InputField', () => {
            expect(item().find(InputField).length).toEqual(1)
        });

        it('should not a DropDownButton', () => {
            expect(item().find(DropDownButton).length).toEqual(0)
        });

        describe('the InputField', () => {
            it('should recieve the text passed from props', () => {
                expect(item().find(InputField).props().text).toEqual(props.text)
            });
        });
    });
});