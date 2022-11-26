import React from 'react';
import './Slider.css'
const Slider = () => {
    return (
    <div>
        <div className="carousel w-full">
          {/* 1st silder */}
        <div id="slide1" className="carousel-item relative w-full">

          <img  alt='' src="http://www.polymagnet.com/media/laptop-banner.jpg" className="w-full" />

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <div className="absolute flex justify-between transform -translate-y-1/2 right-40 top-1/2">
            <div>
            <p className='text-5xl font-bold responsive-font'>Sell/buy Your Products —<br /> I am Here to Save Your Money! </p><p className='text-xl mt-4 mb-10 responsive-font'>It is open source website.<br />I build for you — inside and out! Saving your time Since — Well, <br /> Beginning of Time!</p>
            </div>
           </div>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div> 
        </div> 
      {/* 2nd slider */}
        <div id="slide2" className="carousel-item relative w-full">
          <img alt='' src="https://hpupgradeprogram.com/Redemption/commonupgradeoffer/images/new-banner.jpg" className="w-full" /> 
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
           <div className="absolute flex justify-between transform -translate-y-1/2 left-40 top-1/2">
           <div>
           <p className='text-5xl font-bold responsive-font'>Sell/buy Your Products —<br /> I am Here to Save Your Money! </p><p className='text-xl mt-4 mb-10 responsive-font'>It is open source website.<br />I build for you — inside and out! Saving your time Since — Well, <br /> Beginning of Time!</p>
            </div>
           </div>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div> 
        </div> 
      </div>
    </div>
    );
};

export default Slider;