/* eslint-disable no-unused-expressions */
import React from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import './brand.css'; 

const Brand = () => {
  return (
    <div className='container_review'>
      <h1 className='review'>Review</h1>
      <div className='review_wrap'>
        <SwitchTransition>
          <CSSTransition>
            <div className='review_customer'>
              <div className='review_detail'>
              <p className='gpu-listText'>The Nvidia RTX 3060</p>
              </div>
              <h2 className='review_title'>Moe Tsuzuki</h2>
              <p className='gpu-listText'>Web Developer, Sisel International LLC</p>
            </div>

          </CSSTransition>
        </SwitchTransition>

      </div>

    </div>
  )
}

export default Brand