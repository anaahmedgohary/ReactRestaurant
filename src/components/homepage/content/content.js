import React from "react";
import "./style/content.css";
// import { useState, useEffect } from "react";
import { useEffect } from "react";
// import strawberry from "./images/strawberry6.svg";







export default function Content()
{

  function showImgPop(event)
    {
        let imageClicked = event.target
        let imageClickedSRC = imageClicked.src
        console.log(imageClickedSRC)
        let popupContainer = document.getElementById("imagePopup")
        popupContainer.src = imageClickedSRC
        let imageDiv = document.getElementById("popImageContainer")
        imageDiv.classList.replace("hide-popup", "show-popup")

        // image caption
        let captionDiv = document.getElementById("popCaption")
        let imageAlt = imageClicked.alt
        captionDiv.innerText = imageAlt
    }

    function closePopupImg()
    {
        let imageDiv = document.getElementById("popImageContainer")
        imageDiv.classList.replace("show-popup", "hide-popup")
    }

    useEffect(() =>
    {
        let checkBoxs = document.getElementsByClassName("filter-checkbox")
        for (let i = 0; i < checkBoxs.length; i++)
        {
            checkBoxs[i].checked = true;
            checkBoxs[i].addEventListener("change", filterBlocks);
        }

    }, [])


    function filterBlocks()
    {
        let sandwiches = document.getElementById("checkBox1")
        let sandwichesBlock = document.getElementById("sandBlock")
        sandwiches.checked === false ? sandwichesBlock.classList.replace("PBlock", "hide-filtered") : sandwichesBlock.classList.replace("hide-filtered", "PBlock");
    }

    



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
                src="./images/burger.jpg"
                title="burger"
                alt="burger"
              />
            </div>
            <div className="slide">
              <img
                onClick={showImgPop}
                className="cat-row-image"
                src="./images/grilled cheese.jpg"
                title="grilled cheese"
                alt="grilled cheese"
              />
            </div>
            <div className="slide">
              
              {/* <div style={{ background: "black" }}><img src={strawberry} alt="" style={{background:"unset"}} /></div> */}
              <img
                onClick={showImgPop}
                className="cat-row-image"
                title="shawarma"
                src="./images/shawarma.jpg"
                alt="shawarma"
              />
            </div>
            <div className="slide">
              <img
                onClick={showImgPop}
                className="cat-row-image"
                title="burrito"
                src="./images/burrito.jpg"
                alt="burrito"
              />
            </div>
            <div className="viewAll-div">
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

