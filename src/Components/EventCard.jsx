import React from 'react';
import { Link } from 'react-router';

const EventCard = ({events}) => {
    console.log(events);
    return (
        <div className=''>
            <img className='w-[270px] h-[250px] mb-1 rounded-2xl' src={events.thumbnail} alt="" />
            <h2 className='text-xl text-accent font-semibold'>{events.name}</h2>
            <p className=' text-base-300 mt-3'>{events.category}</p>
            <p className='text-secondary'>{events.date}</p>
            <p className='text-secondary mb-3'>{events.location}</p>
            <p className='text-primary font-bold'>{events.entry_fee} tk.</p>
            <Link to={`/eventdetails/${events.id}`} className='btn btn-primary btn-wide hover:btn-secondary'>View Details</Link>
            
        </div>
    );
};

export default EventCard;