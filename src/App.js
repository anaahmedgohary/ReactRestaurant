import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Mheader from './components/header/header';
import Mfooter from "./components/footer/Footer";
import Home from "./home"
import SignUp from "./components/signin-up/signup";
import Sandwiches from "./sandwiches"
import CartP from "./CartP";
import Drinks from './components/drinks/drinks';
import Meals from './components/meals/meals';




const App = () => {
    return (
      <Router>
        <Mheader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/sandwiches" element={<Sandwiches />} />
          <Route path="/cart" element={<CartP />} />
          <Route path="/drinks" element={<Drinks />} />
          <Route path="/meals" element={<Meals />} />
        </Routes>
        <Mfooter />
      </Router>
    );
}

export default App;
