import React from 'react';

import Mheader from './header/header';
//import Test from "./footer/footer"
import Mfilters from "./filters/filters";
import Sandwitch from "./sandwiches/sandwiches";
import Mfooter from "./footer/Footer";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


const AppO = () => {
  

  return (
    <Router>
      <div>
        <div>
          <Mheader incrementBy={1} />
        </div>
        <div>
          <Mfilters />
        </div>
        <div>
          <Sandwitch />
        </div>
        <div>
          <Mfooter />
        </div>


      </div>
    </Router>
  );
};

export default AppO;