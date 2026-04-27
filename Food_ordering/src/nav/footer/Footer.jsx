import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import facebookImg from '/facebook-new.png'
import instagramImg from '/instagram-new.png'
import twitterImg from '/twitter--v1.png'
import linkedinImg from '/linkedin-circled--v1.png'
import youtubeImg from '/youtube-play.png'
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
              <img src={facebookImg} alt="facebook"/>
              <img src={instagramImg} alt="instagram"/>
              <img src={twitterImg} alt="twitter"/>
              <img src={linkedinImg} alt="linkedin"/>
              <img src={youtubeImg} alt="youtube"/>
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
