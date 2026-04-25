import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import "../CSS/style.css"

const MainLayout = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className='w-10/12 mx-auto'>
                <Outlet></Outlet>
            </div>
        </>
    );
};

export default MainLayout;