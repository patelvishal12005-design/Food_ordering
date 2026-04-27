import React from 'react'
import './Categories.css'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'
import { Link } from 'react-router-dom'
const burgerImg = '/burger.jpg'
const pizzaImg = '/pizza.jpg'
const sandwichImg = '/sandwich.jpg'

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
      <video autoPlay loop muted className="bg-video">
  <source src="https://www.shutterstock.com/shutterstock/videos/1047971215/preview/stock-footage-an-appetizing-and-tasty-chicken-burger-on-a-mirror-table-a-fire-burns-in-the-background.mp4" type="video/mp4" />
</video>
       <div className="category-hero">
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
