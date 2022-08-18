import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./home"
import SandwichesP from "./SandwichesP"
import CartP from "./CartP";




const App = () => {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Sandwiches" element={<SandwichesP />} />
          <Route path="/cart" element={<CartP />} />
        </Routes>
      </Router>
    );
}

export default App;
