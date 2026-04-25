import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ item }) => {

    const { idMeal, strMeal, strMealThumb, dateModified } = item || {};


    return (
        <>
            <div className="card bg-base-300 shadow-xl">
                <figure>
                    <img
                        src={strMealThumb}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {strMeal}
                    </h2>
                    <p className='text-pink-500 font-medium'>{dateModified}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/item/${idMeal}`} className="badge badge-lg text-white text-lg px-5 py-3 bg-yellow-500 shadow-md">Details</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Item;