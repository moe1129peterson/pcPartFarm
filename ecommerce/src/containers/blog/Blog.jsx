/* eslint-disable no-unused-expressions */
import React from 'react';
import './blog.css'; 
import CPU from '../../assets/CPU.png';
import GPU from '../../assets/GPU.png';
import MOBO from '../../assets/MOBO.png'

const Blog = () => {
  return (
    <div className='pcf_product-container'>
      <div className='product-wrap'>

      <div className='pcf-list'>
        <img src={CPU} className='pcf_product-img' alt='cpu' />
      </div>

      <div className='pcf-list'>
        <img src={GPU} className='pcf_product-img' alt='gpu' />
      </div>

      <div className='pcf-list'>
        <img src={MOBO} className='pcf_product-img' alt='mobo' />
      </div>
      </div>
    </div>
    
  )
}



export default Blog