import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <div className=''>
                <div className='flex justify-between items-center w-11/12 mx-auto'>
                    <h1 className='text-slate-50 font-extrabold text-3xl'>MEAL DB</h1>
                    <nav className='text-white'>
                        <ul className='flex gap-5 text-xl font-medium navbar'>
                            <NavLink to='/'>Home</NavLink>
                            <NavLink to='/items'>Items</NavLink>
                            <NavLink to='/about'>About</NavLink>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default Navbar;