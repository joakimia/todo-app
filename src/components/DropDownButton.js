import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';

import './styles/App.css';
import  styles from './styles/inline.styles';

export class DropDownButton extends Component {
    constructor(props) {
        super(props);
        this.buttonRef = React.createRef();
        this.state = { dropDownIsClicked: false };
    }

    componentWillMount() {
        document.addEventListener('mousedown', this.handleClick, false);
    };

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClick, false);
    }

    showButtons = () => {
        this.setState({ dropDownIsClicked: true });
    };

    hideButtons = () => {
        this.setState({ dropDownIsClicked: false });
    }

    handleClick = event => {
        if (!this.buttonRef.current.contains(event.target)) {
            this.hideButtons();
        }
    };

    onCompleted = () => {
        this.props.onCompleted();
        this.hideButtons();
    };

    onEdit = () => {
        this.props.onEdit();
        this.hideButtons();
    }

    onRemove = () => {
        this.props.onRemove();
        this.hideButtons();
    };

    render() {
        return (
            <div className="dropdown-container" ref={this.buttonRef}>
                {this.state.dropDownIsClicked ? (
                    <div className="dropdown-wrapper">
                        {this.props.className === 'inProgress' && (
                            <Button onClick={this.onCompleted}>Completed</Button>
                        )}
                        <Button onClick={this.onEdit}>Edit</Button>
                        <Button onClick={this.onRemove}>Remove</Button>
                    </div>
                ) : (
                    <IconButton 
                        style={styles.iconButton} 
                        onClick={this.showButtons}
                    >
                        <ArrowDropDown />
                    </IconButton>
                )}
            </div>
        );
    }
};

DropDownButton.propTypes = {
    className: PropTypes.string.isRequired,
    onCompleted: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
};

export default DropDownButton;