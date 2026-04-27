import React from 'react'
import './Categories.css'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'
import { Link } from 'react-router-dom'
import burgerImg from '/burger.jpg'
import pizzaImg from '/pizza.jpg'
import sandwichImg from '/sandwich.jpg'
import categoryVideo from '/124831-732633121_small.mp4'
function Categories() {
  const categories = [
    { name: "Pizza", img: pizzaImg },
    { name: "Sandwich", img: sandwichImg },
    { name: "Burger", img: burgerImg },
    { name: "Pizza", img: pizzaImg },
    { name: "Sandwich", img: sandwichImg },
    { name: "Burger", img: burgerImg },
  ];

  return (
    <div className="categories-page">
      <Navbar/>
       <div className="category-hero">
        <video src={categoryVideo} autoPlay loop muted playsInline className='video-bg'></video>
        <div className="category-content">
          <h1 className='text-white'>Explore Foods</h1>
          <div className="category-grid">
            {categories.map((cat, index) => (
              <Link key={index} to="/Order" className='category-card-link'>
                <div className="category-card">
                  <img src={cat.img} alt={cat.name} />
                  <h3>{cat.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Categories
