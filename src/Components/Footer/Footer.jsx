import React from 'react'
import { FaWhatsapp, FaFacebook, FaInstagram } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import "./footer.css"

function Footer() {
  return (
    <div className='footer'>
      <div className='footer-container'>

        {/* Logo + Info */}
        <div className='footer-section'>
          <img 
            className='logo' 
            src="/assets/images/dryF-logo.png" 
            alt="logo" 
            style={{ paddingTop: "20px", width: "90px" }}
          />
          <h1>UnitedMarkhor Dry Fruit</h1>
          <p>Quality Products Across Pakistan</p>
        </div>

        {/* Links */}
        <div className='product-section'>
          <h3>Links</h3>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/orders">Orders</NavLink></li>
          </ul>
        </div>

        {/* Contact */}
        <div className='footer-section'>
          <h3>Contact</h3>
          <p>03465147766</p>
          <p>unitedmarkhorgroup786@gmail.com</p>
        </div>

        {/* Social */}
        <div className='footer-section'>
          <h3>Visit and Follow Us</h3>
          <div className='icons'>
            <FaFacebook />
            <FaInstagram />
            <FaWhatsapp />
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className='footer-bottom'>
        <p className='content'>© 2026 UnitedMarkhorGroup786</p>
      </div>
    </div>
  )
}

export default Footer
