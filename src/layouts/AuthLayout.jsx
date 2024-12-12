import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AuthLayout = () => {
    return (
        <div className='font-poppins  mx-auto bg-gray-200'>
            <header className='py-3 '>
                <Navbar/>
            </header>
            <Outlet />
            <Footer/>
        </div>
    );
};

export default AuthLayout;