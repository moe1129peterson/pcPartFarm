/* eslint-disable no-unused-expressions */

import React, { useState } from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import {MdArrowBack, MdArrowForward} from 'react-icons/md'
import './brand.css'; 
 /*eslint-disable-next-line*/
import reviews from '../../assets/data/review';

const Brand = () => {
   /*eslint-disable-next-line*/
  const [ activeIndex, setActiveIndex] = useState(0); 
  const activeSlide = reviews[activeIndex];
  function clickPrev(){
    if(activeIndex>=reviews.length-1){
      setActiveIndex(0);
    }else {
      setActiveIndex((oldIndex) => oldIndex+1)
    }
  }
  function clickNext(){
    if(activeIndex<=0){
      setActiveIndex(reviews.length-1);
    }else{
      setActiveIndex((oldIndex => oldIndex -1));
    }

  }

  return (
    <div className='container_review'>
      <h1 className='review'>Review</h1>
      <div className='review_wrap'>
        <SwitchTransition>
          <CSSTransition>
            <div className='review_customer'>
              <div className='review_detail'>
              <p className='gpu-listText'>{activeSlide.review}</p>
              </div>
              <h2 className='review_title'>{activeSlide.name}</h2>
              <p className='gpu-listText'>{activeSlide.title}, {activeSlide.company}</p>
            </div>

          </CSSTransition>
        </SwitchTransition>

      </div>
      <div className='arrows'>
        <div className='prev'
          onClick={clickPrev}
          role='button'
          tabIndex={0}
          onKeyDown={clickPrev}
        >
          <MdArrowBack />

        </div>
        <div className='next'
          onClick={clickNext}
          role='button'
          tabIndex={0}
          onKeyDown={clickNext}
        > 
          
          <MdArrowForward />

        </div>
      </div>

    </div>
  )
}

export default Brand