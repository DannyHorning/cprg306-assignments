"use client";

import { useState } from 'react';
import Item from './item.js';
import items from './items.json';

export default function ItemList() {
  const [sortBy, setSortBy] = useState('name');

  function handleSortBy(type) {
    if (type === 'name') {
        return () => setSortBy('name');
        }
    if (type === 'category') {
        return () => setSortBy('category'); 
        }}

    const sortedItems = [...items].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  
  return (
  <div>
    <button onClick={handleSortBy('name')} value="name" className='bg-slate-900 p-1 rounded-md hover:bg-blue-300 active:bg-slate-800 text-slate-200'>Sort by Name</button>
    <button onClick={handleSortBy('category')} value="category" className='bg-slate-900 p-1 rounded-md m-1 hover:bg-blue-300 active:bg-slate-800 text-slate-200'>Sort by Category</button>
    <div className=' text-slate-200'>
      {sortedItems.map((item, index) => (
        <Item key={index} name={item.name} quantity={item.quantity} category={item.category} />
      ))}
      </div>
</div>
  )
}