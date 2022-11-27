import React from 'react';
import Advertise from '../Advertise/Advertise';
import Category from '../Category/Category';
import SellForCash from '../SellForCash/SellForCash';
import Slider from '../Slider/Slider';

const Home = () => {
    
    return (
        <div>
           <Slider></Slider>
           <Category></Category>
           <Advertise></Advertise>
           <SellForCash></SellForCash>
        </div>
    );
};

export default Home;