import React from 'react';
import { shallow } from 'enzyme';
import { InputField } from '../InputField';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const baseProps = {
    className: 'class-name-string',
    addTodo: jest.fn(),
}

let shallowInputField;

const inputField = (partialProps = {}) => {
  if (!shallowInputField) {
    const props = {...baseProps, ...partialProps};
    shallowInputField = shallow(<InputField {...props} />)
  }
  return shallowInputField;
}


describe('components -> InputField: ', () => {
    beforeEach(() => {
      // clean up before each test
      shallowInputField = undefined;
    });

    it('should change the value of the text field when input is received', () => {
        const event = { target: { value: 'Some changed value text' }};
        
        inputField()
            .find(TextField)
                .simulate('change', event);
        expect(
            inputField().find(TextField).props().value
        ).toEqual('Some changed value text');
    });


    describe('without no text passed in as props', () => {
        it('should not render any buttons', () => {
            expect(inputField().find(Button).length).toEqual(0);
        });

        it('should display a placeholder', () => {
            expect(inputField()
                .find(TextField).props().placeholder
            ).toEqual('Write your To-Do here');
        });
    });

    describe('with text present or passed in as props', () => {
        beforeEach(() => {
            inputField({ text: 'Some existing text' });
        });

        it('should display the text', () => {
            expect(
                inputField().find(TextField).props().value
            ).toEqual('Some existing text');
        });

        it('should display two buttons', () => {
            expect(
                inputField().find(Button).length
            ).toEqual(2);
        });

        describe('the Add button', () => {
            it('should call prop onAddTodo when clicked', () => {
                const addBtn = inputField()
                    .find(Button).findWhere(btn => btn.props().children === 'Add');
                
                addBtn.simulate('click');
                expect(baseProps.addTodo).toHaveBeenCalled();
            });

        });

        describe('the onCancel button', () => {
            it('should clear the text when clicked', () => {
                const cancelBtn = inputField()
                    .find(Button).findWhere(btn => btn.props().children === 'Clear');
                
                cancelBtn.simulate('click');
                expect(inputField().find(TextField).props().value.length).toEqual(0);
            });
        });
    });

    describe('with onUpdate passed in as props', () => {
        it('should call prop onUpdate when clicked', () => {
            const props = { onUpdate: jest.fn(), text: 'Some updated text' };
            const addBtn = inputField(props)
                .find(Button).findWhere(btn => btn.props().children === 'Add');
            
            addBtn.simulate('click');
            expect(props.onUpdate).toHaveBeenCalled();
        });
    });
});