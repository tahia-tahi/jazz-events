import React from 'react';
import { Link } from 'react-router';
import NavBar from '../Components/NavBar';
import { Helmet } from 'react-helmet-async';

const About = () => {
    return (
        <div className="bg-gray-50 min-h-screen">
            <Helmet>
                <title>About Us</title>
            </Helmet>
            <NavBar />

            <div className="max-w-6xl mx-auto px-4 py-10">
                <div className="bg-white p-8 rounded-xl shadow-lg space-y-6">
                    <h1 className="text-4xl font-bold text-primary text-center">About Us</h1>
                    <p className="text-gray-600 text-lg">
                        Welcome to our event platform! We are dedicated to bringing people together through inspiring and meaningful events.
                        Our goal is to create unforgettable experiences that connect communities, spark conversations, and foster growth.
                    </p>

                    <p className="text-gray-600 text-lg">
                        Whether it's a tech seminar, a cultural gathering, or a creative workshop, our team works tirelessly to ensure everything runs smoothly.
                        We believe in the power of shared knowledge, collaboration, and innovation.
                    </p>

                    <p className="text-gray-600 text-lg">
                        Thank you for being part of our journey. We’re excited to continue building a space where everyone feels welcome, informed, and inspired.
                    </p>

                    <div className="text-center mt-6">
                        <Link to="/" className="btn btn-primary hover:btn-secondary">
                            Back to Home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
