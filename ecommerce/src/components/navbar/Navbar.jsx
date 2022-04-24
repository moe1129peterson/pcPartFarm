/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
import React, {useState} from 'react';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import logo from '../../assets/logo.png'
import './navbar.css'; 

const Menu = () => (
  <>
    <p><a here="#home">Home</a></p>
    <p><a here="#aboutUs">About Us</a></p>
    <p><a here="#blog">Blog</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <div className='pcf_navbar'>
      <div className='pcf_navbar-links'>
        <div className='pcf_navbar-links_logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='pcf_navbar-links_container'>
        <Menu />
        </div>
      </div>
      <div className='pcf_navbar-sign'>
        <p>Sign in</p>
        <button type='button'>Cart</button>
      </div>
      <div className='pcf_navbar-menu'>
      {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
          {toggleMenu && (
            <div className="pcf_navbar-menu_container scale-up-center">
            <Menu />
            <div className='pcf_navbar-menu_container-links-sign'>
            <p>Sign in</p>
            <button type='button'>Cart</button>
            </div>
            </div>
          ) }
      </div>
    
    </div>
  )
}

export default Navbar