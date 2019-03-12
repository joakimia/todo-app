import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { acAddTodo } from '../actions/todos';

import './styles/App.css';
import styles from './styles/inline.styles';

const defaultState = '';

export class InputField extends Component {
    state = { text: this.props.text || defaultState };

    onInputChange = text => {
        this.setState({ text });
    };

    onClear = () => {
        this.setState({ text: defaultState });
    }

    onKeyDown = event => {
        if (event.key === 'Enter') {
            event.preventDefault();
            this.props.onUpdate 
                ? this.props.onUpdate(this.state.text) 
                : this.onAddTodo();

        } else if (event.key === 'Escape') {
            event.preventDefault();
            this.onClear();
        };
    };

    onAddTodo = () => {
        if (this.state.text.length) {
            this.props.addTodo({
                destArr: this.props.className,
                text: this.state.text
            });
            this.onClear();
        }
    };

    render() {
        const onClick = this.props.onUpdate 
            ? () => this.props.onUpdate(this.state.text) 
            : this.onAddTodo;
        
        const cancelLabel = this.props.onCancel ? 'Cancel' : 'Clear';

        return (
            <div className="input-field">
                <TextField
                    multiline
                    style={styles.textField}
                    InputProps={{ disableUnderline: true }}
                    placeholder="Write your To-Do here"
                    value={this.state.text}
                    onKeyDown={this.onKeyDown}
                    onChange={event => this.onInputChange(event.target.value)}
                />
                {!!this.state.text.length && (
                    <div className="buttons">
                        <Button onClick={onClick}>Add</Button>
                        <Button onClick={this.props.onCancel || this.onClear}>
                            {cancelLabel}
                        </Button>
                    </div>
                )}
            </div>
        );
    };
};

InputField.defaultProps = {
    text: null,
    onUpdate: null,
    onCancel: null,
    className: "inProgress",
};

InputField.propTypes = {
    text: PropTypes.string,
    addTodo: PropTypes.func.isRequired,
    onUpdate: PropTypes.func,
    onCancel: PropTypes.func,
};

export default connect(
    null,
    { addTodo: acAddTodo }
)(InputField);