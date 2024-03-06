"use client";

import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";
import Link from "next/link";
import { useState } from "react";

export default function Page() {
    const [items, setItems] = useState(itemsData);
    const handleAddItem = (item) => { setItems([...items, item  ]) };
    return (
        <main className='flex flex-col justify-center items-center text-center'>
        <Link href="/" className='text-slate-200 bg-slate-900 p-2 rounded-md text-lg hover:bg-slate-700'>Home</Link>
        <h1 className='mt-4 text-2xl font-bold'>Shopping List</h1>
        <div><ItemList items={items} /></div>
        <div><NewItem onAddItem={handleAddItem} /></div>
        </main>
    );
}   
