import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import * as moduleActions from '../actions';
import ErrorBoundary from './ErrorBoundary';

const mapStateToProps = (state) => ({
    state,
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(moduleActions, dispatch),
});

const App = ({ state }) => {
    if (process.env.NODE_ENV === 'development') {
        console.debug('debug-log', state);
    }

    return (
    <div className="app">
        <ErrorBoundary>
            <div />
        </ErrorBoundary>
    </div>
    );
};

App.propTypes = {
    state: PropTypes.shape({}).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
