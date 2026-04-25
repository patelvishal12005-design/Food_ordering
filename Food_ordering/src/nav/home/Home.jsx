import React, { useState, useEffect } from 'react'
import './Home.css'
// import './Order.jsx'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'
import { Link } from 'react-router-dom'
function Home() {
  const [products, setProducts] = useState([
    { id: 1, name: "Burger", price: 120, image: "/burger.jpg" },
    { id: 2, name: "Pizza", price: 180, image: "/pizza.jpg" },
    { id: 3, name: "Sandwich", price: 90, image: "/sandwich.jpg" },
    { id: 4, name: "Special Burger", price: 150, image: "/burger.jpg" },
    { id: 5, name: "Large Pizza", price: 250, image: "/pizza.jpg" },
    { id: 6, name: "Veg Sandwich", price: 110, image: "/sandwich.jpg" },
  ]);

  useEffect(() => {
    fetch("http://localhost:8000/api/foods/")
      .then(res => res.json())
      .then(data => {
        if (data && data.length > 0) {
          setProducts(data);
        }
      })
      .catch(err => console.error("Error fetching foods:", err));
  }, []);

  return (
    <div className='footer2'>
      {/* <img src="i.webp"/> */}
        <Navbar/>
          <video autoPlay loop muted playsInline className='video1'>
          <source src="/307837_medium.mp4"></source></video>
        {/* <header>fast food</header> */}
      {/* ---------------------------category------------------------------- */}
      <div className="category">
        <h1 className='h'>Explore Foods</h1>
        {/* <p className=' border border-2 border-danger '></p> */}
        <div className="detail">
          <Link to="/Order" >
          <div className="d1">
           <img src="/pizza.jpg" alt="pizza" />
           <h3>pizza</h3>
          </div>
          </Link>
          <Link to="/Order" >
          <div className="d2">
   <img src="/sandwich.jpg" alt="sandwich" />
           <h3>sandwich</h3>
          </div>
          </Link>
          <Link to="/Order" >
          <div className="d3">
   <img src="/burger.jpg" alt="burger" />
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
