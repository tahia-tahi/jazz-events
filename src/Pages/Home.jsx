import React from 'react';
import Slider from '../Components/Slider';
import Events from '../Components/Events';
import Counter from '../Components/Counter';
import TodayEvent from '../Components/TodayEvent';
import { Helmet } from 'react-helmet-async';


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Slider></Slider>
            <TodayEvent></TodayEvent>
            <Events></Events>
            <Counter></Counter>
            
        </div>
    );
};

export default Home;