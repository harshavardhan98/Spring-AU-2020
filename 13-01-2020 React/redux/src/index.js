import React from 'react'
import ReactDOM, {render} from 'react-dom'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './rootReducer';

import App from './App';
import './index.css'

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);