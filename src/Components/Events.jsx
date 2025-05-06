import React from 'react';
import { useLoaderData } from 'react-router';
import EventCard from './EventCard';

const Events = () => {
  const eventData = useLoaderData();
  console.log(eventData);

  return (
    <div className='mx-auto w-11/12 p-3 mt-16'>
      <h1 className='text-primary text-center text-3xl font-bold mb-8'>Check Our Upcoming Events</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
        {eventData.map((events) => (
          <EventCard key={events.id} events={events} />
        ))}
      </div>
    </div>
  );
};

export default Events;
