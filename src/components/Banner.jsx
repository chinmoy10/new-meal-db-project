import React from 'react';
import bannerImg from "../assets/banner.jpg"
const Banner = () => {
    return (
        <>
            <div className='hero bg-banner min-h-[847px]'>
                {/* <img src={bannerImg} alt="" /> */}
                <div className='bg-slate-950/55 w-full h-full'>
                    <div className='flex flex-col gap-4 items-center justify-center text-center h-full'>
                        <h1 className='text-8xl font-semibold text-white'>Best Food Center</h1>
                        <p className='text-2xl font-light text-gray-200'>There have different types of food items which all are so great and delicious. <br/> So, please come here and select your lovely Yummy Foods.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;