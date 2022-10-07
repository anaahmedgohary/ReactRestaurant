import React from 'react';
//import { useState, useEffect } from "react";


import "./headerstyles/hederstyle.css"



const Mheader = (props)=>
{
    
    

    

    // useEffect (()=>{
    //     let zbutun = document.querySelectorAll("#bobio")[0]
    //     //zbutun.current.click()
    //     zbutun.click()
    // }, [])
    
    return (
      <header>
        {/* <div className="main-title">Restaurant</div> */}
        <div className="main-subtitle">
          <i className="fa-solid fa-pizza-slice fa-2x"></i>
          <h3>Best Fresh Ingredients</h3>
          <i className="fa-solid fa-burger fa-2x"></i>
        </div>
        <nav className="nav main-nav">
          <a href="/" className="nav-element">Home</a>
          <a href="/sandwiches" className="nav-element">Sandwiches</a>
          <a href='/drinks' className="nav-element">Drinks</a>
          <a href='/meals' className="nav-element">Meals</a>
            <a className="nav-element" href="/signup">Sign Up</a>
          <a href='#contactsDiv' className="nav-element">Contact</a>
        </nav>
      </header>
    );  
}






export default Mheader;
    

