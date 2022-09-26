import React from 'react';

import Mheader from './components/header/header';
//import Test from "./footer/footer"
import Mfilters from "./components/filters/filters";
import Sandwitch from "./components/sandwiches/sandwiches";
import Mfooter from "./components/footer/Footer";

const Home = () => {
    return (
      <div>
        <div>
          <Mheader />
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
    );
}

export default Home;
