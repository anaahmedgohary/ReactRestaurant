import React from "react";
import { useCart } from "react-use-cart";
import "./style/productcard/counter/counter.css";

const CartSand = () =>
{
    
    //let cartcounter = document.getElementById("cartCounter");
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();

    
    if (isEmpty)
    {
        //cartcounter.textContent = 0;
        return <h1 className="cart-empty">Cart is empty!</h1>
    };

  return (
    
    <section className="py-4 cart-div">
          
        <div id="viewCart">
            <a id="viewCartBtn" href="/cart" title="View Cart">
                <img className="carticon" src="./images/carticon2.jpg" alt="cart" />
            </a>
            <p id="cartCounter">{totalItems}</p>
        </div>

        <div className="row justify-content-center">
            <div className="col-12">
                <h5 className="added-items-row"> ({totalItems}) items in Cart.  from ({totalUniqueItems}) categories</h5>
                  <table className="rowcontent" id="thetable">
                    {items.map((item, index) =>
                    {
                        return (
                            <tbody className="mytablebody rowcontent">
                                
                                
                                <tr className="rowcontent">
                                    <td>
                                        <img src={item.image} className="cartrowimg" alt="productimage" />
                                    </td>
                                    <td>{item.name}</td>
                                    <th>price</th>
                                    <td> {item.price} </td>
                                    <th>quantity</th>
                                    <td className="item-qty">{item.quantity}</td>
                                    <td>
                                        <button className="btn btn-danger ms-2"
                                            onClick={() => { updateItemQuantity(item.id, item.quantity -1) }}>-</button>
                                        <button className="btn btn-info ms-2"
                                            onClick={() => { updateItemQuantity(item.id, item.quantity + 1) }}>+</button>
                                        <button className="btn btn-danger ms-2"
                                            onClick={() => { removeItem(item.id)}}>Remove item</button>
                                    </td>
                                </tr>
                            </tbody>
                        )
                    })}
                    
                    
                </table>
            </div>
            <div className="col-auto ms-auto total-div container">
                  <h2 className="container">
                    Total Price (LE): <strong> {cartTotal} </strong> 
                </h2>
            </div>
            <div>
                <button className="btn btn-danger ms-2" onClick={emptyCart}>
                    Clear Cart
                </button>
            </div>
        </div>
            
            {/* {console.warn(items)} */}

    </section>
    
  );
};

export default CartSand;
