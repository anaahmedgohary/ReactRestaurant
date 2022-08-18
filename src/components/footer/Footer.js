import React from 'react';
//import { useState, useEffect } from "react";

import "./style/style.css"





const Mfooter = (props) =>
{



  

  return (
    <>

      <footer className="FOOTER">
        <div className="footer-title">
          Shahd Resturant
        </div>
        <div className="above-icon">تواصل معانا</div>
        <div className="fotr-icon-div">
          <a href="https://wa.me/201000267277">
            <img className="footer-icon" src={require("./images/whatsapp-logo.png")} title="whatsapp" alt='' /></a>
          <a href="http://www.facebook.com" >
            <img className="footer-icon" src={require("./images/facebook-logo.png")} title="facebook" alt='' /></a>
          <a href="http://www.instagram.com" >
            <img className="footer-icon" src={require("./images/instagram-logo.png")} title="instagram" alt='' /></a>
          <a href="http://www.tiktok.com" >
            <img className="footer-icon" src={require("./images/tiktok-logo.png")} title="tiktok" alt='' /></a>
          <a href="http://www.youtube.com" >
            <img className="footer-icon" src={require("./images/youtube-logo.png")} title="youtube" alt='' /></a>
          <a href="mailto:shahdresturant@gmail.com" >
            <img className="footer-icon" src={require("./images/email-icon.png")} title="email" alt='' /></a>
           {/* <a href="" target="_blank"><img className="footer-icon" src="" alt=""></a> */}
        </div>
        <div className="phone-num-div">
          <p>phone numbers:</p>
          <p>201000267277</p>
        </div>
      </footer>

    </>

  )


}


export default Mfooter