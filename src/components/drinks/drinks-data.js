import coffee from "./images/bmw-G310GS.jpg";
import tea from "./images/streetfighterv4.jpg";
import hotchoco from "./images/KawasakiZH2.jpg";

import orange from "./images/HondaSP125.jpeg";
import lemonade from "./images/Suzuki-Katana.jpg";
import mint from "./images/Yamahayzf.jpg";


const DrinksData = {
    hotdrinks: [
        {
            id: "h1",
            brand: "BMW",
            name:"BMW - G310GS",
            img: coffee,
            size:'Small',
            mileage:'High',
            price: 30800
        },
        {
            id: "h2",
            brand:"Ducati",
            name:"Ducati Streetfighter V4",
            img: tea,
            size: "Medium",
            mileage:"Balanced", 
            price: 31413
        },
        {
            id: "h3",
            brand: "Kawasaki",
            name: "Kawasaki Z H2", // Kawasaki Z H2
            img: hotchoco,
            size: 'Big',
            mileage:'Low',
            price: 32000
        },
    ],
    colddrinks: [
        {
            id: "c1",
            brand: "Honda",
            name: "Honda SP",
            img: orange,
            size: 'Medium',
            mileage: 'Low',
            price: 23000
        },
        {
            id: "c2",
            brand: "Suzuki",
            name: "Suzuki Katana",
            img: lemonade,
            size: 'big',
            mileage: 'Low',
            price: 25000
        },
        {
            id: "c3",
            brand: "Yamaha",
            name: "Yamaha YZF R1M",
            img: mint,
            size: 'big',
            mileage: 'Low',
            price: 35000
        }
    ]

};

// const HotDrinks = {
    
// }

export default DrinksData;