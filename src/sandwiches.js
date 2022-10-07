import React from 'react';

//import SPheader from "./components/sandwiches/header/SPheader"
import SPbody from "./components/sandwiches/body/SPbody"
import CartSand from "./components/sandwiches/body/cartsand"
import { CartProvider } from "react-use-cart";
//import "./Styles/sandwiches/sandwiches.css"

const Sandwiches = () => {
    return (
      <>
        <CartProvider>
          <SPbody />
          <CartSand />
        </CartProvider>
      </>
    );
}

export default Sandwiches;
