import React from 'react';
import { Link } from 'react-router';
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='bg-base-200 min-h-[150px] w-full px-4 md:px-12 flex flex-col md:flex-row justify-between items-center py-6'>
      <div className='mb-4 md:mb-0'>
        <h1 className='text-2xl text-primary font-bold mb-3'>Jazz Events</h1>
        <div className='flex gap-4 text-primary'>
          <FaFacebook className='hover:text-secondary' size={25} />
          <RiInstagramFill className='hover:text-secondary' size={25} />
          <FaTwitter className='hover:text-secondary' size={25} />
        </div>
      </div>

      <div className='text-center md:text-right space-y-1'>
        <Link to="/privacy-policy" className='block text-primary font-semibold hover:text-secondary'>
          Privacy Policy
        </Link>
        <Link to="/terms&conditions" className='block text-primary font-semibold hover:text-secondary'>
          Terms and Conditions
        </Link>
      </div>
    </div>
  );
};

export default Footer;
