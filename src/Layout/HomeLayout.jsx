import React from 'react';
import NavBar from '../Components/NavBar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../Components/Footer';
import Loading from '../Pages/Loading';

const HomeLayout = () => {

    const {state} = useNavigation()

    return (
        <div>
            <NavBar></NavBar>
            {import.meta.env.VITE_name}
           {state == 'loading' ? <Loading></Loading> : <Outlet></Outlet>} 
            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;