import React from 'react';
import Navbar from '../Navber/Navbar';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;