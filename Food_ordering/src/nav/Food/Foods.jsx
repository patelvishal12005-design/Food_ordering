import React, { useState, useEffect } from 'react'
import Card from './Card'
import './Foods.css'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'
import staticFoods from '../../foods.json';
const burgerImg = 'burger.jpg'
const pizzaImg = 'pizza.jpg'
const sandwichImg = 'sandwich.jpg'

function Foods() {
  const [foods, setFoods] = useState(
    staticFoods.map(item => ({
      ...item,
      image: item.image?.startsWith('http') ? item.image : (item.image || pizzaImg)
    }))
  );

  useEffect(() => {
    const API_URL = "http://localhost:8000/api/foods/";

    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        if (data && data.length > 0) {
          // Map images to handle potential URL differences or missing images
          const formattedData = data.map(item => ({
            ...item,
            image: item.image?.startsWith('http') ? item.image : (item.image || pizzaImg)
          }));
          setFoods(formattedData);
        }
      })
      .catch(err => {
        console.log("Using static synced data as backend is not reachable.");
      });
  }, []);

  return (
    <div>
      <Navbar/>
      <div className="fudcantenar">
      </div>
      <input type="search" className='i1'/> 
      <i className="i2 fa-solid fa-magnifying-glass "></i>

    {/* --------------------menu------------------------- */}
    
     <div className="menu">
        <h2 className='h2 text-center text-white text-decoration-underline'>Food Menu</h2>
      <div className="food1">
         {foods.map((food) => (
           <Card 
             key={food.id}
             name={food.name} 
             img={food.image} 
             price={`₹${food.price}`} 
             detail={food.description} 
           />
         ))}
       </div>
</div>
<Footer/>

    </div>
  )
}

export default Foods
