import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { sGetNewsArticles } from '../reducers/info';

const defaultState = {
    activeItem: 0,
    newsArticles: []
}

export class NewsPanel extends Component {
    state = { activeItem: defaultState.activeItem }

    componentDidMount() {
        setInterval(this.incrementCounter, 10000);
    };

    componentWillUnmount() {
        clearInterval(this.incrementCounter);
    };

    incrementCounter = () => {
        this.state.activeItem < (this.props.news.length - 1)
            ? this.setState({ activeItem: this.state.activeItem + 1 })
            : this.setState({ activeItem: defaultState.activeItem })
    };

    render() {
        return ( 
            <div className="newspanel">
                <h3>Today's headlines:</h3>
                {!!this.props.news.length && (
                    <div>{this.props.news[this.state.activeItem].description}</div>
                )}
            </div>
        );
    }
};

NewsPanel.propTypes = {
    news: PropTypes.array,
};

const mapStateToProps = state => ({
    news: sGetNewsArticles(state) || defaultState.newsArticles
});

export default connect(
    mapStateToProps, 
    null
)(NewsPanel);