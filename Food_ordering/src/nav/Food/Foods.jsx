import React, { useState, useEffect } from 'react'
import './Foods.css'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'
import { Link } from 'react-router-dom'
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
        <div className="product-grid" style={{ padding: '20px' }}>
          {foods.map((food) => (
            <div className="product-card" key={food.id}>
              <img src={food.image} alt={food.name} />
              <h4>{food.name}</h4>
              <p>₹{food.price}</p>
              <Link to="/Order"><button>Add to Cart</button></Link>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Foods
