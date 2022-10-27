import React from 'react';
//import './drink-post/drink-post.css';

export default function DrinkPost(props)
{
    return (
        <div className='drink-post'>
            <div className='drink-name'>{props.name}</div>
            <div>
                <img src={props.img} className="post-img" title={props.name} alt="product img" />
                <div><button className='btn btn-success' onClick={(e) =>
                {
                    alert("well done! \ncart not hooked yet!")
                }}>Add to Cart</button></div>
            </div>
            <div>Size: {props.size}</div>
            <div>Sugar: {props.sugar}</div>
            <div>Price: {props.price}</div>
            
        </div>
    );
}

 
