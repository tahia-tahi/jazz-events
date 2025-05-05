import React from 'react';
import NavBar from '../Components/NavBar';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <main className='w-11/12 mx-auto p-3'>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default AuthLayout;