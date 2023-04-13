//IMPORTS
import React from 'react';
import ReactDOM from 'react-dom/client';
//ROUTER-DOM && REDUX
import {BrowserRouter, Route,Routes} from 'react-router-dom';
import { Provider } from 'react-redux';
import Store from './Redux/Store'
//COMPONENTS
import Dashboard from './Dashboard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Provider store={Store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
      </Routes>
    </BrowserRouter>
  </Provider>
);


