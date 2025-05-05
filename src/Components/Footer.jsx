import React from 'react';
import { Link } from 'react-router';
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa6";




const Footer = () => {
    return (
     

            <div className='bg-base-200 h-[150px]   mx-auto px-15 flex justify-between items-center'>

            <div>
            <h1 className='text-2xl text-primary font-bold mb-4'>Jazz Events</h1>
            <div className='flex justify-start items-center gap-4 text-primary'>
            <FaFacebook className='hover:text-secondary' size={25} />
            <RiInstagramFill className='hover:text-secondary' size={25} />
            <FaTwitter className='hover:text-secondary' size={25}/>
            </div>
            </div>



            <div className='grid grid-cols-1' >
                <Link to={'/privacy-policy'} className='text-primary font-semibold hover:text-secondary' >Privacy Policy</Link>
                <Link to={'/terms&conditions'} className='text-primary font-semibold hover:text-secondary'>Terms and Conditions</Link>
            </div>

            </div>





     
    );
};

export default Footer;