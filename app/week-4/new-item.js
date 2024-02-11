"use client";

import { useState } from "react";

export default function NewItem(){
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("Produce");

    function handleSubmit(event){
        event.preventDefault();
        const item = {
            name: name,
            quantity: quantity,
            category: category
          };
        console.log(item);
        alert(`Shopping list item added. Name:${name}, Quantity: ${quantity}, Category: ${category}`);
    }
    return (
        <div>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" value={name} onChange={(event) => setName(event.target.value)} 
            required/>
          </label>
          <label>
            Quantity:
            <input type="number" value={quantity} onChange={(event) => setQuantity(Number(event.target.value))} 
            min = "1"
            max = "99"
            required
            />
          </label>
          <br />
          <label>
            Category:
            <select value={category} onChange={(event) => setCategory(event.target.value)} 
            required
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
          <br />
          <button type="submit">Submit</button>
        </form>
        </div>
      );
    }