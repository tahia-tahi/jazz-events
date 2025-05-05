import React from 'react';
import CountUp from 'react-countup';

const Counter = () => {

    const countData = [

        {count :'535', label:'Events Organized'},
        {count :'16173', label:'Active Users'},
        {count :'142380', label:'Tickets Sold'},

    ] 
    return (
        <div className='w-11/12 mx-auto p-3 my-5'>
            <div className='grid grid-cols-3 gap-5 py-20 text-center bg-[#0D1D31]'>
           {
            countData.map((item,index)=> 
            <div className='space-y-3' key={index}>
                <h1 className='text-white text-3xl'><CountUp end={parseInt(item.count)} duration={3} useEasing={false}></CountUp>+</h1>
                <div className='border-1 mx-auto w-[50px] border-white'></div>
                <p className='text-white text-[15px]'>{item.label}</p>

            </div>)
           }
            </div>
            
        </div>
    );
};

export default Counter;