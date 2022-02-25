import React, { useState, useEffect } from 'react';
import '../CSS/HomePlans.css';
// import { render } from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

function HomePlans() {
  return (
    <div className='homePage'>
      <div className='page'>
        <h3>
          <Link to='/HomePlans.js'>Home Plans</Link>
        </h3>
        <h3>
          <Link to='/Lots.js'>Lots</Link>
        </h3>
      </div>

      <div className='verticalLine'></div>
      <h3>Saved Homes</h3>
    </div>
  );
}

export default HomePlans;
