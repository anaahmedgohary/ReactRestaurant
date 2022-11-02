import React from 'react';

//import SPheader from "./components/allbrands/header/SPheader"
import SPbody from "./components/allcars/body/SPbody"
import CartSand from "./components/allcars/body/cartsand"
import { CartProvider } from "react-use-cart";
//import "./Styles/sandwiches/sandwiches.css"

const AllCars = () => {
    return (
      <>
        <CartProvider>
          <SPbody />
          <CartSand />
        </CartProvider>
      </>
    );
}

export default AllCars;
