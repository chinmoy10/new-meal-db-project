import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ItemDetails = () => {
    const i = useLoaderData();
    const item = i.meals[0]
    console.log(item);

    const { strMeal, strInstructions, strMealThumb, strYoutube, strSource, dateModified } = item || {};

    return (
        <>
            <h1>Item: {item.idMeal}</h1>
            <div className="card xl:card-side bg-base-200 shadow-lg">
                <figure className=''>
                    <div className='lg:w-[400px]'>
                        <img
                            src={strMealThumb}
                            alt="Album"
                            className='w-full h-full' />
                    </div>
                </figure>
                <div className="card-body flex-1">
                    <h2 className="card-title">{strMeal}</h2>
                    <p>{strInstructions}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Listen</button>
                    </div>
                </div>
            </div>
            {/* <div className='flex'>
                <div className='w-[400px]'>
                    <img src={strMealThumb} alt="" />
                </div>
                <div className='flex-1'>
                    <h2>{strMeal}</h2>
                    <p>{strInstructions}</p>
                </div>
            </div> */}
        </>
    );
};

export default ItemDetails;