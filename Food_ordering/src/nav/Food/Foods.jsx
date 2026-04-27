import React, { useState, useEffect } from 'react'
import Card from './Card'
import './Foods.css'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'
import burgerImg from 'burger.jpg'
import pizzaImg from 'pizza.jpg'
import sandwichImg from 'sandwich.jpg'

function Foods() {
  const [foods, setFoods] = useState([
    { id: 1, name: "Pizza", price: 180, image: pizzaImg, description: "Delicious cheesy pizza with fresh toppings." },
    { id: 2, name: "Burger", price: 120, image: burgerImg, description: "Juicy grilled burger with extra cheese." },
    { id: 3, name: "Sandwich", price: 90, image: sandwichImg, description: "Healthy veg sandwich with fresh veggies." },
    { id: 4, name: "Special Pizza", price: 250, image: pizzaImg, description: "Premium pizza with extra toppings and crust." },
  ]);

  useEffect(() => {
    const API_URL = import.meta.env.PROD 
      ? "https://your-production-api.com/api/foods/" 
      : "http://localhost:8000/api/foods/";

    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        if (data && data.length > 0) {
          setFoods(data);
        }
      })
      .catch(err => console.error("Error fetching foods:", err));
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
