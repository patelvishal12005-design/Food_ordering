import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="container">
          <div className="footer-section">
            <h4>About Us</h4>
            <p>We are dedicated to providing the best food ordering experience. Fresh ingredients, fast delivery, and great taste in every bite.</p>
          </div>
          <div className="footer-section">
            <h4>Site Map</h4>
            <Link to='/'>Home</Link>
            <Link to='/Foods'>Menu</Link>
            <Link to='/Order'>Order Now</Link>
            <Link to='/Login'>Login</Link>
            <a href="http://localhost:8000/login/" target="_blank" rel="noopener noreferrer">Admin Login</a>
          </div>
          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-links">
              <img src="/facebook-new.png" alt="facebook"/>
              <img src="/instagram-new.png" alt="instagram"/>
              <img src="/twitter--v1.png" alt="twitter"/>
              <img src="/linkedin-circled--v1.png" alt="linkedin"/>
              <img src="/youtube-play.png" alt="youtube"/>
            </div>
          </div>
        </div>
      </div>
      <div className='nut1'>
        All rights reserved. Design By <Link to='/'>Code Arcade</Link>
      </div>
    </footer>
  )
}

export default Footer
