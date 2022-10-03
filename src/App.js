import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./home"
import SignUp from "./components/signin-up/signup";
import SandwichesP from "./SandwichesP"
import CartP from "./CartP";




const App = () => {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/Sandwiches" element={<SandwichesP />} />
          <Route path="/cart" element={<CartP />} />
        </Routes>
      </Router>
    );
}

export default App;
