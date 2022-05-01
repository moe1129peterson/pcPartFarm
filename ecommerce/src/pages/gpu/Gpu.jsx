/* eslint-disable react/jsx-no-undef */
import React from 'react';
import './gpu.css'; 
import rtx3060 from '../../assets/3060.png';
import rtx3060ti from '../../assets/3060ti.png';
import rtx3070 from '../../assets/3070.png';
import rtx3080 from '../../assets/3080.png';
import rtx3090 from '../../assets/3090.png';

const Gpu = () => {
    return (
      <>
    <div className='gpu-content'>
      <h1 className='GPU'>GPU</h1>
      <div className='gpu-wrap'>
        
        <div className='gpu-list'>
          <img src={rtx3060} className='gpu-listImage' alt='rtx3060' />
          <h2 className='gpu-listTitle'>RTX 3060</h2>
          <h3 className='gpu-listPrice'>$329.00</h3>
          <p className='gpu-listText'>The Nvidia RTX 3060, do I need to say more?</p>
        </div>

        <div className='gpu-list'>
          <img src={rtx3060ti} className='gpu-listImage' alt='rtx3060' />
          <h2 className='gpu-listTitle'>RTX 3060ti</h2>
          <h3 className='gpu-listPrice'>$399.00</h3>
          <p className='gpu-listText'>The Nvidia RTX 3060, do I need to say more?</p>
        </div>

        <div className='gpu-list'>
          <img src={rtx3070} className='gpu-listImage' alt='rtx3060' />
          <h2 className='gpu-listTitle'>RTX 3070</h2>
          <h3 className='gpu-listPrice'>$499.00</h3>
          <p className='gpu-listText'>The Nvidia RTX 3060, do I need to say more?</p>
        </div>

        <div className='gpu-list'>
          <img src={rtx3080} className='gpu-listImage' alt='rtx3060' />
          <h2 className='gpu-listTitle'>RTX 3080</h2>
          <h3 className='gpu-listPrice'>$699.00</h3>
          <p className='gpu-listText'>The Nvidia RTX 3060, do I need to say more?</p>
        </div>

        <div className='gpu-list'>
          <img src={rtx3090} className='gpu-listImage' alt='rtx3060' />
          <h2 className='gpu-listTitle'>RTX 3090</h2>
          <h3 className='gpu-listPrice'>$1499.99</h3>
          <p className='gpu-listText'>The Nvidia RTX 3060, do I need to say more?</p>
        </div>

        <div className='gpu-list'>
          <img src={rtx3060} className='gpu-listImage' alt='rtx3060' />
          <h2 className='gpu-listTitle'>USED RTX 3060</h2>
          <h3 className='gpu-listPrice'>$259.00</h3>
          <p className='gpu-listText'>The Nvidia RTX 3060, do I need to say more?</p>
        </div>

        <div className='gpu-list'>
          <img src={rtx3060ti} className='gpu-listImage' alt='rtx3060' />
          <h2 className='gpu-listTitle'>USED RTX 3060ti</h2>
          <h3 className='gpu-listPrice'>$329.00</h3>
          <p className='gpu-listText'>The Nvidia RTX 3060, do I need to say more?</p>
        </div>

        <div className='gpu-list'>
          <img src={rtx3070} className='gpu-listImage' alt='rtx3060' />
          <h2 className='gpu-listTitle'>USED RTX 3070</h2>
          <h3 className='gpu-listPrice'>$419.00</h3>
          <p className='gpu-listText'>The Nvidia RTX 3060, do I need to say more?</p>
        </div>

      
      </div>
    </div>  
        
        </>
      
      
    );
  }


export default Gpu