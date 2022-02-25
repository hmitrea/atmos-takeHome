import React from 'react';

import '../CSS/App.css';
import HomePlans from './HomePlans';
import Lots from './Lots.js';

//
const App = (props) => {
  return (
    <div className='App'>
      <React.Fragment>
        <HomePlans />
      </React.Fragment>
    </div>
  );
};

export default App;
