import React from 'react';
//import { useState, useEffect } from "react";
import $ from "jquery";
import "./style/style.css"
import AOS from 'aos';
import 'aos/dist/aos.css';





const Mfooter = (props) =>
{

  AOS.init();

  function copyToClipboard(text)
  {
    const sampleTextarea = document.createElement("textarea");
    document.body.appendChild(sampleTextarea);
    sampleTextarea.value = text; //save main text in it
    sampleTextarea.select(); //select textarea contenrs
    document.execCommand("copy");
    document.body.removeChild(sampleTextarea);
  }

  function myFunction(e)
  {
    const copyText = $(e.target).parent().find("a").text();
    copyToClipboard(copyText);
    alert(`copied ${$(e.target).parent().find("a").text()}`);
  }

  

  return (
    <>

      <footer className="FOOTER">
        {/* <div className="footer-title">
          Resturant
        </div> */}
        <div className="above-icon">Reach Us!</div>
        <div className="fotr-icon-div" id='contactsDiv'>
          <a data-aos="fade-right" data-aos-delay="250" href="https://wa.me/201000212212">
            <img className="footer-icon" src={require("./images/whatsapp-logo.png")} title="whatsapp" alt='' /></a>
          <a data-aos="fade-right" data-aos-delay="150" href="http://www.facebook.com" >
            <img className="footer-icon" src={require("./images/facebook-logo.png")} title="facebook" alt='' /></a>
          <a data-aos="fade-right" data-aos-delay="50" href="http://www.instagram.com" >
            <img className="footer-icon" src={require("./images/instagram-logo.png")} title="instagram" alt='' /></a>
          <a data-aos="fade-left" data-aos-delay="50" href="http://www.tiktok.com" >
            <img className="footer-icon" src={require("./images/tiktok-logo.png")} title="tiktok" alt='' /></a>
          <a data-aos="fade-left" data-aos-delay="150" href="http://www.youtube.com" >
            <img className="footer-icon" src={require("./images/youtube-logo.png")} title="youtube" alt='' /></a>
          <a data-aos="fade-left" data-aos-delay="250" href="mailto:shahdresturant@gmail.com" >
            <img className="footer-icon" src={require("./images/email-icon.png")} title="email" alt='' /></a>
           {/* <a href="" target="_blank"><img className="footer-icon" src="" alt=""></a> */}
        </div>
        <div className="phone-num-div" >
          <p className='call-label' data-aos="fade-up">Call Us!</p>
          <div className='phone-numbers'>
            <div className='num-div' data-aos="fade-left">
              <a href="tel:+201000555555" className='btn btn-info' title='CALL NOW'>+201000555555</a>
              <button
                onClick={myFunction}
                className='copy-num btn btn-success'
                title='copy to clipboard'>
                copy
              </button>
            </div>
            <div className='num-div' data-aos="fade-right">
              <a href="tel:+201000444444" className='btn btn-info' title='CALL NOW'>+201000444444</a>
              <button className='copy-num btn btn-success' title='copy to clipboard'
                onClick={myFunction}>
                copy
              </button>
            </div>
            <div className='num-div' data-aos="fade-down">
              <a href="tel:+201000333333" className='btn btn-primary' title='CALL NOW'>+201000333333</a>
              <button className='copy-num btn btn-success' title='copy to clipboard' onClick={myFunction}>copy</button>
            </div>
          </div>
        </div>
      </footer>
      <div style={{ textAlign: 'center'}}>All Rights Reserved Lorem, ipsum dolor sit amet consectetuptatib.</div>

    </>

  )


}


export default Mfooter