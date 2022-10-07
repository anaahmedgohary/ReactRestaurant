import React from 'react';
import { useCart } from "react-use-cart";
import "./style/productcard/style.css";

const CardSandwich = (props) =>
{

    const { addItem } = useCart();


    return (
        <>
            <div className="card" style={{ width: "18rem" }}>
                <img className="card-img-top product-img" src={props.image} alt="" />
                <div className="card-body">
                    <h5 className="card-title text-center">{props.name}</h5>
                    <h6 className="card-title">{props.price} le</h6>
                    <p className="card-text text-center">
                        {props.description}
                    </p>
                    <button onClick={()=> addItem(props.item)} className="btn btn-primary">
                        Add To Cart
                    </button>
                </div>
            </div>
        </>
    );
}

export default CardSandwich;
