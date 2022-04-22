/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
import React from 'react';
import {RiMenu3line, RiCloseLin} from 'react-icons/ri'
import logo from '../../assets/logo.png'
import hero from '../../assets/hero.png'
import './navbar.css'; 

const Navbar = () => {
  return (
    <div className='pcf_navbar'>
      <div className='pcf_navbar-links'>
        <div className='pcf_navbar-links_logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='pcf_navbar-links_container'></div>
        <p><a here="#home">Home</a></p>
        <p><a here="#aboutUs">About Us</a></p>
        <p><a here="#blog">Blog</a></p>


      </div>
    
    </div>
  )
}

export default Navbar