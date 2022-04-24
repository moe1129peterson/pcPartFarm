/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-expressions */
import React from 'react';
import './header.css'; 
import hero from '../../assets/hero.png'

const Header = () => {
  return (
    <div className='pcf_header section_padding' id='home'>
      <div className='pcf_header-content'>
        <div className='pcf_head-img'>
          <img src={hero} alt='hero' />
        </div>

    </div>
    </div>
  )
}

export default Header