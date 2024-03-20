"use client"


import { useState, useEffect} from 'react';

async function fetchMealIdeas(ingredient){
    if (ingredient === '') {
        return null;
    }
    else {
    const response = await fetch (`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
    const data = await response.json();
    return data.meals;
}

}


export default function MealIdeas({ingredient}) {
    const [meals, setMeals] = useState([]);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        if (ingredient !== null && ingredient !== '') {
        loadMealIdeas(ingredient);}
        else {
            setMeals([]);
        }
    }, [ingredient]);

    const loadMealIdeas = async () => {
        try {
            const url = await fetchMealIdeas(ingredient);
            if (url) {
                setMeals(url);
                setError(null); 
            } else {
                setError('No meal ideas found');
                setMeals([]);
            }
        } catch (error) {
            setError('Error fetching meal ideas');
        }
    }

    return (
        <div className = 'flex flex-col items-center text-slate-200 bg-slate-900 p-2 rounded-md' >
            {ingredient === ''? <h2 className = 'text-xl font-bold'>Meal Ideas</h2> : <h2 className = 'text-xl font-bold'>Meal Ideas for {ingredient}</h2>}
            {ingredient === '' ? (
                <p>Select an ingredient to see meal ideas</p>
            ) : (
                <>
                    {meals.length === 0 && <p>No meals found with {ingredient}</p>}
                    <ul className = 'flex flex-col items-center'>
                        {meals.map((meal, index) => (
                            <li key={index}>{meal.strMeal}</li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    )
}