"use client";

import { useState } from "react";

export default function NewItem({onAddItem}){
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("Produce");

    function generateId() {
      
      return Math.random().toString(36).substr(2, 9);
  }

    function handleSubmit(event){
        event.preventDefault();
        const id = generateId();
        const newItem = {
            id: id,
            name: name,
            quantity: quantity,
            category: category
          };
          
        onAddItem(id, newItem);
    }
    return (
        <div className="flex flex-col items-center text-slate-200 m-4 bg-slate-900 p-4 rounded-md">
        <h2 className="text-2xl font-bold text-slate-200">Add New Item</h2>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <label className='mb-2 text-slate-200'>
            Name:
            <input type="text" value={name} onChange={(event) => setName(event.target.value)} 
            required
            className="text-slate-200 p-1 rounded-md bg-slate-700 ml-1"/>
          </label>
          <label className='mb-2'>
            Quantity:
            <input type="number" value={quantity} onChange={(event) => setQuantity(Number(event.target.value))} 
            min = "1"
            max = "99"
            required
            className="text-slate-200 p-1 rounded-md bg-slate-700 ml-1"
            />
          </label>
          <label className='mb-2'>
            Category:
            <select value={category} onChange={(event) => setCategory(event.target.value)} 
            required
            className="text-slate-200 p-1 rounded-md bg-slate-700 ml-1"
            >
                <option value="Produce">Produce</option>
                <option value="Dairy">Dairy</option>
                <option value="Bakery">Bakery</option>
                <option value="Meat">Meat</option>
                <option value="Frozen Foods">Frozen Foods</option>
                <option value="Canned Goods">Canned Goods</option>
                <option value="Dry Goods">Dry Goods</option>
                <option value="Beverages">Beverages</option>
                <option value="Snacks">Snacks</option>
                <option value="Household">Household</option>
                <option value="Other">Other</option>
            </select>
          </label>
          <button type="submit" className='m-4 bg-slate-700 p-1 rounded-md hover:bg-blue-300 active:bg-slate-800'>Submit</button>
          
        </form>
        </div>
      );
    }