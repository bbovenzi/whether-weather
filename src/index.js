import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import './index.scss';
import { Provider } from 'react-redux';
import Store from './store';

const StoreInstance = Store();

ReactDOM.render(
 <Provider store={StoreInstance}>
   <App />
 </Provider>,
 document.getElementById('root')
);
