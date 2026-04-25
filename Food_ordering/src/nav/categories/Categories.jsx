import React from 'react'
import './Categories.css'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'
import { Link } from 'react-router-dom'
function Categories() {
  const categories = [
    { name: "Pizza", img: "/pizza.jpg" },
    { name: "Sandwich", img: "/sandwich.jpg" },
    { name: "Burger", img: "/burger.jpg" },
    { name: "Pizza", img: "/pizza.jpg" },
    { name: "Sandwich", img: "/sandwich.jpg" },
    { name: "Burger", img: "/burger.jpg" },
  ];

  return (
    <div className="categories-page">
      <Navbar/>
       <div className="category-hero">
        <video autoPlay loop muted playsInline className='video-bg'>
          <source src="/124831-732633121_small.mp4"></source>
        </video>
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
