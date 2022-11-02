import React from "react";
import "./style/content.css";
// import { useState, useEffect } from "react";
// import { useEffect } from "react";
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
            
            <div className="slide slide1">
                <img
                  onClick={showImgPop}
                  className="cat-row-image"
                src="./images/content/bugatti2.jpg"
                title="Bugatti Veyron"
                alt="bugatti"
                />

              <div className="para-div">
                <h3>Bugatti Veyron</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore repellat ullam iusto corrupti quas voluptate, at esse, velit quia magnam exercitationem sed nulla, molestias doloribus praesentium facilis ipsam ex quibusdam.
                </p>
              </div>

            </div>



            <div className="slide slide2" data-aos="flip-up" data-aos-duration="1200">

              <img
                onClick={showImgPop}
                className="cat-row-image"
                src="./images/content/Lamborghini.jpg"
                title="Lamborghini Aventador"
                alt="Lamborghini"
                // data-aos="fade-right"
              />
              <div className="para-div">
                <h3>Lamborghini Aventador</h3>
                <p>
                  Aventador LP 780-4 Ultimae ipsum dolor sit amet consectetur adipisicing elit. Labore repellat ullam iusto corrupti quas voluptate, at esse, velit quia magnam exercitationem sed nulla, molestias doloribus praesentium facilis ipsam ex quibusdam.
                </p>
              </div>
              
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
            <div className="slide slide3" data-aos="flip-up" data-aos-duration="1200">
              <img
                onClick={showImgPop}
                className="cat-row-image"
                title="ferrari portofino"
                src="./images/content/ferrari-portofino.jpg"
                alt="ferrari portofino"
                // data-aos='fade-left'
              />

              <div className="para-div">
                <h3>Ferrari Portofino</h3>
                <p>
                  ferrari portofino is ipsum dolor sit amet consectetur adipisicing elit. Labore repellat ullam iusto corrupti quas voluptate, at esse, velit quia magnam exercitationem sed nulla, molestias doloribus praesentium facilis ipsam ex quibusdam.
                </p>
              </div>

            </div>
            <div data-aos="fade-down" className="viewAll-div">
              {/* <a data-aos='fade-left' className="viewAll-link" href="/allbrands" target="_blank">
                View all Brands
              </a> */}
              <a className="viewAll-link" href="/allcars" target="_blank">
                View all Cars
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

