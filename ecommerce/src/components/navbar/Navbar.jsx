/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
import React, {useState} from 'react';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import {Link} from 'react-router-dom';
import logo from '../../assets/logo.png'
import './navbar.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';

const Menu = () => (
  <>
    <Link to="/cpu" className='logo'>
    <p><a here="#blog">CPU</a></p>
    </Link>
    
    <Link to="/gpu" className='logo'>
    <p><a here="#blog">GPU</a></p>
    </Link>
    <Link to="/mobo" className='logo'>
    <p><a here="#blog">MOBO</a></p>
    </Link>

    <Link to="/contact">
    <p><a here="#contact">Contact</a></p>
    </Link>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <div className='pcf_navbar'>
      <div className='pcf_navbar-links'>
        <Link to='/' className='home'>
        <div className='pcf_navbar-links_logo'>
          <img src={logo} alt='logo' />
        </div>
        </Link>
        <div className='pcf_navbar-links_container'>
        <Menu />
        </div>
      </div>
      <div className='pcf_navbar-sign'>
        <p>Sign in</p>
      <Link to ='/cart' className='cart'></Link>
      <div className='pcf_navbar-cart'>
        <p>Cart</p>
      </div>
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
            <Link to ='/cart' className='cart'>
            <button type='button'>Cart</button>
            </Link>
            </div>
            </div>
          ) }
      </div>
    
    </div>
  )
}

export default Navbar