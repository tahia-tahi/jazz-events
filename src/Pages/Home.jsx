import React from 'react';
import Slider from '../Components/Slider';
import Events from '../Components/Events';
import Counter from '../Components/Counter';
import TodayEvent from '../Components/TodayEvent';


const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <TodayEvent></TodayEvent>
            <Events></Events>
            <Counter></Counter>
            
        </div>
    );
};

export default Home;