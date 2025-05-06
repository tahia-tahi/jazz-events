import React from 'react';
import { format } from "date-fns";
import { SlCalender } from "react-icons/sl";

const TodayEvent = () => {
  return (
    <div className="bg-black py-10">
      <div className="w-11/12 px-3 mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        
        <h1 className="text-xl md:text-2xl font-bold text-primary">
          Today's Schedule
        </h1>

        <div className="text-left md:text-right">
          <p className="text-primary font-bold flex items-center gap-2">
            <SlCalender />
            {format(new Date(), "MMMM dd, yyyy")}
          </p>

          <button className="btn btn-primary mt-3">See All Events</button>
        </div>
        
      </div>
    </div>
  );
};

export default TodayEvent;
