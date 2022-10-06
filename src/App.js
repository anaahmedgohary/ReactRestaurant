import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Mheader from './components/header/header';
import Mfooter from "./components/footer/Footer";
import Home from "./home"
import SignUp from "./components/signin-up/signup";
import SandwichesP from "./SandwichesP"
import CartP from "./CartP";




const App = () => {
    return (
      <Router>
        <Mheader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/Sandwiches" element={<SandwichesP />} />
          <Route path="/cart" element={<CartP />} />
        </Routes>
        <Mfooter />
      </Router>
    );
}

export default App;
