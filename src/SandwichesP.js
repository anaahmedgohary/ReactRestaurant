import React from 'react';

import SPheader from "./components/SandwichesP/header/SPheader"
import SPbody from "./components/SandwichesP/body/SPbody"
import CartSand from "./components/SandwichesP/body/cartsand"
import { CartProvider } from "react-use-cart";

import "./Styles/SandwichesP/SandwichesP.css"
const SandwichesP = () => {
    return (
      <>
        <CartProvider>
          <SPheader />

          <SPbody />

          <CartSand />
        </CartProvider>
      </>
    );
}

export default SandwichesP;
