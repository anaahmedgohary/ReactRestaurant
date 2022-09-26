import React from "react";
import { useCart } from "react-use-cart";
import "./style/productcard/style.css";

const CartSand = () => {
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
    if (isEmpty) return <h1 className="cart-empty">Cart is empty!</h1>

  return (
    
          <section className="py-4 container">
              <div className="row justify-content-center">
                  <div className="col-12">
                      <h5 className="added-items-row"> ({totalItems}) items in Cart.  from ({totalUniqueItems}) categories</h5>
                      <table className="table order-sheet">
                          {items.map((item, index) =>
                          {
                              return (
                                  <tbody>
                                      <tr className="table-headers">
                                          <th></th>
                                          <th></th>
                                          <th>price</th>
                                          <th>quantity</th>
                                          <th></th>
                                      </tr>
                                      
                                      <tr>
                                          <td>
                                              <img src={item.image} alt="" style={{ width: "8rem" }} />
                                          </td>
                                          <td>{item.name}</td>
                                          <td> {item.price} </td>
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
                  <div className="col-auto ms-auto total-div">
                      <h2>
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
