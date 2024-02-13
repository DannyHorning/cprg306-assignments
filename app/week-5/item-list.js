"use client";

import { useState } from 'react';
import Item from './item.js';
import items from './items.json';

export default function ItemList() {
  const [sortBy, setSortBy] = useState('name');

  function handleSortBy(event) {
    event.preventDefault();
    return items.sort((a, b) => {
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      } else if (sortBy === 'category') {
        return a.category.localeCompare(b.category);
      }
    })};

  return (
  <div>
    <button onClick={handleSortBy} value="name" className='bg-slate-700 p-1 rounded-md hover:bg-blue-300 active:bg-slate-800'>Sort by Name</button>
    <button onClick={handleSortBy} value="category" className='bg-slate-700 p-1 rounded-md hover:bg-blue-300 active:bg-slate-800'>Sort by Category</button>
    <div className='flex flex-wrap justify-center'>
      {items.map((item, index) => (
        <Item key={index} name={item.name} quantity={item.quantity} category={item.category} />
      ))}
      </div>
</div>
  )
}