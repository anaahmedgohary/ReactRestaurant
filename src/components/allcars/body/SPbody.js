import React from "react";

import "./style/spbody.css";

import ItemCard from "./itemcard"
import ProductData from "./productdata"


const SPbody = () =>
{
  
  // console.warn(dataSandwich.allSandwiches);


  return (
    <div className="spbody">
      <div className="container py-4 prod-cards">
        <div className="sandwich-cards-container">
          {ProductData.allSandwiches.map((item, index) => {
            return (
              <div>
                  <ItemCard
                    img={item.img}
                    name={item.name}
                    price={item.price}
                    description={item.description}
                    item={item}
                    key={index}
                  />
                </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SPbody;
