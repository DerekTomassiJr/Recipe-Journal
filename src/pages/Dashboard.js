import React from 'react'
import '../styles/Dashboard.css'
import pasta from '../assets/penne.jpg';
import ramen from '../assets/ramen.jpg';
import cheesecake from '../assets/cheesecake.jpg';
function Dashboard() {
  return (
    <div>
    <div className='profile-header'></div>
    <div id='profile-img'></div>   
    <div className='profile-container'>
    <div className='row-container'>
      <div className='profile-section col'>
        <h3 id='username'>Admin Derek</h3>
        <p>I like edm music, programming, and making dope recipes.</p>
      </div>
      <div className='stats col'>
      <div className='stat'>
        <h3>14</h3>
        <p>Recipes</p>
        </div>
        <div className='stat'>
        <h3>3.5/5</h3>
        <p>Average Ratings</p>
        </div>
        <div className='stat'>
        <h3>9/15/2024</h3>
        <p>Date Joined</p>
        </div>
      </div>
      </div>
  
  
  <div className='recipe-row-container'>
  <div className='Recipes'>
    <h1 className='display-5 text-center' id='title'>Saved Recipes</h1>

    <div className='Recipe'>
      <img className='recipe-img' src={pasta} alt='Penne alla Vodka' />
      <div className='recipe-text'>
        <h2 id='Recipe-title'>Penne alla Vodka</h2>
        <p>Italian | Pasta | Difficulty-Amateur</p>
        <p>A pasta dish made primarily with vodka and penne, usually accompanied by heavy cream.</p>
      </div>
      <button className='view-recipe'>View Recipe</button>
      <div className='stars'>⭐️⭐️⭐️⭐️⭐️</div>
    </div>

    <div className='Recipe'>
      <img className='recipe-img' src={ramen} alt='Toknotsu Ramen' />
      <div className='recipe-text'>
        <h2 id='Recipe-title'>Toknotsu Ramen</h2>
        <p>Japanese | Ramen | Difficulty-Advanced</p>
        <p>Japanese noodle soup made with a thick, creamy, and cloudy pork bone broth.</p>
      </div>
      <button className='view-recipe'>View Recipe</button>
      <div className='stars'>⭐️⭐️⭐️⭐️⭐️</div>
    </div>

    <div className='Recipe'>
      <img className='recipe-img' src={cheesecake} alt='Strawberry Cheesecake' />
      <div className='recipe-text'>
        <h2 id='Recipe-title'>Strawberry Cheesecake</h2>
        <p>Greek | Dessert | Difficulty-Intermediate</p>
        <p>rich and creamy dessert with a layer of sweet cream cheese filling on top of graham cracker crust.</p>
      </div>
      <button className='view-recipe'>View Recipe</button>
      <div className='stars'>⭐️⭐️⭐️⭐️⭐️</div>
    </div>
  </div>
</div>
      </div>
      </div>
  )
}

export default Dashboard
