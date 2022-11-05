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
        <nav className="nav">
          <a href="/" className="nav-element">Home</a>
          {/* <a href="/allbrands" className="nav-element">Brands</a> */}
          <a href='/allcars' className="nav-element">Cars</a>

          <a href="/superbikes" className="nav-element">Bikes</a>

          <a className="nav-element" href="/join">Join</a>
          
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
    

