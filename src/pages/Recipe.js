import React from 'react';
import RecipeOverviewCard from '../components/RecipeComponents/RecipeOverviewCard';
import '../styles/Recipe.css';

function Recipe() {
    return (
        <div className='recipe-window-background'>
            <h1 id="Recipe-Name">Penne alla Vodka</h1>
            <RecipeOverviewCard/>
        </div>
    );
}

export default Recipe
