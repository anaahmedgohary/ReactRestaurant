import React from 'react';



import "./style/cartstyle.css"

import SPheader from "../SandwichesP/header/SPheader";

import CartSand from "../SandwichesP/body/cartsand";
import { CartProvider } from "react-use-cart";

const Cart = () =>
{
    
    
    

    return (
      <div>
        <>
          <CartProvider>
            <SPheader />

            

            <CartSand />
          </CartProvider>
        </>
      </div>
    );
}

export default Cart;
