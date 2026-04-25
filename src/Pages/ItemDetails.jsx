import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ItemDetails = () => {
    const i = useLoaderData();
    const item = i.meals[0]
    console.log(item);
    return (
        <div>
            <h1>Item: {item.idMeal}</h1>
        </div>
    );
};

export default ItemDetails;