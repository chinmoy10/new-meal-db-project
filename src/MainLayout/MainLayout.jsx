import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet, useNavigation } from 'react-router-dom';
import "../CSS/style.css"

const MainLayout = () => {
    const navigation = useNavigation();
    return (
        <>
            <Navbar></Navbar>
            {
                navigation.state === "loading" ?
                    <p className='flex justify-center items-center h-[800px]'>loading...</p> :
                    <div className='w-10/12 mx-auto'>
                        <Outlet></Outlet>
                    </div>
            }
        </>
    );
};

export default MainLayout;