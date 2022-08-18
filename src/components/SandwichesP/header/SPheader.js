import React from 'react';

import "./style/spheader.css"

const SPheader = () => {
    return (
        <div>
            <header>
                <div className="main-title">
                    <p>شهد</p>
                </div>
                <div className="main-subtitle">
                    <i className="fa-solid fa-pizza-slice fa-2x"></i>

                    <h3> أحلي أكل عندنا </h3>

                    <i className="fa-solid fa-burger fa-2x"></i>

                    
                </div>
                <nav className="nav main-nav">
                    <span className="nav-element"><a className="nav-link" href="/">Home</a></span>
                    <span className="nav-element"><a className="nav-link" href="/Sandwiches" target="_blank">Sandwiches</a></span>
                    <span className="nav-element">Dishes</span>
                    <span className="nav-element">Meals</span>
                    <span className="nav-element">Pizza</span>
                    <span className="nav-element">Extras</span>
                    <span className="nav-element">Sweets</span>
                    <span className="nav-element">Drinks</span>
                    <span className="nav-element">اتصل بنا</span>
                </nav>
            </header>
        </div>
    );
}

export default SPheader;
