import React from "react";
import "./style/filters.css"

function Mfilters(props)
{
    
    // let clearFilters = document.getElementById("clearFilters")
    // clearFilters.addEventListener("click", clearAllFilters)
    // select all filters
    // let checkFilters = document.getElementById("checkFilters")
    // checkFilters.addEventListener("click", checkAllFilters)

    function clearAllFilters()
    {
        let checkBoxs = document.getElementsByClassName("filter-checkbox")
        for (let i = 0; i < checkBoxs.length; i++)
        {
            checkBoxs[i].checked = false
        }
        filterBlocks()
    }

    function checkAllFilters()
    {
        let checkBoxs = document.getElementsByClassName("filter-checkbox")
        for (let i = 0; i < checkBoxs.length; i++)
        {
            checkBoxs[i].checked = true
        }
        filterBlocks()
    }

    function filterBlocks()
    {
        let sandwiches = document.getElementById("checkBox1")
        let sandwichesBlock = document.getElementById("sandBlock")
        sandwiches.checked === false ? sandwichesBlock.classList.replace("PBlock", "hide-filtered") : sandwichesBlock.classList.replace("hide-filtered", "PBlock");
    }

    return(
        <div className="container">
            <div className="filter-container transBackg">
                <div className="main-filter transBackg">
                    <div>
                        <h3>Filters</h3>
                        
                        <button id="clearFilters" onClick={clearAllFilters} className="btn btn-danger">Clear</button>
                        <button id="checkFilters" onClick={checkAllFilters} className="btn btn-success">Reset</button>
                    </div>
                </div>
                <div className="filter-elments transBackg">
                    <div className="filter-elmnt">
                        <button className="btn btn-secondary">Sandwiches</button>
                        <input id="checkBox1" className="filter-checkbox" type="checkbox"/>
                    </div>
                    <div className="filter-elmnt">
                        <button className="btn btn-secondary">Dishes</button>
                        <input id="checkBox2" className="filter-checkbox" type="checkbox"/>
                    </div>
                    <div className="filter-elmnt">
                        <button className="btn btn-secondary">Meals</button>
                        <input  id="checkBox3" className="filter-checkbox" type="checkbox"/>
                    </div>
                    <div className="filter-elmnt">
                        <button className="btn btn-secondary">Pizza</button>
                        <input id="checkBox4" className="filter-checkbox" type="checkbox" />
                    </div>
                    <div className="filter-elmnt">
                        <button className="btn btn-secondary">Extras</button>
                        <input id="checkBox5" className="filter-checkbox" type="checkbox"/>
                    </div>
                    <div className="filter-elmnt">
                        <button className="btn btn-secondary">Sweets</button>
                        <input id="checkBox6" className="filter-checkbox" type="checkbox"/>
                    </div>
                    <div className="filter-elmnt">
                        <button className="btn btn-secondary">Drinks</button>
                        <input id="checkBox7" className="filter-checkbox" type="checkbox"/>
                    </div>
                    <div className="filter-elmnt">
                        <button className="btn btn-secondary">Famiyl Meals</button>
                        <input id="checkBox8" className="filter-checkbox" type="checkbox"/>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Mfilters