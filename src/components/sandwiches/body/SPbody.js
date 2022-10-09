import React from "react";

import "./style/spbody.css";

import CardSandwich from "./cardSandwich"
import dataSandwich from "./dataSandwich"


const SPbody = () =>
{
  
  // console.warn(dataSandwich.allSandwiches);


  return (
    <div className="spbody">
      <div className="container py-4 prod-cards">
        <div className="row justify-content-center sandwich-card-container">
          {dataSandwich.allSandwiches.map((item, index) => {
            return (
              <CardSandwich
                image={item.image}
                name={item.name}
                price={item.price}
                description={item.description}
                item={item}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SPbody;
