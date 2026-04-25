import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Item from '../components/Item';

const Items = () => {
    const allItems = useLoaderData();
    const items = allItems.meals;

    console.log(items);
    return (
        <div>
            <h1>Items: {items.length}</h1>
            <div className='grid grid-cols-4 gap-5'>
                {
                    items.map(item => <Item key={item.idMeal} item={item}></Item>)
                }
            </div>
        </div>
    );
};

export default Items;