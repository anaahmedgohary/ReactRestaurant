import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Mheader from './components/header/header';
import Mfooter from "./components/footer/Footer";
import Home from "./home"
import SignUp from "./components/signin-up/signup";
import AllCars from "./allcars"
import CartP from "./CartP";
import Drinks from './components/drinks/drinks';




const App = () => {
    return (
      <Router>
        <Mheader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/join" element={<SignUp />} />
          <Route path="/allcars" element={<AllCars />} />
          <Route path="/cart" element={<CartP />} />
          <Route path="/superbikes" element={<Drinks />} />
        </Routes>
        <Mfooter />
      </Router>
    );
}

export default App;
