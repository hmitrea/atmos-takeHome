import React from 'react';
import ReactDOM from 'react-dom';
import './CSS/index.css';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

import App from './Components/App';
import HomePlans from './Components/HomePlans.js';
import Lots from './Components/Lots.js';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='homeplans' element={<HomePlans />} />
      <Route path='lots' element={<Lots />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
