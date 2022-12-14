import React from 'react';
import { useCart } from "react-use-cart";
import "./style/productcard/style.css";

const ItemCard = (props) =>
{

    const { addItem } = useCart();


    return (
        <div className='cards-sec'>
            <div className="card mycard">
                <img className="product-img" src={props.img} alt="" />
                <div className="card-body">
                    <h5 className="card-title text-center">{props.name}</h5>
                    <h6 className="card-title">Price: ${props.price}</h6>
                    <p className="card-text text-center">
                        {props.description}
                    </p>
                    <button onClick={()=> addItem(props.item)} className="btn btn-success addtobtn">
                        add to Wishlist
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ItemCard;
