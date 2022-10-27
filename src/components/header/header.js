import React from 'react';
//import { useState, useEffect } from "react";


import "./headerstyles/hederstyle.css"
import $ from "jquery";



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
          <h3>𝕭𝖊𝖘𝖙 𝕱𝖗𝖊𝖘𝖍 𝕴𝖓𝖌𝖗𝖊𝖉𝖎𝖊𝖓𝖙𝖘</h3>
          <i className="fa-solid fa-burger fa-2x"></i>
        </div>
        <nav className="nav">
          <a href="/" className="nav-element">Home</a>
          <a href="/sandwiches" className="nav-element">Sandwiches</a>
          <a href='/drinks' className="nav-element">Drinks</a>
          <a href='/meals' className="nav-element">Meals</a>
            <a className="nav-element" href="/signup">Sign Up</a>
          <a href='#contactsDiv' className="nav-element">Contact</a>
        </nav>
        <div className='sidebarTriger'> {/*style={{ display: "none" }}*/}
          <button id='sidebarBtn' className='onfold' onClick={(e) =>
          {
            //$(".nav").fadeToggle(200);
            $(".nav").toggleClass('sidebar-nav');
            $("#sidebarBtn").toggleClass('onfold');
            $("#sidebarBtn").toggleClass('onclose');
          }}>
            
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>
    );  
}






export default Mheader;
    

