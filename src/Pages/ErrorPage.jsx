import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='bg-base-200 min-h-screen flex justify-center items-center '>
          <Helmet>
            <title> Error</title>
           </Helmet>

          <div className='shadow border border-accent rounded text-center p-10'>
          <h1 className='text-primary text-5xl'>Page Not Found</h1>
          <Link to={'/'}
        className="btn btn-primary mt-10 hover:btn-secondary "
    >
        Back to Events
    </Link>
          </div>

          
        </div>
    );
};

export default ErrorPage;