import React from "react";
import "./style/content.css";
// import { useState, useEffect } from "react";
import { useEffect } from "react";







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
            <h2 className="gb-title">Sandwiches</h2>
          </div>
          <div className="gRowCards">
            <div className="slide card">
              {/* <img src={require('/images/image-name.png')} /> */}
              <img
                onClick={showImgPop}
                className="cat-row-image"
                src={require("./images/burger.jpg")}
                title="burger"
                alt="burger"
              />
            </div>
            <div className="slide card">
              <img
                onClick={showImgPop}
                className="cat-row-image"
                src={require("./images/grilled cheese.jpg")}
                title="grilled cheese"
                alt="grilled cheese"
              />
            </div>
            <div className="slide card">
              <img
                onClick={showImgPop}
                className="cat-row-image"
                title="shawarma"
                src={require("./images/shawarma.jpg")}
                alt="shawarma"
              />
            </div>
            <div className="slide card">
              <img
                onClick={showImgPop}
                className="cat-row-image"
                title="burrito"
                src={require("./images/burrito.jpg")}
                alt="burrito"
              />
            </div>
            <div className="viewAll-div">
              <a className="viewAll-link" href="/Sandwiches" target="_blank">
                <img
                  className="viewAll-img"
                  title="More Sandwiches"
                  src={require("./images/viewall5.jpg")}
                  alt="More Sandwiches"
                />
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

