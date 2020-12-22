import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import ReactGA from 'react-ga';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';

import store from './modules/store/store';
import * as serviceWorker from './serviceWorker';

import swConfig from './swConfig';
import App from './modules/app/components/App';

import './sass/app.scss';

console.log(`App loaded in ${process.env.NODE_ENV}`);

const SENTRY_DSN = process.env.REACT_APP_SENTRY_DSN;
const GA_DSN = process.env.REACT_APP_GA_DSN;

if (SENTRY_DSN && process.env.NODE_ENV === 'production') {
    console.log('Sentry Set');
    Sentry.init({
        dsn: SENTRY_DSN,
        autoSessionTracking: true,
        integrations: [
            new Integrations.BrowserTracing(),
        ],
        // We recommend adjusting this value in production, or using tracesSampler
        // for finer control
        tracesSampleRate: 1.0,
    });
} else {
    console.error('SENTRY DSN not set')
}

if (GA_DSN && process.env.NODE_ENV === 'production') {
    console.log('Google Analytics Set');
    ReactGA.initialize(GA_DSN, {
        debug: true,
        titleCase: false,
    });
} else {
    console.error('Google Analytics not set');
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register(swConfig);
