import React from "react";
import "./style/sandwich.css"
// import { useState, useEffect } from "react";
import { useEffect } from "react";







function Sandwitch()
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
        <>


            <div id="sandBlock" className="PBlock slider transBackg">
                <div className="gb-title-pos">
                    <h2 className="gb-title">ساندوتشات</h2>
                </div>
                <div className="gRowCards">
                    <div className="slide card">
                        {/* <img src={require('/images/image-name.png')} /> */}
                        <img onClick={showImgPop} className="cat-row-image" src={require('./images/1Sandwiches.jpg')} alt="طعمية" />
                    </div>
                    <div className="slide card">
                        <img onClick={showImgPop} className="cat-row-image" src={require("./images/2Sandwiches.jpg")} alt="جبنة رومي" />
                    </div>
                    <div className="slide card">
                        <img onClick={showImgPop} className="cat-row-image" title="شاورما" src={require("./images/3Sandwiches.jpg")} alt="شاورما" />
                    </div>
                    <div className="slide card">
                        <img onClick={showImgPop} className="cat-row-image" title="لحمة مفرومة" src={require("./images/5Sandwiches.jpg")} alt="لحمة مفرومة" />
                    </div>
                    <div className="slide card">
                        <a href="Sandwiches.html" target="_blank"><img className="cat-row-image" title="More Sandwiches" src={require("./images/viewall5.jpg")} alt="More Sandwiches" /></a>
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
      </>
    );
}

export default Sandwitch
