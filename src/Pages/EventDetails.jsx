import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router';
import NavBar from '../Components/NavBar';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet-async';

const EventDetails = () => {
    const eventData = useLoaderData();
    const { id } = useParams();
    const [details, setDetails] = useState({});

    useEffect(() => {
        const eventDetails = eventData.find((singleEvent) => singleEvent.id == id);
        setDetails(eventDetails);
    }, [eventData, id]);

    const handleReserveSeat= ()=>{
        toast.success('Reserved Seat Successfully!!')
    }

    return (
        <div className="bg-gray-50 min-h-screen">
            <Helmet>
                <title>Details Of Events</title></Helmet>
            <NavBar />

            <div className="max-w-6xl mx-auto px-4 py-10">
                <div className="grid md:grid-cols-2 gap-10 items-start">
                    <div className="rounded-xl overflow-hidden shadow-lg">
                        <img src={details.thumbnail} alt={details.name} className="w-full object-cover h-80 md:h-full" />
                    </div>

                    <div className="space-y-4">
                        <h1 className="text-4xl font-bold text-gray-800">{details.name}</h1>
                        <p className="text-gray-600 text-lg">{details.description || 'No description available.'}</p>

                        <div className="mt-4 space-y-2">
    {details.date && (
        <p className="text-sm text-gray-500">
            <strong>Date:</strong> {details.date}
        </p>
    )}
    {details.location && (
        <p className="text-sm text-gray-500">
            <strong>Location:</strong> {details.location}
        </p>
    )}

    <Link to={'/'}
        className="btn btn-primary mt-4 hover:btn-secondary "
    >
        Back to Events
    </Link>
</div>

                    </div>
                </div>

                <div className="mt-16 max-w-lg mx-auto bg-white p-8 rounded-xl shadow-lg">
                    <h2 className="text-2xl font-bold text-center text-primary mb-6">Reserve Your Seat</h2>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-gray-700 mb-1">Name</label>
                            <input type="text" name="name" className="w-full input input-bordered" placeholder="Your Name" required/>
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-1">Email</label>
                            <input type="email" name="email" className="w-full input input-bordered" placeholder="Your Email" required />
                        </div>
                        <button onClick={handleReserveSeat} type="submit" className="btn btn-primary w-full mt-4 hover:btn-secondary">
                            Reserve Seat
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EventDetails;
