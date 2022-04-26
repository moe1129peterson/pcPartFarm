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
    <div className='cpu-content'>
      <h1 className='CPU'>CPU</h1>
      <div className='cpu-wrap'>
        
        <div className='cpu-list'>
          <img src={ryzen5} className='cpu-listImage' alt='ryzen5-5600' />
          <h2 className='cpu-listTitle'>Ryzen5-5600x</h2>
          <h3 className='cpu-listPrice'>$199.00</h3>
          <p className='cpu-listText'>AMD's fastest 6 core processor for mainstream desktop, with 12 processing threads</p>
        </div>

        <div className='cpu-list'>
          <img src={ryzen7} className='cpu-listImage' alt='ryzen7-5800' />
          <h2 className='cpu-listTitle'>Ryzen5-5600x</h2>
          <h3 className='cpu-listPrice'>$199.00</h3>
          <p className='cpu-listText'>AMD's fastest 6 core processor for mainstream desktop, with 12 processing threads</p>
        </div>

        <div className='cpu-list'>
          <img src={ryzen9} className='cpu-listImage' alt='' />
          <h2 className='cpu-listTitle'>Ryzen5-5600x</h2>
          <h3 className='cpu-listPrice'>$199.00</h3>
          <p className='cpu-listText'>AMD's fastest 6 core processor for mainstream desktop, with 12 processing threads</p>
        </div>

        <div className='cpu-list'>
          <img src={ryzen95950} className='cpu-listImage' alt='' />
          <h2 className='cpu-listTitle'>Ryzen5-5600x</h2>
          <h3 className='cpu-listPrice'>$199.00</h3>
          <p className='cpu-listText'>AMD's fastest 6 core processor for mainstream desktop, with 12 processing threads</p>
        </div>
        <div className='cpu-list'>
          <img src={ryzen5} className='cpu-listImage' alt='ryzen5-5600' />
          <h2 className='cpu-listTitle'>Ryzen5-5600x</h2>
          <h3 className='cpu-listPrice'>$199.00</h3>
          <p className='cpu-listText'>AMD's fastest 6 core processor for mainstream desktop, with 12 processing threads</p>
        </div>

        <div className='cpu-list'>
          <img src={ryzen7} className='cpu-listImage' alt='ryzen7-5800' />
          <h2 className='cpu-listTitle'>Ryzen5-5600x</h2>
          <h3 className='cpu-listPrice'>$199.00</h3>
          <p className='cpu-listText'>AMD's fastest 6 core processor for mainstream desktop, with 12 processing threads</p>
        </div>

        <div className='cpu-list'>
          <img src={ryzen9} className='cpu-listImage' alt='' />
          <h2 className='cpu-listTitle'>Ryzen5-5600x</h2>
          <h3 className='cpu-listPrice'>$199.00</h3>
          <p className='cpu-listText'>AMD's fastest 6 core processor for mainstream desktop, with 12 processing threads</p>
        </div>

        <div className='cpu-list'>
          <img src={ryzen95950} className='cpu-listImage' alt='' />
          <h2 className='cpu-listTitle'>Ryzen5-5600x</h2>
          <h3 className='cpu-listPrice'>$199.00</h3>
          <p className='cpu-listText'>AMD's fastest 6 core processor for mainstream desktop, with 12 processing threads</p>
        </div>
      </div>
    </div>  
        
        </>
      
      
    );
  }


export default Cpu