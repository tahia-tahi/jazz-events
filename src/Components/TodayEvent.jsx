import React from 'react';
import { format } from "date-fns";
import { SlCalender } from "react-icons/sl";


const TodayEvent = () => {
    return (
      <div className='bg-black py-10'>
        <div  className='w-11/12 px-3 mx-auto flex justify-between items-center'>
            <h1 className='font-bold text-primary'>Todays Schedule</h1>

<div>
<p className='font-bold text-primary flex gap-3 items-center'> <SlCalender />

            {format(new Date(), " MMMM MM , yyyy")}
            </p>

            <button className='btn btn-primary mt-3'>See All Events</button>
</div>
            


        </div>
      </div>


    );
};

export default TodayEvent;