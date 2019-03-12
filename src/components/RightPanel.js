import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import List from './List';
import NewsPanel from './NewsPanel';
import { sGetCompleted, sGetInProgress } from '../reducers/todos';
import { acMoveTodo } from '../actions/todos';

import './styles/App.css';

export class RightPanel extends Component {
    onDragOver = event => {
        event.preventDefault();
    };
    
    onDrop = (event, destArr) => {
        event.preventDefault();
        const item = event.dataTransfer.getData('id') 
        const stringToArr = item.split(",");

        const destArrIndex = 0;
        const idIndex = 1;
        
        this.props.moveItem({ 
            destArr,
            sourceArr: stringToArr[destArrIndex], 
            index: parseInt(stringToArr[idIndex], 10),
        });
    };

    render() {
        return (
            <div className="section-right">
                <List 
                    className="inProgress"
                    headerLabel="In progress"
                    onDragOver={this.onDragOver}
                    onDrop={this.onDrop}
                    items={this.props.inProgress}
                />
                <List
                    className="completed"
                    headerLabel="Completed"
                    onDragOver={this.onDragOver}
                    onDrop={this.onDrop}
                    items={this.props.completed}
                />
                <NewsPanel/>
            </div>
        );
    };
};

RightPanel.propTypes = {
    inProgress: PropTypes.array.isRequired,
    completed: PropTypes.array.isRequired,
    moveItem: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    inProgress: sGetInProgress(state),
    completed: sGetCompleted(state),
});
  
export default connect(
    mapStateToProps,
    {
        moveItem: acMoveTodo,
    }
)(RightPanel);