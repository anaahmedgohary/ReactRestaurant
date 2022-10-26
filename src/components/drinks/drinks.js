import React from "react";
import "./style/drinks.css";

import DrinksData from "./drinks-data";
import DrinkPost from "./drink-post";

export default function Drinks ()
{ 
    //let size = DrinksData.hotdrinks["size"];

    
    
    return (
        <div className="" id="drinks-body">
            <div>
                <section className="drinks-sec forhot" id="hot-drink">
                    <h2 className="hot-drinks-title">Hot Drinks</h2>
                    <div className="drink-posts-container">
                        {DrinksData.hotdrinks.map((item, index) =>
                            {
                                return (
                                    <DrinkPost
                                        name={item.name}
                                        img={item.img}
                                        size={item.size}
                                        sugar={item.sugar}
                                        price={item.price}
                                        item={item}
                                        key={index}
                                    />
                                )
                            })}
                    </div>




                </section>
                <section className="drinks-sec forcold" id="cold-drink">
                    <h2 className="hot-drinks-title">Cold Drinks</h2>
                    <div className="drink-posts-container">
                        {DrinksData.colddrinks.map((item, index) =>
                        {
                            return (
                                <DrinkPost
                                    name={item.name}
                                    img={item.img}
                                    size={item.size}
                                    sugar={item.sugar}
                                    price={item.price}
                                    item={item}
                                    key={index}
                                />
                            )
                        })}
                    </div>
                </section>
            </div>

        </div>
    )
};