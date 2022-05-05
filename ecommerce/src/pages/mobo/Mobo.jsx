/* eslint-disable react/jsx-no-undef */
import React from 'react';
import './mobo.css'; 
import mobo1 from '../../assets/mobo1.jpg';
// import mobo2 from '../../assets/mobo2.jpg';
import mobo3 from '../../assets/mobo3.jpg';
import mobo4 from '../../assets/mobo4.jpg';

const Mobo = () => {
    return (
      <>
    <div className='mobo-content'>
      <h1 className='mobo'>MOBO</h1>
      <div className='mobo-wrap'>
        
        <div className='mobo-list'>
          <img src={mobo1} className='mobo-listImage' alt='mobo1' />
          <h2 className='mobo-listTitle'>ASUS PRIME B560-PLUS LGA 1200</h2>
          <h3 className='mobo-listPrice'>$119.00</h3>
          <p className='mobo-listText'>Supports 11th / 10th Gen Intel Core Processors</p>
          <button className='add-button'>Add to Cart</button>
        </div>

        <div className='mobo-list'>
          <img src={mobo1} className='mobo-listImage' alt='mobo1' />
          <h2 className='mobo-listTitle'>ASUS PRIME B560-PLUS LGA 1500</h2>
          <h3 className='mobo-listPrice'>$129.00</h3>
          <p className='mobo-listText'>Supports 11th / 10th Gen Intel Core Processors</p>
          <button className='add-button'>Add to Cart</button>
          </div>

        <div className='mobo-list'>
        <img src={mobo3} className='mobo-listImage' alt='mobo1' />
          <h2 className='mobo-listTitle'>MSI B450 GAMING PLUS MAX AM4</h2>
          <h3 className='mobo-listPrice'>$116.00</h3>
          <p className='mobo-listText'>Supports 1st / 2nd / 3rd Gen AMD Ryzen Processors</p>
          <button className='add-button'>Add to Cart</button>
        </div>

        <div className='mobo-list'>
        <img src={mobo4} className='mobo-listImage' alt='mobo1' />
          <h2 className='mobo-listTitle'>MSI MPG Z490 GAMING EDGE WIFI</h2>
          <h3 className='mobo-listPrice'>$149.00</h3>
          <p className='mobo-listText'>Supports 10, 11thth Gen Intel Core processors</p>
          <button className='add-button'>Add to Cart</button>
        </div> 
        
         <div className='mobo-list'>
          <img src={mobo1} className='mobo-listImage' alt='mobo1' />
          <h2 className='mobo-listTitle'>[USED] ASUS PRIME B560-PLUS LGA 1200</h2>
          <h3 className='mobo-listPrice'>$99.00</h3>
          <p className='mobo-listText'>Supports 11th / 10th Gen Intel Core Processors</p>
          <button className='add-button'>Add to Cart</button>
          </div>

        <div className='mobo-list'>
          <img src={mobo1} className='mobo-listImage' alt='mobo1' />
          <h2 className='mobo-listTitle'>[USED] ASUS PRIME B560-PLUS LGA 1200</h2>
          <h3 className='mobo-listPrice'>$79.00</h3>
          <p className='mobo-listText'>Supports 11th / 10th Gen Intel Core Processors</p>
          <button className='add-button'>Add to Cart</button>
        </div>

        <div className='mobo-list'>
        <img src={mobo4} className='mobo-listImage' alt='mobo1' />
          <h2 className='mobo-listTitle'>[USED] MSI MPG Z490 GAMING EDGE WIFI</h2>
          <h3 className='mobo-listPrice'>$100.00</h3>
          <p className='mobo-listText'>Supports 10, 11thth Gen Intel Core processors</p>
          <button className='add-button'>Add to Cart</button>
        </div>
      

        <div className='mobo-list'>
        <img src={mobo3} className='mobo-listImage' alt='mobo1' />
          <h2 className='mobo-listTitle'>[USED] MSI B450 GAMING PLUS MAX AM4</h2>
          <h3 className='mobo-listPrice'>$76.00</h3>
          <p className='mobo-listText'>Supports 1st / 2nd / 3rd Gen AMD Ryzen Processors</p>
          <button className='add-button'>Add to Cart</button>
        </div>

        
      
      </div>
    </div>  
        
        </>
      
      
    );
  }


export default Mobo