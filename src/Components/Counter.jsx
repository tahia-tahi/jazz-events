import React from 'react';
import CountUp from 'react-countup';

const Counter = () => {
  const countData = [
    { count: '535', label: 'Events Organized' },
    { count: '16173', label: 'Active Users' },
    { count: '142380', label: 'Tickets Sold' },
  ];

  return (
    <div className='w-11/12 mx-auto p-3 my-5'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 py-16 text-center bg-[#0D1D31] rounded-xl'>
        {countData.map((item, index) => (
          <div className='space-y-3' key={index}>
            <h1 className='text-white text-3xl md:text-4xl lg:text-5xl font-bold'>
              <CountUp end={parseInt(item.count)} duration={3} useEasing={false} />+
            </h1>
            <div className='h-[2px] w-[40px] mx-auto bg-white'></div>
            <p className='text-white text-sm md:text-base'>{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Counter;
