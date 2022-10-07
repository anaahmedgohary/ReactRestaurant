import React from 'react';



import "./style/cartstyle.css"


import CartSand from "../sandwiches/body/cartsand";
import { CartProvider } from "react-use-cart";

const Cart = () =>
{
    
    
    

    return (
      <div>
        <>
          <CartProvider>

            <CartSand />
          </CartProvider>
        </>
      </div>
    );
}

export default Cart;
