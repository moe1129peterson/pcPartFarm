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

      </div>
    
    </div>
  )
}

export default Navbar