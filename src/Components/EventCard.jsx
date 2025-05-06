import React from 'react';
import { Link } from 'react-router';

const EventCard = ({ events }) => {
  return (
    <div className='bg-white rounded-2xl shadow-md p-4 w-full max-w-xs mx-auto hover:shadow-lg transition duration-300'>
      <img
        className='w-full h-[200px] object-cover rounded-xl mb-3'
        src={events.thumbnail}
        alt={events.name}
      />
      <h2 className='text-lg md:text-xl text-accent font-semibold'>{events.name}</h2>
      <p className='text-base text-gray-500 mt-1'>{events.category}</p>
      <p className='text-sm text-secondary'>{events.date}</p>
      <p className='text-sm text-secondary mb-2'>{events.location}</p>
      <p className='text-primary font-bold text-md mb-4'>{events.entry_fee} TK</p>
      <Link
        to={`/eventdetails/${events.id}`}
        className='btn btn-primary w-full hover:btn-secondary'
      >
        View Details
      </Link>
    </div>
  );
};

export default EventCard;
