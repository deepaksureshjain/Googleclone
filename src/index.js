import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import App from './components/app';
import reducer, { initialState } from './reducer';
import { StateProvider } from './StateProvider';

ReactDom.render(
    <StateProvider initialState={initialState} reducer={reducer}>
        <App />
    </StateProvider>,document.querySelector('#root'));