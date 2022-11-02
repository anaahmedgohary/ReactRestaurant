import React from 'react';

import CartSand from "../allcars/body/cartsand";
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
