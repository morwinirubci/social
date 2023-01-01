import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));



    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                    <App store={store}/>
                </Provider>
            </BrowserRouter>
        </React.StrictMode>
    );






reportWebVitals();
