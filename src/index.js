import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import store from "./App/store";
import { Normalize } from "styled-normalize";

ReactDOM.render(
    <StrictMode>
        <Provider store={store}>
            <Normalize />
            <App />
        </Provider>
    </StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
