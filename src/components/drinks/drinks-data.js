import coffee from "./images/coffee01.jpg";
import tea from "./images/tea01.jpg";
import hotchoco from "./images/hotchoco01.jpg";

import orange from "./images/orange01.jpg";
import lemonade from "./images/lemon01.jpg";
import mint from "./images/mint01.jpg";


const DrinksData = {
    hotdrinks: [
        {
            id:1,
            name:"Coffee",
            img: coffee,
            size:'small',
            sugar:'low',
            price:10
        },
        {
            id: 2,
            name:"Tea",
            img: tea,
            size: "medium",
            sugar:"medium", 
            price:10
        },
        {
            id: 3,
            name:"Hot Chocolate",
            img: hotchoco,
            size: 'big',
            sugar:'high',
            price:25
        },
    ],
    colddrinks: [
        {
            id: 1,
            name: "Lemon",
            img: lemonade,
            size: 'big',
            sugar: 'high',
            price: 11
        },
        {
            id: 2,
            name: "Orange",
            img: orange,
            size: 'big',
            sugar: 'high',
            price: 14
        },
        {
            id: 3,
            name: "Mint",
            img: mint,
            size: 'big',
            sugar: 'high',
            price: 9
        }
    ]

};

// const HotDrinks = {
    
// }

export default DrinksData;