import React from 'react';
import Category from '../Category/Category';
import SellForCash from '../SellForCash/SellForCash';
import Slider from '../Slider/Slider';

const Home = () => {
    
    return (
        <div>
           <Slider></Slider>
           <Category></Category>
           <SellForCash></SellForCash>
        </div>
    );
};

export default Home;