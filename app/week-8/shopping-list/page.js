"use client";

import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";
import Link from "next/link";
import { useState } from "react";
import { useUserAuth } from "../_utils/auth-context.js";

export default function Page() {
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState('');
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    const handleItemSelect = (item) => {
        const noEmojis = item.name.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');
        setSelectedItemName(noEmojis.toLowerCase().split(',')[0].trim());
    }

    const handleAddItem = (item) => { setItems([...items, item  ]) };

    return (
        <div className = 'flex flex-row justify-center mt-3'>
        <main className='flex flex-col justify-center items-center text-center'>
        <Link href="/" className='text-slate-200 bg-slate-900 p-2 rounded-md text-lg hover:bg-slate-700'>Home</Link>
        <h1 className='mt-4 text-2xl font-bold'>Shopping List</h1>
        {user && <div><ItemList items={items} onItemSelect={handleItemSelect}/></div>}
        {!user && <div><p>Please sign in to view your shopping list</p></div>}
        </main>
        <div className = 'flex flex-col items-center'>
        <MealIdeas ingredient={selectedItemName}/>
        <NewItem onAddItem={handleAddItem}/></div>
        </div>
    );
}   
