import React from 'react';
//import { useState, useEffect } from "react";
import $ from "jquery";
import "./style/style.css"





const Mfooter = (props) =>
{



  

  return (
    <>

      <footer className="FOOTER">
        {/* <div className="footer-title">
          Resturant
        </div> */}
        <div className="above-icon">Reach us</div>
        <div className="fotr-icon-div" id='contactsDiv'>
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
          <p className='call-label'>Call Us!</p>
          <div className='phone-numbers'>
            <div className='num-div'>
              <a href="tel:+201000267277" className='btn btn-info' title='CALL NOW'>+201000555555</a>
              <button
                onClick={(e) => { alert(`copied ${$(e.target).parent().find("a").text()}`)}}
                className='copy-num btn btn-success'
                title='copy to clipboard'>
                copy
              </button>
            </div>
            <div className='num-div'>
              <a href="tel:+201000267277" className='btn btn-info' title='CALL NOW'>+201000444444</a>
              <button className='copy-num btn btn-success' title='copy to clipboard'>copy</button>
            </div>
            <div className='num-div'>
              <a href="tel:+201000267277" className='btn btn-info' title='CALL NOW'>+201000333333</a>
              <button className='copy-num btn btn-success' title='copy to clipboard'>copy</button>
            </div>
          </div>
        </div>
      </footer>

    </>

  )


}


export default Mfooter