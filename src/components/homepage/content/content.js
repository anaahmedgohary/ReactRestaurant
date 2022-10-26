import React from "react";
import "./style/content.css";
// import { useState, useEffect } from "react";
// import { useEffect } from "react";
// import strawberry from "./images/strawberry6.svg";
import burger from "./style/images/basically-burger-1.jpg";


import AOS from 'aos';
import 'aos/dist/aos.css';




export default function Content()
{

  AOS.init();

  function showImgPop(event)
    {
    let imageClicked = event.target;
    let imageClickedSRC = imageClicked.src;
    console.log(imageClickedSRC);
    let popupContainer = document.getElementById("imagePopup");
    popupContainer.src = imageClickedSRC;
    let imageDiv = document.getElementById("popImageContainer");
    imageDiv.classList.replace("hide-popup", "show-popup");

        // image caption
    let captionDiv = document.getElementById("popCaption");
    let imageAlt = imageClicked.alt;
    captionDiv.innerText = imageAlt;

      // close when click in empty space
    imageDiv.addEventListener("click", (e) =>
    {
      let imag = document.getElementById("imagePopup");
      if (e.target === imag)
      {
        //console.log('yeaaaa');
        return
      } else { 
      //console.log('nono');
      imageDiv.classList.replace("show-popup", "hide-popup");
      }
    })
  }
  
    // close button function, classic
    function closePopupImg()
    {
      let imageDiv = document.getElementById("popImageContainer");
      imageDiv.classList.replace("show-popup", "hide-popup");
    }

    // useEffect(() =>
    // {
    //     let checkBoxs = document.getElementsByClassName("filter-checkbox")
    //     for (let i = 0; i < checkBoxs.length; i++)
    //     {
    //         checkBoxs[i].checked = true;
    //         checkBoxs[i].addEventListener("change", filterBlocks);
    //     }

    // }, [])


    // function filterBlocks()
    // {
    //     let sandwiches = document.getElementById("checkBox1")
    //     let sandwichesBlock = document.getElementById("sandBlock")
    //     sandwiches.checked === false ? sandwichesBlock.classList.replace("PBlock", "hide-filtered") : sandwichesBlock.classList.replace("hide-filtered", "PBlock");
    // }

    



    return (
      <div className="sandwiches-body">
        <div id="sandBlock" className="PBlock slider transBackg">
          <div className="gb-title-pos">
            <h2 className="gb-title">Features</h2>
          </div>
          <div className="gRowCards">
            <div className="slide">
              <img
                onClick={showImgPop}
                className="cat-row-image"
                src={burger}
                title="burger"
                alt="burger"
              />
            </div>
            <div className="slide" data-aos="flip-up">
              <img
                onClick={showImgPop}
                className="cat-row-image"
                src="./images/grilledcheese.jpg"
                title="grilled cheese"
                alt="grilled cheese"
                data-aos="fade-right"
              />
            </div>
            {/* <div className="slide">
              <img
                onClick={showImgPop}
                className="cat-row-image"
                title="shawarma"
                src="./images/shawarma.jpg"
                alt="shawarma"
              />
            </div> */}
            <div className="slide" data-aos="flip-up">
              <img
                onClick={showImgPop}
                className="cat-row-image"
                title="burrito"
                src="./images/burrito.jpg"
                alt="burrito"
                data-aos="fade-left"
              />
            </div>
            <div data-aos="fade-down" className="viewAll-div">
              <a className="viewAll-link" href="/Sandwiches" target="_blank">
                View all Sandwiches
                {/* <img
                  className="viewAll-img"
                  title="More Sandwiches"
                  alt="More Sandwiches"
                /> */}
              </a>
              <a className="viewAll-link" href="/drinks" target="_blank">
                View all Drinks
                {/* <img
                  className="viewAll-img"
                  title="More Sandwiches"
                  alt="More Sandwiches"
                /> */}
              </a>
              <a className="viewAll-link" href="/meals" target="_blank">
                View all Meals
                {/* <img
                  className="viewAll-img"
                  title="More Sandwiches"
                  alt="More Sandwiches"
                /> */}
              </a>
            </div>
          </div>
        </div>

        <div id="popImageContainer" className="hide-popup">
          <span onClick={closePopupImg} id="close-icon" title="Close">
            <i className="fa-solid fa-x fa-5x transBackg"></i>
          </span>
          <img id="imagePopup" className="poped-image" alt="" />
          <div id="popCaption"></div>
        </div>
      </div>
    );
}

