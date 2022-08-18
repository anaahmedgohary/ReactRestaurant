import React from "react";
import { useCart } from "react-use-cart";

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
    if (isEmpty) return <h1> nothing in cartoo</h1>

  return (
    <>
          <section className="py-4 container">
              <div className="row justify-content-center">
                  <div className="col-12">
                      <h5>Cart ({totalUniqueItems}) total items: ({totalItems})</h5>
                      <table className="table">
                          {items.map((item, index) =>
                          {
                              return (
                                  <tbody>
                                      <tr>
                                          <td>
                                              <img src={item.image} alt="" style={{ width: "8rem" }} />
                                          </td>
                                          <td>{item.name}</td>
                                          <td> {item.price} </td>
                                          <td> quantity ({item.quantity})</td>
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
                  <div className="col-auto ms-auto">
                      <h2>
                          Total Price: {cartTotal} (LE)
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
    </>
  );
};

export default CartSand;
