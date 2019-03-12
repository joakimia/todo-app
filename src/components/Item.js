import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import InputField from './InputField';
import DropDownButton from './DropDownButton';
import { 
    acMoveTodo, 
    acUpdateTodo, 
    acRemoveTodo 
} from '../actions/todos';

export class Item extends Component {
    state = { isEditing: false };

    onDragStart = event => {
        event.dataTransfer.setData(
            'id',
            this.props.className.concat(`,${this.props.index}`)
        );
    };

    onCompleted = () => {
        this.props.moveItem({
            sourceArr: this.props.className,
            destArr: 'completed', 
            index: this.props.index,
        });
    };

    onToggleEdit = () => {
        this.setState({ isEditing: !this.state.isEditing });
    };

    onUpdate = newText => {
        this.props.updateTodo({ 
            sourceArr: this.props.className,
            index: this.props.index,
            text: newText, 
        });
        this.onToggleEdit();
    };

    onRemoveTodo = () => {
        this.props.removeTodo({ 
            sourceArr: this.props.className,
            index: this.props.index,
        });
    };

    render() {
        return (
            <li 
                draggable
                className="list-item"
                onDragStart={this.onDragStart}
            >
                {this.state.isEditing ? (
                    <InputField 
                        onUpdate={this.onUpdate} 
                        onCancel={this.onToggleEdit} 
                        text={this.props.text} 
                    />
                ) : (
                    <div className="todo-container">
                        <span>{this.props.text}</span>
                        <DropDownButton
                            className={this.props.className}
                            onCompleted={this.onCompleted} 
                            onEdit={this.onToggleEdit} 
                            onRemove={this.onRemoveTodo} 
                        />
                    </div>
                )}
            </li>
        );
    };
};

Item.propTypes = {
    className: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    updateTodo: PropTypes.func.isRequired,
    removeTodo: PropTypes.func.isRequired,
};

export default connect(
    null,
    {
        moveItem: acMoveTodo,
        updateTodo: acUpdateTodo,
        removeTodo: acRemoveTodo,
    }
)(Item);