import React from 'react';
import { useState, useEffect } from "react";


import "./headerstyles/hederstyle.css"



const Mheader = (props)=>
{
    
    const [Mesh, setMesh] = useState(0);

    const VisitCount = ()=>{
        setMesh(Mesh + props.incrementBy)
        
        console.log(Mesh)
    };

    useEffect (()=>{
        let zbutun = document.querySelectorAll("#bobio")[0]
        //zbutun.current.click()
        zbutun.click()
    }, [])
    
    return (
        <header>
            <div className="main-title">
                شهد
            </div>
            <div className="main-subtitle">
                <i className="fa-solid fa-pizza-slice fa-2x"></i>
                
                <h3> أحلي أكل عندنا </h3>
                
                <i className="fa-solid fa-burger fa-2x"></i>

                <div id='countVisitors'>
                    <button id='bobio' className="btn btn-info" onClick={VisitCount}>visit counter</button>
                    <p>{Mesh}</p>
                </div>
            </div>
            <nav className="nav main-nav">
                <span className="nav-element"><a className="" href="/">Home</a></span>
                <span className="nav-element"><a className="" href="/Sandwiches" target="_blank">Sandwiches</a></span>
                <span className="nav-element">Dishes</span>
                <span className="nav-element">Meals</span>
                <span className="nav-element">Pizza</span>
                <span className="nav-element">Extras</span>
                <span className="nav-element">Sweets</span>
                <span className="nav-element">Drinks</span>
                <span className="nav-element">اتصل بنا</span>
            </nav>
      </header>
  )  
}






export default Mheader;
    

