import React from 'react';
import { shallow } from 'enzyme';
import DropDownButton from '../DropDownButton';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

const props = {
    className: 'class-name-string',
    onCompleted: jest.fn(),
    onEdit: jest.fn(),
    onRemove: jest.fn(),
}

let shallowDropDown;

const dropDown = () => {
  if (!shallowDropDown) {
    shallowDropDown = shallow(<DropDownButton {...props} />)
  }
  return shallowDropDown;
}

describe('components -> DropDownButton: ', () => {
  beforeEach(() => {
    // clean up before each test
    shallowDropDown = undefined;
  });

  describe('when state dropDownIsClicked is equal to false', () => {
      it('should render an IconButton', () => {
        expect(
            dropDown().find(IconButton).length).toEqual(1);
      });

      describe('the IconButton: ', () => {
          it('should change state dropDownIsClicked when clicked', () => {
              dropDown().find(IconButton).simulate('click');

              expect(dropDown().state().dropDownIsClicked).toEqual(true);
          });
      });
  });

  describe('when state dropDownIsClicked is equal to true', () => {
    beforeEach(() => {
        dropDown().setState({ dropDownIsClicked: true })
    });

    it('should render three buttons', () => {
        const buttons = dropDown().find(Button);
        expect(buttons.length).toEqual(3);
    });

    describe('the Completed button', () => {
        it('should call prop onCompleted when clicked', () => {
            const completedBtn = dropDown()
                .find(Button)
                    .findWhere(button => 
                        button.props().children === 'Completed'
                    )

            completedBtn.simulate('click');                     
            expect(props.onCompleted).toHaveBeenCalled();
        });
    });

    describe('the Edit button', () => {
        it('should call prop onEdit when clicked', () => {
            const editBtn = dropDown()
                .find(Button)
                    .findWhere(button => 
                        button.props().children === 'Edit'
                    )

            editBtn.simulate('click');                     
            expect(props.onEdit).toHaveBeenCalled();
        });
    });

    describe('The Remove button', () => {
        it('should call prop onRemove when clicked', () => {
            const removeBtn = dropDown()
                .find(Button)
                    .findWhere(button => 
                        button.props().children === 'Remove'
                    )

            removeBtn.simulate('click');                     
            expect(props.onRemove).toHaveBeenCalled();
        });
    });

  });
});

