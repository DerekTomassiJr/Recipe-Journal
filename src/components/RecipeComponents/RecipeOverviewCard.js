import React from 'react';
import RecipeTiming from './RecipeTiming';
import '../../styles/RecipeOverviewCard.css';
import recipe_image from '../../assets/penne.jpg';

var prepTime = 25;
var cookTime = 40;

function RecipeOverviewCard() {
    return (
        <div id="recipe-card-container">
            <div id="recipe-image-container">
                <img className="recipe-image" src={recipe_image}/>
            </div>
            <div id="recipe-overview-data-container">
                <div id="rating-container">
                    <h3 id="rating-value">4.9</h3>
                    <div id="star rating">⭐️⭐️⭐️⭐️⭐️</div>
                </div>
                <div className="TimingContainer">
                    <RecipeTiming
                    timingHeader={"Prep"}
                    timingValue={prepTime}/>
                    <RecipeTiming
                    timingHeader={"Cook"}
                    timingValue={cookTime}/>
                    <RecipeTiming
                    timingHeader={"Total"}
                    timingValue={prepTime + cookTime}/>
                </div>
            </div>
        </div>
    );
}

export default RecipeOverviewCard;
