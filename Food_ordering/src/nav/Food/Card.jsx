import React from 'react'
import './Foods.css'
import { Link } from 'react-router-dom'

function Card({ name, img, price, detail }) {
  return (
    <div className="card-item m-3 p-3 text-center text-white" style={{ background: 'rgba(255, 255, 255, 0.1)', borderRadius: '15px', backdropFilter: 'blur(10px)', width: '100%', maxWidth: '300px' }}>
      <img src={img} alt={name} className="img-fluid rounded-3 mb-3" style={{ height: '150px', objectFit: 'cover' }} />
      <h3>{name}</h3>
      <p>{detail}</p>
      <h4 className="text-warning">{price}</h4>
      <Link to="/Order" className="btn btn-danger mt-2">Order Now</Link>
    </div>
  )
}

export default Card
