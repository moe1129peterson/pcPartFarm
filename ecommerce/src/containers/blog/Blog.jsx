/* eslint-disable no-unused-expressions */
import React from 'react';
import './blog.css'; 
import CPU from '../../assets/CPU.png';
import GPU from '../../assets/GPU.png';
import MOBO from '../../assets/MOBO.png'

const Blog = () => {
  return (
    <div className='pcf_product-container'>
      <div className='pcf_product-cpu'>
        <img src={CPU} alt='cpu' />
      </div>
      <div className='pcf_product-gpu'>
        <img src={GPU} alt='cpu' />
      </div>
      <div className='pcf_product-mobo'>
        <img src={MOBO} alt='cpu' />
      </div>
    </div>
  )
}

export default Blog