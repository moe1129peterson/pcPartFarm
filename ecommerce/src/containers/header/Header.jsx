/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-expressions */
import React from 'react';
import './header.css'; 
import hero from '../../assets/hero.jpg'

const Header = () => {
  return (
    <div className='pcf_header section_padding' id='home'>
      <div className='pcf_header-content'>
          <img src={hero} className='pcf_head-img' alt='hero' />
    </div>
    </div>
  )
}

export default Header