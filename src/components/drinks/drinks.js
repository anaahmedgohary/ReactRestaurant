import React from "react";
import "./style/drinks.css";

import DrinksData from "./drinks-data";
import DrinkPost from "./drink-post";

import { CartProvider } from "react-use-cart";
import CartSand from "../allcars/body/cartsand";

export default function Drinks ()
{ 
    //let size = DrinksData.hotdrinks["size"];

    
    return (
        
        <CartProvider>
        <div className="" id="drinks-body">
            <div>
                <section className="drinks-sec forhot" id="hot-drink">
                    <h2 className="hot-drinks-title">Summer Super Bikes</h2>
                    <div className="drink-posts-container">
                        {DrinksData.hotdrinks.map((item, index) =>
                            {
                                return (
                                    <DrinkPost
                                        name={item.name}
                                        img={item.img}
                                        size={item.size}
                                        mileage={item.mileage}
                                        price={item.price}
                                        item={item}
                                        key={index}
                                    />
                                )
                            })}
                    </div>




                </section>
                <section className="drinks-sec forcold" id="cold-drink">
                    <h2 className="hot-drinks-title">Winter Super Bikes</h2>
                    <div className="drink-posts-container">
                        {DrinksData.colddrinks.map((item, index) =>
                        {
                            return (
                                <DrinkPost
                                    name={item.name}
                                    img={item.img}
                                    size={item.size}
                                    mileage={item.mileage}
                                    price={item.price}
                                    item={item}
                                    key={index}
                                    id={item.id}
                                />
                            )
                        })}
                    </div>
                </section>
            </div>

            </div>
            <div>
                <CartSand />
            </div>
        </CartProvider>
    )
};