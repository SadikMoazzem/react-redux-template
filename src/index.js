import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import App from './modules/app/modules/container';
import store from "./modules/store/store";
import './sass/app.scss';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
