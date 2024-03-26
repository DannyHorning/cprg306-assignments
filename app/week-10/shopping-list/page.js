"use client";

import NewItem from "./new-item";
import ItemList from "./item-list";
import { getItems, addItem } from "../_services/shopping-list-service";
import MealIdeas from "./meal-ideas";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useUserAuth } from "../_utils/auth-context.js";

export default function Page() {
    const [items, setItems] = useState([]);
    const [selectedItemName, setSelectedItemName] = useState('');
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    const loadItems = async () => {
        try {
            const items = await getItems(user.uid);
            setItems(items);
        } catch (error) {
            console.error("Error loading items:", error);
        }
    };

    useEffect(() => {
        loadItems();
    }, []);

    const handleItemSelect = (item) => {
        const noEmojis = item.name.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');
        setSelectedItemName(noEmojis.toLowerCase().split(',')[0].trim());
    }

    const handleAddItem = async (name) => {
        try {
            const newItemId = await addItem(user.uid, { name });
            const newItem = { id: newItemId, name };
            setItems(prevItems => [...prevItems, newItem]);
        } catch (error) {
            console.error("Error adding item:", error);
        }
    };

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
