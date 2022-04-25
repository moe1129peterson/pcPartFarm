/* eslint-disable react/jsx-no-undef */
import React from 'react';
import './cpu.css'; 
import ryzen5 from '../../assets/ryzen5-5600.jpg';
import ryzen7 from '../../assets/ryzen7-5800.jpg';
import ryzen9 from '../../assets/ryzen9-5900.jpg';
import ryzen95950 from '../../assets/ryzen9-5950.jpg';

const Cpu = () => {
    return (
      <>
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>

      <div className='pcf_product-cpu1'>
        <img src={ryzen5} alt='ryzen5-5600' />
      </div>
      <div className='pcf_product-cpu2'>
        <img src={ryzen7} alt='ryzen5-5600' />
      </div>
      <div className='pcf_product-cpu3'>
        <img src={ryzen9} alt='ryzen5-5600' />
      </div>
      <div className='pcf_product-cpu4'>
        <img src={ryzen95950} alt='ryzen5-5600' />
      </div>
      </>
    )
  }


export default Cpu