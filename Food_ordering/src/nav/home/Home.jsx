import React, { useState, useEffect } from 'react'
import './Home.css'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'
import { Link } from 'react-router-dom'
import staticFoods from '../../foods.json';
const burgerImg = 'burger.jpg'
const pizzaImg = 'pizza.jpg'
const sandwichImg = 'sandwich.jpg'

function Home() {
  const [products, setProducts] = useState(
    staticFoods.map(item => ({
      ...item,
      image: item.image?.startsWith('http') ? item.image : (item.image || burgerImg)
    }))
  );

  useEffect(() => {
    const API_URL = "https://food-backend-dzpd.onrender.com/api/foods/";

    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        if (data && data.length > 0) {
          const formattedData = data.map(item => ({
            ...item,
            image: item.image?.startsWith('http') ? item.image : (item.image || burgerImg)
          }));
          setProducts(formattedData);
        }
      })
      .catch(err => {
        console.log("Using static synced data as backend is not reachable.");
      });
  }, []);

  return (
    <div className='footer2'>
        <Navbar/>
        {/* <header>fast food</header> */}
      <video autoPlay loop muted className="bg-video">
  <source src="https://www.shutterstock.com/shutterstock/videos/3788659263/preview/stock-footage--k-slow-motion-video-of-crispy-chicken-nuggets-dropping-onto-a-flat-surface-perfect-for-fast-food.mp4" type="video/mp4" />
</video>
      {/* ---------------------------category------------------------------- */}
      <div className="category">
        <h1 className='h'>Explore Foods</h1>
        {/* <p className=' border border-2 border-danger '></p> */}
        <div className="detail">
          <Link to="/Order" >
          <div className="d1">
           <img src={pizzaImg} alt="pizza" />
           <h3>pizza</h3>
          </div>
          </Link>
          <Link to="/Order" >
          <div className="d2">
   <img src={sandwichImg} alt="sandwich" />
           <h3>sandwich</h3>
          </div>
          </Link>
          <Link to="/Order" >
          <div className="d3">
   <img src={burgerImg} alt="burger" />
           <h3>burger</h3>
          </div>
          </Link>
        </div>
      </div>
      <h1 className='h text-center'>food menu</h1>
      <div className="food menu">
    <div className="product-grid">
        {products.map((p) => (
          <div className="product-card" key={p.id}>
            <img src={p.image} alt={p.name} />
            <h4>{p.name}</h4>
            <p>₹{p.price}</p>
             <Link to="/Order"> <button>Add to Cart</button></Link>
          </div>
        ))}
      </div>
        </div>
      <Footer/>
    </div>
  )
}

export default Home
