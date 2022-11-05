import React from 'react';
//import './drink-post/drink-post.css';
import { useCart } from "react-use-cart";

export default function DrinkPost(props)
{

    const { addItem } = useCart();

    return (
        <div className='drink-post'>
            <div className='drink-name'>{props.name}</div>
            <div>
                <img src={props.img} className="post-img" title={props.name} alt="product img" />
                <div><button className='btn btn-success' onClick={(e) =>
                {
                    addItem(props.item);
                    // alert("well done! \ncart not hooked yet!");
                }}>add to Wishlist</button></div>
            </div>
            <div>Wheels: {props.size}</div>
            <div>Mileage: {props.mileage}</div>
            <div>Price: {props.price}</div>
        </div>
    );
}

 
