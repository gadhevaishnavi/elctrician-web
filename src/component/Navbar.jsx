import React from 'react'
import '../assets/css/Navpage.css'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo1.png'
import '../assets/css/Navpage.css'
const Navbar = () => {
  return (
    <>
    <div className='nav-bar'>
    <div className='logo'>
      <img src={logo} alt="Gaiykwad Electrician" />
    </div>
    <nav>
      <Link to ="/">Home</Link>
      <Link to="/about">AboutUs</Link>
      {/* <Link to="/product">Products</Link> */}
      <Link to="/contact">ContactUs</Link>
      <Link to="/location">Location</Link>
    </nav>
    </div>
    </>
  )
}

export default Navbar
