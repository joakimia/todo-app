import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { sGetXkcdLink } from '../reducers/info';

import './styles/App.css';
import styles from './styles/inline.styles';

export class Xkcd extends Component {
    state = { dialogIsOpen: false }
    
    onOpenDialog = () => {
        let backdrop = document.createElement('div');

        backdrop.setAttribute('class', 'xkcd-backdrop');
        backdrop.setAttribute('id', 'backdrop');
        backdrop.onclick = () => this.onCloseDialog();
        document.body.appendChild(backdrop);

        this.setState({ dialogIsOpen: true })
    };

    onCloseDialog = () => {
        document.body.removeChild(document.getElementById('backdrop'));
        this.setState({ dialogIsOpen: false });
    }
    
    render() {
        return (
            <div className="xkcd-field">
            <h3>XKCD:</h3>
                {this.props.xkcdImg && (
                    <div 
                        className="xkcd-img-wrapper"
                        onClick={this.onOpenDialog}
                    >
                        <img
                            style={styles.xkcdImgTag}
                            src={this.props.xkcdImg.src}
                            alt={this.props.xkcdImg.alt}
                            title={this.props.xkcdImg.title}
                        />
                    </div>
                )}
                {this.state.dialogIsOpen && (
                    <dialog 
                        open
                        className="xkcd-popup"
                    >
                        <img
                            style={styles.xkcdImgTag}
                            src={this.props.xkcdImg.src}
                            alt={this.props.xkcdImg.alt}
                            title={this.props.xkcdImg.title}
                        />
                    </dialog>
                )}
            </div>
        );
    }
};

Xkcd.propTypes = {
    xkcdImg: PropTypes.shape({
        src: PropTypes.string,
        alt: PropTypes.string,
        title: PropTypes.string,
    }),
};

const mapStateToProps = state => ({
    xkcdImg: sGetXkcdLink(state),
});

export default connect(
    mapStateToProps,
    null
)(Xkcd);