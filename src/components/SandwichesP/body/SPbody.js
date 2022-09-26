import React from "react";

import "./style/spbody.css";

import CardSandwich from "./cardSandwich"
import dataSandwich from "./dataSandwich"


const SPbody = () =>
{
  
  // console.warn(dataSandwich.allSandwiches);


  return (
    
    <div className="spbody">
      <div id="viewCart">
        <a id="viewCartBtn" href="/cart" title="View Cart">
          <img className="carticon" src="./images/carticon2.jpg" alt="" />
        </a>
        <p id="cartCounter">
          {}
        </p>
      </div>

      <div className="container py-4 prod-cards">
        <div className="row justify-content-center">

          {dataSandwich.allSandwiches.map((item, index) =>
          {
            return (
              <CardSandwich
                image={item.image}
                name={item.name}
                price={item.price}
                description={item.description}
                item={item}
                key={index} />
            )
          })}
        </div>
      </div>
      
    </div>
  );
};

export default SPbody;
